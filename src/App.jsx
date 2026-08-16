import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Material UI
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CacheProvider } from '@emotion/react';
import CloudIcon from '@mui/icons-material/Cloud';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    fontFamily: 'IBM',
  },
  direction: 'rtl',
})

// Create rtl cache
const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {

  return (
    <>
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="md"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: {
                  xs: '100%',
                  sm: '600px',
                  md: '700px',
                },
              }}
            >
              <Card sx={{
                width: '100%',
                maxWidth: {
                  xs: '95%',
                  sm: '600px',
                  md: '700px',
                },
                borderRadius: 4,
                background: '#1976D2',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                px: {
                  xs: 2,
                  sm: 3,
                },
                py: 2,
              }}>
                {/* city and date */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <Typography sx={{ fontWeight: '500', lineHeight: 1 }} variant="h2" gutterBottom>
                    القاهره
                  </Typography>

                  <Typography sx={{ color: '#ffffff', lineHeight: 1 }} variant="h5" gutterBottom>
                    مايو ١٥ ٢٠٢٥
                  </Typography>
                </Box>
                <Divider sx={{
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  borderBottomWidth: '2px',
                  mx: 2,
                }} />
                {/* city and date */}
                {/* lower */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {/* Right part */}
                  <Box>
                    {/* temp and pic */}
                    <Box>
                      <Typography variant="h1" sx={{ lineHeight: 1, margin: 0 }}>
                        35
                      </Typography>
                      {/* TODO: weather pic from API */}
                    </Box>
                    {/* temp and pic */}
                    {/* description */}
                    <Box>
                      <Typography sx={{ color: '#ffffff', margin: 0 }} variant="h6">
                        partly cloudy
                      </Typography>
                    </Box>
                    {/* description */}
                    {/* min & max */}
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1,
                    }} >
                      <Typography sx={{ color: '#ffffff' }} variant="h6" gutterBottom>
                        الصغري: ٣٥
                      </Typography>
                      <Typography sx={{ marginRight: '5px', marginLeft: '5px', color: '#ffffff' }} variant="h6" gutterBottom>
                        |
                      </Typography>
                      <Typography sx={{ color: '#ffffff' }} variant="h6" gutterBottom>
                        العظمي: ٤٥
                      </Typography>
                    </Box>
                    {/* min & max */}

                  </Box>
                  {/* Right part */}
                  {/* Left part */}
                  <Box>
                    <CloudIcon sx={{
                      fontSize: {
                        xs: '120px',
                        sm: '160px',
                        md: '200px',
                      }, color: '#ffffff'
                    }} />
                  </Box>
                  {/* left part */}
                </Box>
                {/* lower */}

              </Card>
              {/* Language Comvertor */}
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: .5 }}>
                <Button sx={{
                  color: '#111111', fontSize: '1rem',
                  fontWeight: 400,
                  px: 1.5,
                  py: 0.75,
                  minWidth: '60px',
                }} variant="text">EN</Button>
              </Box>
              {/* Language Comvertor */}
            </Box>
          </Container>
        </ThemeProvider>
      </CacheProvider >
    </>
  )
}

export default App
