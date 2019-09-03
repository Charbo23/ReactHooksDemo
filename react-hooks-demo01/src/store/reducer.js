import shortid from 'shortid';
import * as types from './actionTypes';
import { Map, List } from 'immutable';
// import { combineReducers } from "redux-immutable";
const defaultState = Map({
    inputValue: '',
    list: List(),
    loading: false
});
export default (state = defaultState, action) => {
    //Reducer里只能接收state不能改变state
    if (action.type === types.INIT_LIST) {
        return state.set('loading', true);
    }
    if (action.type === types.GET_LIST) {
        return state.merge({
            list: List(action.list),
            loading: false
        })
    }
    if (action.type === types.CHANGE_INPUT) {
        return state.set('inputValue', action.value);
    }

    if (action.type === types.ADD_ITEM) {
        let listItemValue = action.value || state.get('inputValue');
        if (listItemValue.trim()) {
            return state.merge({
                list: state.get('list').push({
                    id: shortid.generate(),
                    value: listItemValue
                }),
                inputValue: ''
            })
        }
        return state.set('inputValue', '');
    }
    if (action.type === types.DELETE_ITEM) {
        return state.update('list', (list) => {
            return list.filter((listItem) => {
                return listItem.id !== action.itemId
            });
        })
    }
    if (action.type === types.ERROR) {
        return state.set('loading', false);
    }
    return state;
}
// const reducer = combineReducers({
//     main: mainReducer
// });
// export default reducer;