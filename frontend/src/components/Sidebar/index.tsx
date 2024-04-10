import React, { useState } from "react";
import SidebarProps from "./types";

const Sidebar: React.FC<SidebarProps> = ({
  onSelectDatabase,
  onQuerySelect,
}) => {
  const [selectedDatabase, setSelectedDatabase] = useState<string>("");
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const handleDatabaseChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = event.target.value;
    setSelectedDatabase(selected);
    onSelectDatabase(selected);
  };

  const handleQuerySelect = (query: string) => {
    onQuerySelect(query);
  };

  return (
    <div className="  w-[15%] flex flex-col gap-8 p-5">
        <h1 className="font-bold text-xl">Navigator</h1>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Select Database</h3>
        <select
          className="border border-1 p-1 rounded-md text-center bg-gray-500 text-white font-semibold"
          value={selectedDatabase}
          onChange={handleDatabaseChange}
        >
          <option value="">Select Database</option>
          <option value="BigQuery">Google BigQuery</option>
          <option value="Snowflake">Snowflake</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Query History</h3>
        <ul>
          {queryHistory.map((query, index) => (
            <li key={index} onClick={() => handleQuerySelect(query)}>
              {query}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
