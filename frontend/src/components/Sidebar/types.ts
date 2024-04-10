interface SidebarProps {
    onSelectDatabase: (database: string) => void;
    onQuerySelect: (query: string) => void;
    queryHistory: string[];
}

export default SidebarProps;
