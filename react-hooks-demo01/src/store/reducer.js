import _ from 'lodash';
import shortid from 'shortid';
import * as types from './actionTypes';
const defaultState = {
    inputValue: '',
    list: [],
    loading: true
};
export default (state = defaultState, action) => {
    //Reducer里只能接收state不能改变state
    if (action.type === types.INIT_LIST) {
        let newState = _.cloneDeep(state);
        newState.loading = true;
        return newState;
    }
    if (action.type === types.GET_LIST) {
        let newState = _.cloneDeep(state);
        newState.list = action.list;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.CHANGE_INPUT) {
        let newState = _.cloneDeep(state);
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === types.ADD_ITEM) {
        let newState = _.cloneDeep(state);
        let listItemValue = action.value || newState.inputValue;
        if (listItemValue.trim()) {
            newState.list.push(
                {
                    id: shortid.generate(),
                    value: listItemValue
                }
            );
        }
        newState.inputValue = '';
        return newState;
        
    }
    if (action.type === types.DELETE_ITEM) {
        let newState = _.cloneDeep(state);
        newState.list = newState.list.filter((listItem) => { 
            return listItem.id !== action.itemId 
        });
        return newState;
    }
    if (action.type === types.ERROR) {
        let newState = _.cloneDeep(state);
        newState.loading = false;
        return newState;
    }
    return state;
}