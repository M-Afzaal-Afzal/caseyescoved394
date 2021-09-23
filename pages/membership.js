import * as React from 'react';

import Box from '@mui/material/Box';
import HeroSection from "../src/components/membership/HeroSection";
import GoatCommunitySection from "../src/components/membership/GoatCommunitySection";
import {useEffect} from "react";

export default function Membership() {

    useEffect(() => {
        document.getElementById('benefits').scrollIntoView({
            behavior: 'smooth',
        });
    },[])

    return (
        <Box>
            <HeroSection/>
            <GoatCommunitySection/>
        </Box>
    );
}
