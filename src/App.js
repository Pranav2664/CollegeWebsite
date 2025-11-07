import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import "./App.css";
import logo from './logo.png';
// import Banner from './components/Banner';

// Import components
import MainAppBar from './components/MainAppBar';
import RegistrationForm from './components/RegistrationForm';
import DepartmentTable from './components/DepartmentTable';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import PlacementStats from './components/PlacementStats';
import MainSlider from './components/MainSlider';
import CollegeInfo from './components/CollegeInfo';
import Footer from './components/Footer';
import AdmissionInfo from './components/AdmissionInfo';
import AcademicsInfo from './components/AcademicsInfo';
import CampusLifeInfo from './components/CampusLifeInfo';
import CareerInfo from './components/CareerInfo';

const sliderImages = [
  
   {
    url: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000546958-scaled.jpg",
    alt: "DYPCET"
  },

  {
    url: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/CISCO-internship-scaled.jpg",
    alt: "DYPCET Event"
  },
  {
    url: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000549504-scaled.jpg",
    alt: "Finishing School Training"
  },
  {
    url: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000549505-scaled.jpg",
    alt: "Finishing School Training"
  },
  {
    url: "https://coek.dypgroup.edu.in/wp-content/uploads/2017/06/1000549506-scaled.jpg",
    alt: "Finishing School Training"
  },
];

// Example department data
const departmentData = [
  { name: "Computer Science", students: 180 },
  { name: "Mechanical Engineering", students: 150 },
  { name: "Civil Engineering", students: 120 },
  { name: "Electronics & Telecommunication", students: 100 },
  { name: "Electrical Engineering", students: 90 }
];

// Example placement data
const placementStats = {
  placed: 320,
  internship: 45,
  higherEdu: 30,
  highestPackage: "₹18 LPA",
  highestPackageStudent: "Ashish Khot (CSE)"
};

function App() {
  const [current, setCurrent] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [navValue, setNavValue] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', course: '' });
  const [fade, setFade] = useState(true);
  const [successOpen, setSuccessOpen] = useState(false);

  // Removed automatic rotation for slider images


  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1746a2',
      },
    },
  });

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const handleThemeChange = () => setDarkMode((prev) => !prev);
  const handleApplyClick = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);
  const handleFormChange = (e) => {
    if (e.target.type === 'file') {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Prepare FormData for file upload and all fields
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        setShowForm(false);
        setSuccessOpen(true);
      } else {
        alert('Registration failed.');
      }
    } catch (err) {
      alert('Registration failed.');
    }
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessOpen(false);
  };

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

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'background 0.3s, color 0.3s'
        }}
      >
  {/* Banner above Navbar */}
  {/* Banner removed as requested */}
        {/* Navbar */}
        <MainAppBar
          logo={logo}
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          handleApplyClick={handleApplyClick}
          navValue={navValue}
          setNavValue={setNavValue}
        />
        {showForm && (
          <RegistrationForm
            open={showForm}
            onClose={handleFormClose}
            form={form}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
          />
        )}

        {/* Main Section Switcher - only one Fade at a time */}
        <Fade in timeout={500} appear>
          <div>
            {navValue === 5 ? (
              <DepartmentTable departmentData={departmentData} />
            ) : navValue === 1 ? (
              <AboutUs />
            ) : navValue === 2 ? (
              <AcademicsInfo />
            ) : navValue === 6 ? (
              <AdmissionInfo />
            ) : navValue === 7 ? (
              <CampusLifeInfo />
            ) : navValue === 8 ? (
              <Facilities />
            ) : navValue === 9 ? (
              <PlacementStats placementStats={placementStats} />
            ) : navValue === 11 ? ( // Career tab index is 11
              <CareerInfo />
            ) : (
              // Smooth fade for slider image
              <Fade in={fade} timeout={400} key={current}>
                <div>
                  <MainSlider
                    sliderImages={sliderImages}
                    current={current}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                  />
                </div>
              </Fade>
            )}
          </div>
        </Fade>

        {/* College Info Section (no transition needed) */}
        <CollegeInfo />

        {/* Footer Section (no transition needed) */}
        <Footer darkMode={darkMode} logo={logo} />
      {/* Success Snackbar */}
      <Snackbar open={successOpen} autoHideDuration={4000} onClose={handleSuccessClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
          Registration is successful!
        </Alert>
      </Snackbar>
    </Box>
  </ThemeProvider>
  );
}

export default App;