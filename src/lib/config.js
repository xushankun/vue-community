import Qs from 'qs'
export default{
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  url: '',

  method:'get',          // 请求方法，默认是GET方法

  // 基础url前缀
  baseURL: 'https://www.vue-js.com/api/v1',

  transformRequest: [function (data) {        //允许在请求发送到服务器之前修改该请求
    //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
    data.CustData = JSON.stringify(data.CustData);
    //由于使用的form-data传数据所以要格式化
    data = Qs.stringify(data);
    return data;
  }],


  transformResponse: [function (data) {       //允许在数据传递到then/catch之前修改response数据

    return data;
  }],

  headers: {'Content-Type':'application/x-www-form-urlencoded'},//包含了http请求的各种信息


  params: {       //params是发送请求的查询参数对象，对象中的数据会被拼接成url?param1=value1&param2=value2

  },


  paramsSerializer: function(params) {  //params参数序列化器。
    return Qs.stringify(params)
  },

//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {

  },


  timeout: 5000,    //请求超时设置，单位为毫秒


  withCredentials: false, // default    表明是否有跨域请求需要用到证书

  // 表示服务器将返回响应的数据类型
  responseType: 'json', // default  有arraybuffer、blob、document、json、text、stream这6个类型



  onUploadProgress: function (progressEvent) {  //允许在上传过程中的做一些操作
    // Do whatever you want with the native progress event
  },


  onDownloadProgress: function (progressEvent) {  //允许在下载过程中的做一些操作
    // Do whatever you want with the native progress event
  },


  maxContentLength: 2000,   // 定义了接收到的response响应数据的最大长度。


  validateStatus: function (status) {  //定义了根据HTTP响应状态码决定是否接收或拒绝获取到的promise。如果 validateStatus 返回 true (或设置为 null 或 undefined ),promise将被接收;否则,promise将被拒绝。
    return status >= 200 && status < 300; // default
  },


  maxRedirects: 5, // default
}
