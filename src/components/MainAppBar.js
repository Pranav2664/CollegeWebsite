import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const navItems = [
  "Home",
  "About Us",
  "Academics",
  "Exam Cell",
  "Research",
  "Department",
  "Admission",
  "Campus Life",
  "Facilities",
  "Placement",
  "e-office",
  "Career"
];

function MainAppBar({ logo, darkMode, handleThemeChange, handleApplyClick, navValue, setNavValue }) {
  return (
    <AppBar position="static" color="default" elevation={1} sx={{ background: '#fff', boxShadow: 2 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 18, gap: 18 }}>
          <img
            src={logo}
            alt="DYP College Logo"
            style={{ height: 48, objectFit: 'contain' }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              color: '#1746a2',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.7rem' },
              letterSpacing: 1,
              ml: 2,
              whiteSpace: 'nowrap'
            }}
          >
            D.Y.Patil College Of Engineering & Technology Kasaba Bawada, Kolhapur
          </Typography>
        </div>
        <Box sx={{ flexGrow: 1 }} />
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          color="primary"
          inputProps={{ 'aria-label': 'toggle dark/light theme' }}
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            background: '#1746a2',
            color: '#fff',
            borderRadius: 2,
            fontWeight: 600,
            fontSize: '0.9rem',
            ml: 2,
            px: 2,
            py: 0.5,
            minWidth: 90,
            minHeight: 36,
            boxShadow: 1,
            '&:hover': { background: '#0d2c5a' }
          }}
          onClick={handleApplyClick}
        >
          Apply Now ▼
        </Button>
      </Toolbar>
      <Tabs
        value={navValue}
        onChange={(e, newValue) => setNavValue(newValue)}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          bgcolor: '#1746a2',
          minHeight: 48,
          '.MuiTab-root': {
            color: '#fff',
            fontWeight: 400,
            fontSize: '1.1rem',
            textTransform: 'none',
            minWidth: 120,
            px: 2,
            height: 48,
            '&.Mui-selected': {
              bgcolor: '#fff',
              color: '#a80000',
              fontWeight: 500,
            }
          }
        }}
        TabIndicatorProps={{
          style: { display: 'none' }
        }}
      >
        {navItems.map((item, idx) => (
          <Tab key={item} label={item} />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default MainAppBar;
