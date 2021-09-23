import React, {forwardRef} from 'react';
import { Button} from "@mui/material";

const BottomLineButton = forwardRef(({sx,children, isActive, ...props}, ref) => {
    return (
        <Button
            disableRipple
            sx={{
                background: '#fff',
                color: '#000',
                borderRadius: '0',
                transition: 'all .3s linear',
                p: '22px 37px',
                fontSize: '1rem',
                '&:hover': {
                    background: 'rgba(255,255,255,0.73)',
                },
                ...sx,
            }}
            {...props}
            ref={ref}
        >
            {children}
        </Button>
    )
})

export default BottomLineButton;