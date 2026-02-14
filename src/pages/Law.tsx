import {Box, Stack, Typography} from "@mui/material";

export default function Law() {
    const rows = [
        ["販売業社 / 運営責任者", "Itsuki KIGOSHI"],
        ["住所 / 電話番号", "請求があったら遅滞なく開示します"],
        ["電子メール", "itsukikigoshi+githubio[at]gmail.com"],
        ["引渡時期", "注文後すぐにご利用いただけます"],
        ["価格 / 追加料金", "なし"],
        ["決済手段", "クレジットカード"],
        ["決済期間", "直ちに処理されます"],
        ["返金", "注文日より10日以内に上記E-mailまでご連絡頂いた場合に限り、返金を受け付けます。"],
    ].map(([title, content]) => ({title, content}));


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Typography sx={{fontSize: 24}}>特定商取引法に基づく表記</Typography>
            <Box
                sx={{
                    display: "grid",
                    placeItems: "left",
                }}
            >
                {rows.map((row) => (
                    <Box key={row.title} sx={{my: 1}}>
                        <Typography sx={{fontWeight: "bold"}}>{row.title}</Typography>
                        <Typography>{row.content}</Typography>
                    </Box>
                ))}
            </Box>
        </Stack>
    )
}
