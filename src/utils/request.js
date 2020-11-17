import fetch from 'dva/fetch';

function checkStatus(response) {
  console.log("checkStatus");
  console.log("response.status",response.status);
  if (response.status >= 200 && response.status < 300) {
    console.log("200");
    // console.log("response",response);
    // console.log("response json",response.json());
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  // const response = await fetch(url, options);
  // console.log("url is",url);

  // checkStatus(response);

  // const data = await response.json();

  // const ret = {
  //   data,
  //   headers: {},
  // };

  // if (response.headers.get('x-total-count')) {
  //   ret.headers['x-total-count'] = response.headers.get('x-total-count');
  // }

  // return ret;
  console.log("url is",url);
  console.log(options);
  const response = await fetch(url, options);
  console.log("response",response);
  checkStatus(response);
  console.log(checkStatus(response));
  let data = null;
  if(response.status === 204){
     data = await response.text(); 
   }else{
     data = await response.json();
   }
    
  // const data = await response.json();
  console.log("****************************in /util/request,the data is",data);
  const result = {
    data,
    headers: {},
  };
  console.log("**********=without x-total-count result=*************");
  console.log(result);
  console.log(result.data);// 返回{data:[],meta:{}} 与demo的result一样。
  console.log(result.headers);
  if(response.headers.get('x-total-count')) {
    result.headers['x-total-count'] = response.headers.get('x-total-count');
    console.log("**********=result=*************");
    console.log(result);
    console.log(result.data);
    console.log(result.headers);
  }
  return result;
}
