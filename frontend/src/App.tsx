import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import DisplayTable from "./components/DisplayTable";

const App: React.FC = () => {
  const tableData = [
    { id: 1, name: "test", age: 30 },
    { id: 2, name: "test2", age: 25 },
    { id: 3, name: "test3", age: 35 },
  ];

  const [query, setQuery] = useState<string>("");
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleDatabaseSelect = (database: string) => {
    setSelectedDatabase(database);
  };

  const handleQuerySelect = (query: string) => {
    setQueryHistory((prevHistory) => [...prevHistory, query]);
  };

  return (
    <div className="app flex flex-col gap-10">
      <div className="navbar flex">SQL Editor</div>

      <div className="flex m-10 border border-1 border-gray-300 h-[800px]">
        <Sidebar
          onSelectDatabase={handleDatabaseSelect}
          onQuerySelect={handleQuerySelect}
        />
        <div className="flex flex-col w-[80%]">
          <div className="h-[400px] p-2">
            <Editor value={query} onChange={handleQueryChange} />
          </div>
          <div className="h-1/2">
            <DisplayTable data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
