import React, {forwardRef} from 'react';
import { Button} from "@mui/material";

const BottomLineButton = forwardRef(({sx,children, isActive, ...props}, ref) => {
    return (
        <Button
            disableRipple
            sx={{
                fontSize: '1rem',
                color: "#fff",
                letterSpacing: '1px',
                px: 0,
                pb: 0,
                borderRadius: 0,
                borderBottom: isActive ? '1px solid #fff' : '1px solid transparent',
                textTransform: 'unset',
                '&:hover': {
                    borderBottom: '1px solid #fff',
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