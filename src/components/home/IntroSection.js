import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const IntroSection = () => {
    return (
        <Box sx={{
            background: "#f1ce69",
            py: '2rem',
            px: "5rem",
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gridGap: '3rem',
                }}>
                    <Typography sx={{
                        textAlign: 'right',
                    }} fontWeight={'bold'} variant={'h2'}>
                        GOATz
                    </Typography>
                    <Typography variant={'body1'}>
                        Known to some as the Greatest of All Tokens, 10,000 provably rare and increasingly scarce GOATz.
                        Owning a GOAT will open the doors for you to a vibrant and thriving community filled with
                        like-minded individuals all searching for greatness. Owning 2 or more will unlock the Forge for
                        your GOATz. Own or Forge the GOAT you dream of becoming!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default IntroSection;