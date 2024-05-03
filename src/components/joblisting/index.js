import React, { useEffect, useState } from 'react'
import { getAllJobsByAPI } from './joblist.servicc';
import JobCards from '../jobcards';
import './joblisting.css'

const JobListing = () => {
    const [jobList,setJobList]=useState();

    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
           });
           
           const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
           };
           getAllJobsByAPI(requestOptions).then((data)=>{
            setJobList(data?.jdList)
           })
    },[])
       
       
  return (
    <div className='jobListWrapper'>
        <div className="jobListing">
        {jobList?.map((job)=>(
            <JobCards 
                {...{job}}
            />
        ))}
    </div>
    </div>
  )
}

export default JobListing