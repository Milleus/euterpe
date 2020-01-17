import React, { FC } from "react";
import {
  useTable,
  Column,
  UseFiltersColumnOptions,
  useFilters,
  usePagination
} from "react-table";

import Button, { ButtonAppearance, ButtonSize } from "../Button";
import Card from "../Card";

export type FilterColumn<D extends object = {}> = Column<D> &
  UseFiltersColumnOptions<D>;

interface Props {
  columns: Array<FilterColumn<any>>;
  data: any[];
}

const Table: FC<Props> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 } as any
    },
    useFilters,
    usePagination
  ) as any;

  return (
    <>
      <div className="flex justify-between mb-4">
        <div>Filter: {headerGroups[0].headers[0].render("Filter")}</div>
        <div>
          <span className="mr-8">
            Displaying {pageIndex + 1} - {pageOptions.length}
          </span>{" "}
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.SMALL}
          >
            <i className="fa fa-chevron-left" />
          </Button>{" "}
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.SMALL}
          >
            <i className="fa fa-chevron-right" />
          </Button>{" "}
        </div>
      </div>
      <Card>
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="p-2 text-left">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="p-2 text-sm">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default Table;
