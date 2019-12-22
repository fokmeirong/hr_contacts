
import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.defaults.timeout = 60 * 2 * 1000;

const server = (opt) => {
    const option = {
        url: opt.url,
        method: opt.method || 'get',
        data: opt.data || {}
    };

    axios.interceptors.request.use(config => {
        Toast.loading('Loading...');
        return config
    }, error => {
        return Promise.reject(error)
    });

    // http响应拦截器
    axios.interceptors.response.use(data => {
        Toast.hide();
        return data
    }, error => {
        return Promise.reject(error)
    })

    return new Promise((resolve, reject) => {
        axios(option)
        .then(response => {
            resolve(response);
        })
        .catch((error) => {
            console.log(error);
            reject(error)
        });
    })

}

export default server;