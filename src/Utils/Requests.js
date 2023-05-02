import axios from 'axios'; 

const GLOBAL_URL = 'https://api.openweathermap.org'; 

function http(method, url, data, headers){
    method = method.toUpperCase(); 
    if(method==='GET'){
        data = undefined; 
    }
    return axios({
        method: method, 
        url: `${GLOBAL_URL+url}`, 
        data: data || '', 
        headers: headers || {'Accept':'application/json'}, 
    }).then(res=>{
        return res
    }).catch(error=>{
        return error
    })
}

export let get = (url) => http('GET',url); 
export let post = (url,data) => http('POST',url,data); 
export let put = (url,data) => http('PUT',url,data); 
export let del = (url) => http('DEL',url); 