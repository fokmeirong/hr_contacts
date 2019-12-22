import constants from './const';
// console.log(constant.showLogCall);

const action = {
    toggleLogCall(isShow) {
        return {
            type: constants.showLogCall,
            payload: isShow
        }
    }
}

export default action;