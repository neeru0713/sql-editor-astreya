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
    <>
      <div className="navbar flex m-5 font-bold text-3xl p-2 text-gray-700">
        SQL Editor - Astreya
      </div>
      <div className="app flex h-[800px] border mx-10 mt-10">
        <Sidebar
          onSelectDatabase={handleDatabaseSelect}
          onQuerySelect={handleQuerySelect}
        />
        <div className="flex border flex-col w-[85%]">
          <Editor value={query} onChange={handleQueryChange} />
          <DisplayTable data={tableData} />
        </div>
      </div>
    </>
  );
};

export default App;
