import React from 'react'
import "./jobcard.css"
import { Card,CardContent } from '@mui/material'
const JobCards = ({job}) => {
  return (
    <Card sx={{ minWidth: 275 }} className='jobCard'>
    <CardContent >
        {job?.jobRole}
        <div className='expsalCont'>
            <div className='saltitle'>Excepted Salary</div>
            <div>{job?.minJdSalary}{job?.minJdSalary&&"LPA-"}{job?.maxJdSalary}{job?.maxJdSalary&&"LPA"}</div>
        </div>
        <div className='jobdesc'>
            <div className='desctitle'>About Company</div>
            <div className='desc'>{job?.jobDetailsFromCompany}</div>
        </div>
        <div className='expCont'>
            <div className='mintitle'>minimum experience</div>
            <div>{job?.minExp}</div>
        </div>
    </CardContent>
  </Card>
  )
}

export default JobCards