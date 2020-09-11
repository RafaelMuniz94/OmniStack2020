import React, {ButtonHTMLAttributes} from 'react'
import {Container} from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
}

const Button: React.FC<ButtonProps> = (props) => (
    // <Container>
    //     <button {...props}/>
    // </Container>
    <Container {...props}/>
)

export default Button