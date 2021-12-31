import React, { useState, useEffect } from "react";
import { useTable } from "react-table";

function Tab() {
  const data = React.useMemo(
    () => [
      {
        col1: "LENGOW",
        col2: "HEALTHY",
        col3: "HEALTHY",
        col4: "DEGRADED",
        col5: "HEALTHY",
        col6: "HEALTHY",
        col7: "HEALTHY",
        col8: "HEALTHY",
        col9: "HEALTHY",
        col10: "HEALTHY",
        col11: "HEALTHY",
        col12: "HEALTHY",
        col13: "HEALTHY"
      },
      {
        col1: "OLAPIC",
        col2: "HEALTHY",
        col3: "HEALTHY",
        col4: "DEGRADED",
        col5: "HEALTHY",
        col6: "HEALTHY",
        col7: "HEALTHY",
        col8: "HEALTHY",
        col9: "HEALTHY",
        col10: "HEALTHY",
        col11: "HEALTHY",
        col12: "HEALTHY",
        col13: "HEALTHY"
      },
      {
        col1: "QUICKBUY",
        col2: "HEALTHY",
        col3: "HEALTHY",
        col4: "DEGRADED",
        col5: "HEALTHY",
        col6: "HEALTHY",
        col7: "HEALTHY",
        col8: "HEALTHY",
        col9: "HEALTHY",
        col10: "HEALTHY",
        col11: "HEALTHY",
        col12: "HEALTHY",
        col13: "HEALTHY"
      },
      {
        col1: "SAMPLES",
        col2: "HEALTHY",
        col3: "HEALTHY",
        col4: "DEGRADED",
        col5: "HEALTHY",
        col6: "HEALTHY",
        col7: "HEALTHY",
        col8: "HEALTHY",
        col9: "HEALTHY",
        col10: "HEALTHY",
        col11: "HEALTHY",
        col12: "HEALTHY",
        col13: "HEALTHY"
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "FLOW / FLUX",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "JP",
        accessor: "col2"
      },
      {
        Header: "US",
        accessor: "col3" // accessor is the "key" in the data
      },
      {
        Header: "UK",
        accessor: "col4" // accessor is the "key" in the data
      },
      {
        Header: "TW",
        accessor: "col5" // accessor is the "key" in the data
      },
      {
        Header: "FR",
        accessor: "col6" // accessor is the "key" in the data
      },
      {
        Header: "DE",
        accessor: "col7" // accessor is the "key" in the data
      },
      {
        Header: "IT",
        accessor: "col8" // accessor is the "key" in the data
      },
      {
        Header: "BE",
        accessor: "col10" // accessor is the "key" in the data
      },
      {
        Header: "NL",
        accessor: "col11" // accessor is the "key" in the data
      },
      {
        Header: "ES",
        accessor: "col12" // accessor is the "key" in the data
      },
      {
        Header: "CH",
        accessor: "col13" // accessor is the "key" in the data
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div>
      <table {...getTableProps()} style={{ border: "solid 1px black" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 0px red",
                    color: "black",
                    fontSize: "8px"
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        fontSize: "6px",
                        backgroundColor: "red"
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tab;
