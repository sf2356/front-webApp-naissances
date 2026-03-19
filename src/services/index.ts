const host="http://localhost:8080";
const apiEndpoints = async (url: string) => {
    const response = await fetch(`${host}/${url}`,{headers: {
        'Content-Type': 'application/json'
    }});
    const data = await response.json();
    return data;
}

export { apiEndpoints }