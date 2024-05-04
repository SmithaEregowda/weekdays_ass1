import React, { useEffect, useState } from 'react'
import { getAllJobsByAPI } from './joblist.servicc';
import JobCards from '../jobcards';
import './joblisting.css'
import ToolBar from '../toolbar';

const JobListing = () => {
    const [jobList,setJobList]=useState();
    const [filteredList,setFilterJobs]=useState()
    let   [experienceopts,setExperienceOpts]=useState([]);
    const [jobRoleOpts,setJobRoleOpts]=useState([])
    let [minsalOpts,setiMnSalaryOpts]=useState([]);
    let [locationopt,setLocationOpt]=useState([])

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
            let JDlist=data?.jdList;
            setJobList(JDlist);
            setFilterJobs(JDlist);
            const key = 'minExp';
            const exparray = [...new Map(JDlist.map(item =>
            [item[key], item])).values()];
            setExperienceOpts(exparray?.map((item)=>item?.minExp))      
            
            const salkey = 'minJdSalary';
            const salarray = [...new Map(JDlist.map(item =>
            [item[salkey], item])).values()];
            setiMnSalaryOpts(salarray?.map((item)=>item?.minJdSalary))  

            const jobkey = 'jobRole';
            const jobarray = [...new Map(JDlist.map(item =>
            [item[jobkey], item])).values()];
            setJobRoleOpts(jobarray?.map((item)=>item?.jobRole));

            const lockey = 'location';
            const locarray = [...new Map(JDlist.map(item =>
            [item[lockey], item])).values()];
            setLocationOpt(locarray?.map((item)=>item?.location))  
        });

    },[])
       
       
  return (
    <div className='jobListWrapper'>
        <div>
            <ToolBar {...{
                experienceopts,
                jobList,
                setFilterJobs,
                minsalOpts,
                jobRoleOpts,
                locationopt
            }}/>
        </div>
        <div className="jobListing">
        {filteredList?.map((job)=>(
            <JobCards 
                {...{job}}
            />
        ))}
    </div>
    </div>
  )
}

export default JobListing