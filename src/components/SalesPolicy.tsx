import CottageIcon from "@mui/icons-material/Cottage";
import { Box, Button, Typography } from "@mui/material";

export default function SalesPolicy() {
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
    <Box
      sx={{
        display: "grid",
        placeItems: "center", // Center the content horizontally and vertically
        minHeight: "100vh", // Set a minimum height to fill the entire viewport
        m: 2,
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: 24 }}>特定商取引法に基づく表記</Typography>
      <Box
        sx={{
          display: "grid",
          placeItems: "left",
        }}
      >
        {rows.map((row) => (
          <Box key={row.title} sx={{ my: 1 }}>
            <Typography sx={{ fontWeight: "bold" }}>{row.title}</Typography>
            <Typography>{row.content}</Typography>
          </Box>
        ))}
      </Box>

      <Button href="/" variant="contained" startIcon={<CottageIcon />}>
        Go Home
      </Button>
    </Box>
  );
}
