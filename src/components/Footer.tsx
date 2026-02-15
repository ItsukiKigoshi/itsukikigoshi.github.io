import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {Button, ButtonGroup, Link as MuiLink, Stack, Typography} from "@mui/material";


export default function Footer() {
    const pathname = useLocation().pathname;


    return (
        <Stack
            sx={{
                backgroundColor: "transparent",
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
            }}
            spacing={1}
            alignItems="center">
            {/* /law以外のページがあるときの遷移に対応していない余り良くない実装 */}
            <ButtonGroup>
                {pathname == '/' ?
                    (<Button
                        component={RouterLink}
                        to={'/law'}
                        startIcon={<InfoIcon/>}
                    >特定商取引法</Button>) : (
                        <Button
                            component={RouterLink}
                            to={'/'}
                            startIcon={<ArrowBackIcon/>}
                        >Back</Button>)}
            </ButtonGroup>
            <Stack direction="row" spacing={2}>
                <MuiLink
                    href="/itsukikigoshi.asc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PGP Key
                </MuiLink>
                <Typography>/</Typography>
                <MuiLink
                    component={RouterLink}
                    to="https://github.com/ItsukiKigoshi/itsukikigoshi.github.io"
                    target="_blank"
                >
                    Source Code
                </MuiLink>

            </Stack>
        </Stack>
    );
}
