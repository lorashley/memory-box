import * as React from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';

type Props = {
    text?: string
} & ButtonProps

const Button = ({text = 'Button', ...props}: Props) =>
   <MUIButton variant="contained" {...props}>{text}</MUIButton>


export default Button