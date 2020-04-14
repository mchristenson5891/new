import React from 'react'

import {
    RegButton
} from './style'

const Button = ({ children, color, onClick }) =>
    <RegButton onClick={onClick} color={color}>{children}</RegButton>


export default Button