import Mock from 'mockjs';
import List from './list.json';
import moment from 'moment'; 

const getBody = (config) => {
    const body = JSON.parse(config.body);
    return body;
}


export default { 
    getList: () => {
        return {
            code: 200,
            count: List.length,
            list: List
        }
    },
    getDetail: opt => {
        const body = getBody(opt);
        const current = List.filter((item) => {
            return item.id === body.id;
        });

        return {
            code: 200,
            response: current && current[0]
        };
    },
    pushLog: opt => {
        const { type, log_time, note, id } = getBody(opt);

        let currentIndex;
        let logIndex;

        for(var i=0; i< List.length; i++) {
            if(List[i].id === id) {
                currentIndex = i;
            }
        }

        
        const updateLog = List[currentIndex].log.filter((item, index) => {
            if (item.type === type) {
                logIndex = index;
                return item;
            }

        });

        const currentLog = List[currentIndex].log;


        if (updateLog.length === 0) {
            currentLog.push({
                "type": type,
                "log_time": log_time,
                "note": note
            });
        } else {
            currentLog[logIndex].note = note;
            currentLog[logIndex].log_time = log_time;
        }


        if (currentLog.length > 0 && currentLog.length != 4) {
            List[currentIndex].status = 2;
        }


        return {
            code: 200,
            data: {
                message: 'success',
                data: List
            }
        }
    },
    markAsHired: opt => {
        const { id } = getBody(opt);

        let currentIndex;
        let logIndex;

        for (var i = 0; i < List.length; i++) {
            if (List[i].id === id) {
                currentIndex = i;
            }
        }

        const updateLog = List[currentIndex].log.filter((item, index) => {
            if (item.type === 4) {
                logIndex = index;
                return item;
            }

        });

        const currentLog = List[currentIndex].log;

        if (updateLog.length === 0) {
            currentLog.push({
                "type": 4,
                "log_time": moment().format('YYYY-MM-DD HH:mm:ss'),
                "note": "A quick win!"
            });
        } else {
            currentLog[logIndex].log_time = moment().format('YYYY-MM-DD HH:mm:ss');
        }


        if (currentIndex !== undefined) {
            List[currentIndex].status = 3;
        }

        return {
            code: 200,
            data: {
                message: 'success',
                data: List
            }
        }
    },
};