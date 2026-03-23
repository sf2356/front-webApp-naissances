const host="http://localhost:8080";
const apiEndpoints = async (url: string) => {
    const response = await fetch(`${host}/${url}`,{headers: {
        'Content-Type': 'application/json'
    }});
    const data = await response.json();
    return data;
}

const create= async (url:string,body:any)=>{
const response=await fetch(`${host}/${url}`,
        {headers: {
        'Content-Type': 'application/json','accept':'application/json'
    },
    body: JSON.stringify(body), 
    method: "POST",
});
return response
}



export { apiEndpoints,create }