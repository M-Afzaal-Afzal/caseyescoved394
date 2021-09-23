import React from 'react';
import {Box, Stack} from "@mui/material";
import BottomLineButton from "../common/BottomLineButton";
import {useRouter} from "next/router";
import Link from "../../utils/Link";

const Header = () => {

    const {query,...router} = useRouter();



    return (
        <Box sx={{
            padding: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>

            <Box sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
            }} color={'#fff'}>
                Logo
            </Box>

            <Stack direction={'row'} spacing={2}>

                <BottomLineButton component={Link} href={'/'} isActive={router.pathname === '/'}>
                    The Fronte Gates
                </BottomLineButton>

                <BottomLineButton component={Link} href={'/membership/benefits'} isActive={query.position === 'benefits'}>
                    Membership
                </BottomLineButton>

                <BottomLineButton component={Link} href={'/membership/roadmap'} isActive={query.position === 'roadmap'}>
                    Roadmap
                </BottomLineButton>


            </Stack>

        </Box>
    );
};

export default Header;