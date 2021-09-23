import * as React from 'react';

import Box from '@mui/material/Box';
import HeroSection from "../../src/components/membership/HeroSection";
import GoatCommunitySection from "../../src/components/membership/GoatCommunitySection";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Membership() {

    const {query} = useRouter();

    useEffect(() => {
        if (query.position === 'benefits') {
            document.getElementById('benefits').scrollIntoView({
                behavior: 'smooth',
            });
        } else if(query.position === 'roadmap') {
            document.getElementById('roadmap').scrollIntoView({
                behavior: 'smooth',
            });
        }

    }, [query.position])

    return (
        <Box>
            <HeroSection/>
            <GoatCommunitySection/>
        </Box>
    );
}
