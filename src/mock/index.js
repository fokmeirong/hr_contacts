import Mock from 'mockjs';
import api from './candidate';


Mock.setup({
    timeout: '200-600' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});

Mock.mock('/api/getList', 'get', api.getList);
Mock.mock('/api/getDetail', 'get', api.getDetail);
Mock.mock('/api/addLog', 'post', api.pushLog);
Mock.mock('/api/markAsHired', 'post', api.markAsHired);