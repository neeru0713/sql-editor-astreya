export interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    handleRunQuery: (value: string) => void;
}

export interface MyRange {
    start: {
        row: number,
        column: number
    },
    end: {
        row: number,
        column: number
    }
}
