import axios from 'axios';

const API_PATH='http://localhost:8080';

async function request({url,method,data}) {
  let result = {};
  switch(method){
    case 'POST':
      result = await axios.post(API_PATH+url,data);
      return result.data;
    case 'GET':
      result = await axios.get(API_PATH+url,data);
      return result.data;
      
  }
}

export default request;