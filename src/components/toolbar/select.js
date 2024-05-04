import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './toolbar.css'
const UISelect = ({value,handleChange,label,options}) => {
  return (
  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
            labelId={label}
            id={label}
            value={value&&value}
            onChange={handleChange}
            label={label}
            fullWidth={true}
        >
            {options?.map((item)=>item)?.map((item)=>(
                <MenuItem value={item}>{item}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default UISelect