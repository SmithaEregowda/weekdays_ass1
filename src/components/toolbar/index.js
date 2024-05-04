import React, { useState } from 'react'
import UISelect from './select'
import './toolbar.css'

const ToolBar = ({
    experienceopts,
    jobList,
    setFilterJobs,
    minsalOpts,
    jobRoleOpts,
    locationopt
}) => {
    const [experience,setExperience]=useState();
    const [location,setLocation]=useState();
    const [minSalary,setMinSalary]=useState();
    const [role,setRole]=useState();
    const [listloc,setListLoc]=useState();

    const handleChangeExperience=(e)=>{
        setExperience(e.target.value);
        setLocation("")
        setMinSalary("")
        setRole("")
        setListLoc("")
        let findexp=e.target.value
       setFilterJobs(jobList?.filter((item)=>item?.minExp===findexp))
    }

    const handleChangeLocation=(e)=>{
        let loc=e.target.value;
        setLocation(loc)
        setExperience(undefined)
        setMinSalary("")
        setListLoc("")
        setRole("")
        let filteredItems=loc==="Remote"?
        jobList?.filter((item)=>item?.location==="remote"):
        jobList?.filter((item)=>item?.location!=="remote")
        setFilterJobs(filteredItems)
    }

    const handleChangeSal=(e)=>{
        let sal=e.target.value;
        setMinSalary(sal)
        setLocation("")
        setExperience("")
        setRole("")
        setListLoc("")
        setFilterJobs(jobList?.filter((item)=>item?.minJdSalary===sal))
    }

    const handleChangerole=(e)=>{
        let role=e.target.value;
        setMinSalary("")
        setLocation("")
        setExperience("")
        setListLoc("")
        setRole(role)
        setFilterJobs(jobList?.filter((item)=>item?.jobRole===role))
    }

    const handleChangeListlocation=(e)=>{
        let loc=e.target.value;
        setMinSalary("")
        setLocation("")
        setExperience("")
        setListLoc("")
        setRole("")
        setListLoc(loc)
        setFilterJobs(jobList?.filter((item)=>item?.location===loc))
    }

  return (
    <div className='toolBar'>
        <UISelect 
            options={experienceopts}
            handleChange={handleChangeExperience}
            label={"Minimum Experience"}
            value={experience}
        />
        <UISelect 
            options={["Remote","Onsite"]}
            handleChange={handleChangeLocation}
            label={"Remote"}
            value={location}
        />
        <UISelect 
            options={minsalOpts}
            handleChange={handleChangeSal}
            label={"Minimum Salary"}
            value={minSalary}
        />
        <UISelect 
            options={jobRoleOpts}
            handleChange={handleChangerole}
            label={"Roles"}
            value={role}
        />
        <UISelect 
            options={locationopt}
            handleChange={handleChangeListlocation}
            label={"Locations"}
            value={listloc}
        />
    </div>
  )
}

export default ToolBar