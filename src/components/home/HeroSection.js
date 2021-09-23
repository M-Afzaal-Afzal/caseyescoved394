import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from 'next/image';
import Header from "../layout/Header";
import WhiteFilledButton from "../common/WhiteFilledButton";

const HeroSection = () => {
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

            <Image priority src={'/bg.jpg'} layout={'fill'} objectFit={'cover'}/>


            <Box sx={{
                position: 'relative',
                zIndex: 5,
            }}>

                <Header/>

                <Container sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    p: '3rem',
                }} maxWidth={'xxl'}>

                    <Box>
                        <Typography gutterBottom textAlign={'center'} sx={{
                            fontSize: '88px',
                            fontWeight: '900',
                            lineHeight: '110px',
                            color: '#fff',
                        }} variant={'h1'}>
                            Welcome To <br/>
                            Maison de GOAT
                        </Typography>

                        <Typography sx={{
                            color: "#fff",
                            fontWeight: 'normal',
                            textAlign: 'center',
                            fontSize: '24px',
                            letterSpacing: '1px',
                        }} variant={'body1'}>
                            A Thriving Community of Dreamers, Rebels, and Doers
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            py: '2rem',
                        }}>

                         <WhiteFilledButton>
                             Take The Tour
                         </WhiteFilledButton>

                        </Box>
                    </Box>

                </Container>


            </Box>


        </Box>
    );
};

export default HeroSection;