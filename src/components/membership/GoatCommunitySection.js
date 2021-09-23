import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from "next/image";

const GoatCommunitySection = () => {
    return (
        <Box id={'community'} sx={{
            background: '#000',
            py: '5rem',
            px: '3rem',
        }}>
            <Container maxWidth={'xl'}>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: '1fr 1fr',
                        color: '#fff',
                        gridGap: '3rem',
                    }}
                >
                    <Box sx={{
                        position: 'relative',
                    }}>
                        <Image priority src={'/bg2.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    <Box>

                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: '#fff',
                            }}
                            variant={'h2'}
                            gutterBottom
                        >
                            Join the GOAT Community

                        </Typography>

                        <Typography sx={{}} variant={'body1'}>
                            Owning a GOAT is not just about having a rare piece of digital art or a personalized avatar,
                            of course that's part of it, but really it's about gaining access to a vibrant and
                            successful COMMUNITY. A lot of our Road to Greatness (the GOAT roadmap) is about reinvesting
                            membership cost back into the community to drive content + projects. Prosperity awaits
                            beyond the front door and this is your key.
                        </Typography>

                    </Box>

                </Box>

                {/* Fast and fair section*/}
                <Box sx={{
                    color: "#fff",
                    py: '5rem',

                }}>

                    <Typography gutterBottom variant={'h3'}>
                        FAST and FAIR
                    </Typography>

                    <Typography variant={'body1'}>
                        No need to wait weeks for a reveal, once you pay 0.05 ETH, your GOAT will arrive in your wallet
                        moments later for you to admire, make sure you refresh that metadata if you’re having trouble
                        seeing your GOAT! Membership is not cheapened by shady bonding curves. WE ARE SOLD OUT! THANK
                        YOU SO MUCH FOR ALL YOUR SUPPORT!
                    </Typography>

                </Box>

                <Box id={'benefits'} sx={{
                    py: '2rem',
                }}>
                    <Image priority src={'/MemberBenefits.png'} width={1800} height={1005}/>
                </Box>

                <Box id={'roadmap'} sx={{
                    py: '2rem',
                }}>
                    <Image priority src={'/Roadmap.png'} width={7500} height={5952}/>
                </Box>

            </Container>
        </Box>
    );
};

export default GoatCommunitySection;