export  function getAllJobsByAPI(requestOptions) {
    const data =fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",requestOptions)
       .then(res => {
           return res.json();
       }).then(data=>{return data;} )
           return data;
   }