"use client";

import * as React from "react";
import CottageIcon from "@mui/icons-material/Cottage";
import {
  Typography,
  Box,
  Button,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  function createData(title: string, content: string) {
    return { title, content };
  }

  const rows = [
    createData("販売業社の名称 / 運営統括責任者", "Itsuki KIGOSHI"),
    createData("所在地/住所", "請求があったら遅滞なく開示します"),
    createData("e-mail", "itsukikigoshi+githubio@gmail.com"),
    createData("引渡時期", "注文後すぐにご利用いただけます"),
    createData("手数料等の追加料金", "なし"),
    createData("決済手段", "クレジットカード"),
    createData("決済期間", "直ちに処理されます"),
    createData("販売価格", "なし"),
    createData(
      "返金ポリシー",
      "注文日より10日以内に代表（e-mail:itsukikigoshi+githubio@gmail.com）までご連絡頂いた場合に限り，返金を受け付けます．"
    ),
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          placeItems: "center", // Center the content horizontally and vertically
          minHeight: "100vh", // Set a minimum height to fill the entire viewport
          m: 3,
        }}
      >
        {/* The codes below should be more readable */}
        <Typography sx={{ fontSize: 28 }}>特定商取引法に基づく表記</Typography>
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Button href="/" variant="contained" startIcon={<CottageIcon />}>
          Go Home
        </Button>
      </Box>
    </ThemeProvider>
  );
}
