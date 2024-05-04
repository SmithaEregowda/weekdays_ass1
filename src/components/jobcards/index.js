import React from 'react'
import "./jobcard.css"
import { Button, Card,CardContent } from '@mui/material'
const JobCards = ({job}) => {
  return (
    <Card sx={{ minWidth: 275 }} className='jobCard'>
    <CardContent >
        <div className='jobRole'>{job?.jobRole}</div>
        <div className='jobLoc'>{job?.location}</div>
        <div className='expsalCont'>
            <div className='saltitle'>Excepted Salary :</div>
            <div>{job?.minJdSalary}{job?.minJdSalary&&"LPA-"}{job?.maxJdSalary}{job?.maxJdSalary&&"LPA"}</div>
        </div>
        <div className='jobdesc'>
            <div className='desctitle'>About Company:</div>
            <div className='descsubtitle'>About Us:</div>
            
            <div className='desc'>{job?.jobDetailsFromCompany}</div>
            <div className='viewJob'>
            <Button variant="text" fullWidth={true}>View Job</Button>
            </div>
        </div>
        <div className='expCont'>
            <div className='mintitle'>minimum experience</div>
            <div className='minexp'>{job?.minExp?job?.minExp+"Years":"NA"}</div>
        </div>
        <div className='btnActions'>
            <Button variant="contained" fullWidth={true} >Easy Apply</Button>
            <Button variant="contained"fullWidth={true}>Unlock referral asks</Button>
        </div>
    </CardContent>
  </Card>
  )
}

export default JobCards