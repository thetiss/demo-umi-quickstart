//import request from '../utils/request';
import request from "../../../utils/request"

export function fetch() { //http://localhost:8000/save/films
  console.log("servcieCard is here");
  return request('/save/films');// 使用request做ajax请求，该函数返回Promise
}
