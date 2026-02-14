import {useMemo} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import Profile from "./pages/Profile.tsx";
import Law from "./pages/Law.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100dvh',
                    width: '100vw',
                    boxSizing: 'border-box',
                }}>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 2
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Profile/>}/>
                            <Route path="/law" element={<Law/>}/>
                        </Routes>
                    </Box>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
}