import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import AceEditor from "react-ace";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import {EditorProps, MyRange } from "./types";

import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";

const Editor: React.FC<EditorProps> = ({ value, onChange, handleRunQuery }) => {
  const [selectedQuery, setSelectedQuery] = useState<string>("");
  const [range, setRange] = useState<MyRange | null>(null);

  const extractData = (range: MyRange) => {
    let extractedText;
    if (range.start.row !== range.end.row) {
      const lines = value.split("\n");
      const linesInRange = lines.slice(range.start.row, range.end.row + 1);
      const extractedParts = linesInRange.map((line, index) => {
        if (index === 0) {
          return line.substring(range.start.column);
        } else if (index === linesInRange.length - 1) {
          return line.substring(0, range.end.column);
        } else {
          return line;
        }
      });
      extractedText = extractedParts.join("\n");
    } else {
      extractedText = value.substring(range.start.column, range.end.column);
    }

    setSelectedQuery(extractedText);
  };

  const handleSelectionChange = (selection: any) => {
    if (selection && selection.getRange) {
      const range = selection.getRange();

      if (
        range.start.row === range.end.row &&
        range.start.column === range.end.column
      ) {
        setRange(null);
      } else {
        setRange(range);
      }
      extractData(range);
    } 
  };

  const handleRun = () => {
    let query = !range ? value : selectedQuery;
    handleRunQuery(query)
  };

  return (
    <div className="mx-1 p-4 flex flex-col gap-4">
      <div className="editor-pane flex font-semibold gap-4">
        <button
          className="border border-1 border-teal-800 bg-teal-600 rounded-md px-2 py-1 text-white flex gap-1 items-center hover:bg-teal-700"
          onClick={handleRun}
        >
          <IoPlayOutline />
          <span>Run Query</span>
        </button>

        <button className="border border-1 border-red-400 rounded-md px-2 py-1 text-red-600 flex gap-1 items-center hover:bg-red-600 hover:text-white">
          <span>Cancel</span>
        </button>
      </div>
      <AceEditor
        className="border bprder-1 border-gray-400"
        mode="sql"
        theme="github"
        value={value}
        onChange={onChange}
        width="100%"
        height="300px"
        fontSize={14}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        onSelectionChange={handleSelectionChange}
      />
     
     {value && (
        <div className="flex flex-col">
        <h3 className="font-semibold text-lg">Query to Run : </h3> 
        <SyntaxHighlighter 
        className="m-0"
        language="sql" style={oneLight}>
          {selectedQuery || value}
        </SyntaxHighlighter>
        </div>
      )}
     
    </div>
  );
};

export default Editor;
