import React, { FC } from "react";

interface Props {
  column: any;
}

const SelectFilter: FC<Props> = ({
  column: { filterValue, setFilter, preFilteredRows, id }
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: any[] = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });

    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      className="border"
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
