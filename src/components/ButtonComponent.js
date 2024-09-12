import { Button } from '@mui/material'
import React from 'react'
import styled from './Button.module.css'

function ButtonComponent({ text }) {
  return (
    <Button sx={{
      backgroundColor: "primary.dark",
      color: "primary.main"
    }} className={styled.myButton} > {text}</Button >

  )
}

export default ButtonComponent
