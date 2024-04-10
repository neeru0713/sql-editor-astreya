import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import DisplayTable from "./components/DisplayTable";
import { API_URL } from "./config/config";

const App: React.FC = () => {
  const tableData = [
    { id: 1, name: "test", age: 30 },
    { id: 2, name: "test2", age: 25 },
    { id: 3, name: "test3", age: 35 },
  ];

  // Giving a default value
  const [query, setQuery] = useState<string>(`CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(100)
)`);
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleDatabaseSelect = (database: string) => {
    setSelectedDatabase(database);
  };

  const handleQuerySelect = (query: string) => {
   setQuery(query)
  };

  const handleRunQuery = (queryToRun: string) => {
    const payload = {
      query: queryToRun,
      database: selectedDatabase
    }
    setQueryHistory((prevHistory) => [...prevHistory, query]);


    fetch(`${API_URL}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  return (
    <>
      <div className="navbar flex m-5 font-bold text-3xl p-2 text-gray-700">
        SQL Editor - Astreya
      </div>
      <div className="app flex h-[800px] border border-gray-500 rounded-md mx-10 mt-10">
        <Sidebar
        queryHistory={queryHistory}
          onSelectDatabase={handleDatabaseSelect}
          onQuerySelect={handleQuerySelect}
        />
        <div className="flex border  border-r-0 border-t-0 border-b-0 border-gray-500 flex-col w-[85%]">
          <Editor value={query} onChange={handleQueryChange}  handleRunQuery={handleRunQuery} />
          <DisplayTable data={tableData} />
        </div>
      </div>
    </>
  );
};

export default App;
