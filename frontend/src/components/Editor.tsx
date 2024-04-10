import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const [selectionRange, setSelectionRange] = useState<[number, number] | null>(
    null
  );

  const handleSelectionChange = (selection: any) => {
    if (selection && selection.getRange) {
      const range = selection.getRange();
      console.log(range);
      setSelectionRange([range.start.row + 1, range.end.row + 1]);
    } else {
      setSelectionRange(null);
    }
  };

  return (
    <div className="mr-5 flex flex-col gap-1">
      <div className="editor-pane flex gap-2 font-semibold">
        <button className="border border-1 border-teal-800 bg-teal-600 rounded-md px-2 text-white flex gap-1 items-center hover:bg-teal-700">
          <IoPlayOutline />
          <span>Run Query</span>
        </button>

        <button className="border border-1 border-red-800 bg-red-600 rounded-md px-2 text-white flex gap-1 items-center hover:bg-red-700">
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
    </div>
  );
};

export default Editor;
