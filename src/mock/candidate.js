import Mock from 'mockjs';
import List from './list.json';

const param2Obj = (url) => {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

const getBody = (config) => {
    const body = JSON.parse(config.body);
    return body;
}


export default { 
    getList: (config) => {
        return {
            code: 20000,
            count: List.length,
            list: List
        }
    },
    getDetail: opt => {
        // debugger;
        const body = getBody(opt);
        const current = List.filter((item) => {
            return item.id === body.id;
        });

        return {
            code: 200,
            response: current && current[0]
        };
    }
};