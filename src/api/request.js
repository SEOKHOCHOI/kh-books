import axios from 'axios';

const API_PATH='http://localhost:8080';

async function request({url,method,data}) {
  let result = {};
  switch(method){
    case 'POST':
      // result = await axios.post(API_PATH+url,data);

      result = await fetch(API_PATH+url,{
        headers:new Headers({'Content-Type':'application/json; charset=utf8','sec-fetch-desc':'empty'}),
        method:"POST",
        credentials:'include',
        mode:'cors',
        data:JSON.stringify(data)
      }).then(res=>{
        console.log(res);
        
        return res;
      })
      return result.json();
    case 'GET':
      result = await axios.get(API_PATH+url,data);
      return result.data;
      
  }
}

export default request;