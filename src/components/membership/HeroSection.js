import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from 'next/image';
import Header from "../layout/Header";
import WhiteFilledButton from "../common/WhiteFilledButton";

const HeroSection = () => {

    const communityButtonClickHandler = () => {
        document.getElementById('community').scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            position: 'relative',
            '&:before': {
                content: "''",
                width: '100%',
                height: "100%",
                position: 'absolute',
                background: 'linear-gradient(180deg,rgba(0,0,0,.3),rgba(6,23,85,.28))',
                zIndex: 1,
            }
        }}>

            <Image src={'/bg2.jpg'} layout={'fill'} objectFit={'cover'}/>


            <Box sx={{
                position: 'relative',
                zIndex: 5,
            }}>

                <Header/>

                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: '3rem',
                    pt: '7rem',
                }} maxWidth={'xxl'}>

                    <Box>
                        <Typography gutterBottom sx={{
                            fontSize: '88px',
                            fontWeight: '900',
                            lineHeight: '110px',
                            color: '#fff',
                        }} variant={'h1'}>
                            The Founder's Lounge
                        </Typography>

                        <Typography sx={{
                            color: "#fff",
                            fontWeight: 'normal',
                            textAlign: 'center',
                            fontSize: '24px',
                            letterSpacing: '1px',
                        }} variant={'body1'}>
                            Some of the greatest GOATz met right here! Kick back with a Cohiba or ask Fritz to fix you a drink.


                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            py: '2rem',
                            justifyContent: 'flex-start'
                        }}>

                            <WhiteFilledButton onClick={communityButtonClickHandler} sx={{
                                margin: 'unset',
                            }}>
                               Membership Info
                            </WhiteFilledButton>

                        </Box>
                    </Box>

                </Container>


            </Box>


        </Box>
    );
};

export default HeroSection;