import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DummyTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, backgroundColor: "#20202A", color: "white" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>
              Dessert (100g serving)
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Calories
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell align="right" sx={{ color: "white" }}>
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: "white" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {row.fat}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {row.carbs}
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
