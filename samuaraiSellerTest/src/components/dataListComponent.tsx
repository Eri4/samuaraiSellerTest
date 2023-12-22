import React from "react";

interface DataListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const DataListComponent = <T extends {}>({ items, renderItem }: DataListProps<T>) => {
    return (
        <ol className="alternating-colors">
            {items.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ol>
    );
};

export default DataListComponent;