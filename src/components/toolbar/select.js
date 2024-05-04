import React from 'react'
import { MenuItem, Select } from '@mui/material'
import './toolbar.css'
const UISelect = ({value,handleChange,label,options}) => {
  return (
    <Select
    labelId={label}
    id={label}
    value={value}
    onChange={handleChange}
    label={label}
    fullWidth={true}
  >
    {options?.map((item)=>(
         <MenuItem value={item}>{item}</MenuItem>
    ))}
  </Select>
  )
}

export default UISelect