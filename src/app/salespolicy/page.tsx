import * as React from "react";
import CottageIcon from "@mui/icons-material/Cottage";
import { Typography, Box, Button } from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center", // Center the content horizontally and vertically
        minHeight: "80vh", // Set a minimum height to fill the entire viewport
      }}
    >
      {/* The codes below should be more readable */}
      <Typography sx={{ fontSize: 28 }}>特定商取引法に基づく表記</Typography>
      <Typography>販売業社の名称/運営統括責任者: Itsuki KIGOSHI</Typography>
      <Typography>所在地/住所: 請求があったら遅滞なく開示します</Typography>
      <Typography>e-mail: itsukikigoshi+githubio@gmail.com</Typography>
      <Typography>引渡時期: 注文後すぐにご利用いただけます</Typography>
      <Typography>追加手数料等の追加料金: なし</Typography>
      <Typography>決済手段: クレジットカード</Typography>
      <Typography>決済期間: 直ちに処理されます</Typography>
      <Typography>販売価格: なし</Typography>
      <Typography>
        返金ポリシー: 注文日より10日以内に代表（e-mail:
        itsukikigoshi+githubio@gmail.com）までご連絡頂いた場合に限り，返金を受け付けます．
      </Typography>
      <Button href="/" variant="contained" startIcon={<CottageIcon />}>
        Go Home
      </Button>
    </Box>
  );
}
