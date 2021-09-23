import React from 'react';
import {Box, Container, FormHelperText, OutlinedInput, Stack, Typography} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import WhiteFilledButton from "../common/WhiteFilledButton";

const Footer = () => {

    const { handleSubmit, control, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <Box
            sx={{
                background: '#000',
            }}
        >
            <Container sx={{
                py: '4rem',
                px: "2rem",
            }} maxWidth={'xxl'}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack alignItems={'flex-start'} direction={'column'} spacing={2}>

                        <Box sx={{width: '30rem'}}>


                            <Typography variant={'body1'} gutterBottom sx={{
                                color: '#fff',
                                fontSize: '1.2rem',
                            }}>
                                Email {" "} *
                            </Typography>

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "You must have to specify your email",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid Email',
                                    }
                                }}
                                render={({field}) => (
                                    <OutlinedInput fullWidth={true} color={'default'} sx={{
                                        borderRadius: '4px',
                                        border: '1px solid #fff',
                                        outline: 0,
                                        color: '#fff',

                                    }} {...field} />
                                )}
                            />

                            <FormHelperText sx={{color: 'red', mt: '1rem'}}>
                                {errors?.email && errors.email.message}
                            </FormHelperText>

                        </Box>

                        <WhiteFilledButton type={'submit'}>
                            Sign Up For Updates
                        </WhiteFilledButton>

                    </Stack>
                </form>

                <Box ml={'2rem'} mt={'4rem'}>
                    <Typography sx={{
                        color: '#fff',
                        fontSize: '37px',
                        fontWeight: 'bold',
                    }} variant={'h1'}>
                        ©2021 KRHFT Studios
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;