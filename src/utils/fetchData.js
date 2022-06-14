export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "9ed8c17ea8msh058f20f4d031367p1c2047jsn7f7d5b620213",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
    
}