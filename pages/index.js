import * as React from 'react';
// import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import HeroSection from "../src/components/home/HeroSection";
import IntroSection from "../src/components/home/IntroSection";
// import Footer from "../src/components/layout/Footer";


export default function Index() {
  return (
    <Box>
        <HeroSection/>
        <IntroSection/>
    </Box>
  );
}
