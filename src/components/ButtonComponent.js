import { Button } from '@mui/material'
import React from 'react'
import styled from './Button.module.css'

function ButtonComponent({ value }) {
  return (
    <Button sx={{
      backgroundColor: "primary.dark",
      color: "primary.main"
    }} className={styled.myButton} > {value}</Button >

  )
}

export default ButtonComponent
