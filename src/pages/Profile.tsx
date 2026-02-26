import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TheatersIcon from "@mui/icons-material/Theaters";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LanguageIcon from '@mui/icons-material/Language';
import {Avatar, IconButton, Stack, Tooltip, Typography,} from "@mui/material";


export default function Profile() {
    const links = [
        {
            name: "Email",
            Icon: EmailIcon,
            href: "mailto:itsukikigoshi+ghiobtn@gmail.com",
        },
        {
            name: "LinkedIn",
            Icon: LinkedInIcon,
            href: "https://www.linkedin.com/in/itsukikigoshi",
        },
        {
            name: "GitHub",
            Icon: GitHubIcon,
            href: "https://www.github.com/itsukikigoshi",
        },
        {
            name: "Wikipedia",
            Icon: LanguageIcon,
            href: "https://ja.wikipedia.org/wiki/user:Itsukikigoshi",
        },
        {
            name: "Booklog",
            Icon: AutoStoriesIcon,
            href: "https://booklog.jp/users/itsukikigoshi",
        },
        {
            name: "IMDb",
            Icon: TheatersIcon,
            href: "https://www.imdb.com/user/ur163313033/",
        },
        {
            name: "YAMAP",
            Icon: LandscapeIcon,
            href: "https://yamap.com/users/3971974",
        },
    ];

    const linkButtons = links.map((link) => (
        <Tooltip title={link.name} key={link.name}>
            <IconButton
                href={link.href}
                target="_blank"
                color="primary"
                aria-label={link.name}
            >
                <link.Icon/>
            </IconButton>
        </Tooltip>
    ));

    return (
        <Stack
            justifyContent="center"
            spacing={2}
            sx={{
                display: "grid",
                placeItems: "center",
                width: "100%",
            }}
        >
            <Avatar
                alt={`Itsuki Kigoshi Profile Picture`}
                src={`/profile.webp`}
                sx={{width: 200, height: 200}}
            />
            <Typography sx={{fontSize: 28}}>Itsuki Kigoshi / 木越 斎</Typography>
            <Typography>ICU&apos;27 (2004)</Typography>
            <Typography>
                Earth Science, Contemporary Art, Climbing
            </Typography>
            <Stack sx={{justifyContent: "center"}} direction="row" spacing={1}>
                {linkButtons}
            </Stack>
        </Stack>
    )
}
