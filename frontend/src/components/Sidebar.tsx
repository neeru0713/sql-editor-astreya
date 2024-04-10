import React, { useState } from 'react';

interface SidebarProps {
    onSelectDatabase: (database: string) => void;
    onQuerySelect: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectDatabase, onQuerySelect }) => {
    const [selectedDatabase, setSelectedDatabase] = useState<string>('');
    const [queryHistory, setQueryHistory] = useState<string[]>([]);

    const handleDatabaseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setSelectedDatabase(selected);
        onSelectDatabase(selected);
    };

    const handleQuerySelect = (query: string) => {
        onQuerySelect(query);
    };

    return (
        <div className="sidebar w-[20%] p-2">
            <h3>Database Selection</h3>
            <select value={selectedDatabase} onChange={handleDatabaseChange}>
                <option value="">Select Database</option>
                <option value="BigQuery">Google BigQuery</option>
                <option value="Snowflake">Snowflake</option>
            </select>

            <h3>Query History</h3>
            <ul>
                {queryHistory.map((query, index) => (
                    <li key={index} onClick={() => handleQuerySelect(query)}>
                        {query}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
