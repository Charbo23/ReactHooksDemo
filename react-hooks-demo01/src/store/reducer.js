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
        // let newState = _.cloneDeep(state);
        // newState.loading = true;
        // return newState;
        return state.set('loading', true);
    }
    if (action.type === types.GET_LIST) {
        // let newState = _.cloneDeep(state);
        // newState.list = action.list;
        // newState.loading = false;
        // return newState;
        return state.merge({
            list: List(action.list),
            loading: false
        })
    }
    if (action.type === types.CHANGE_INPUT) {
        // let newState = _.cloneDeep(state);
        // newState.inputValue = action.value;
        // return newState;
        return state.set('inputValue', action.value);
    }

    if (action.type === types.ADD_ITEM) {
        // let newState = _.cloneDeep(state);
        // let listItemValue = action.value || newState.inputValue;
        // if (listItemValue.trim()) {
        //     newState.list.push(
        //         {
        //             id: shortid.generate(),
        //             value: listItemValue
        //         }
        //     );
        // }
        // newState.inputValue = '';
        // return newState;
        let listItemValue = action.value || state.get('inputValue');
        if (listItemValue.trim()) {
            // return state.update('list',(list)=>{
            //     return list.push(
            //         {
            //             id: shortid.generate(),
            //             value: listItemValue
            //         }
            //     );
            // }).set('inputValue','');
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
        // let newState = _.cloneDeep(state);
        // newState.list = newState.list.filter((listItem) => {
        //     return listItem.id !== action.itemId
        // });
        // return newState;
        return state.update('list', (list) => {
            return list.filter((listItem) => {
                return listItem.id !== action.itemId
            });
        })
    }
    if (action.type === types.ERROR) {
        // let newState = _.cloneDeep(state);
        // newState.loading = false;
        // return newState;
        return state.set('loading', false);
    }
    return state;
}
// const reducer = combineReducers({
//     main: mainReducer
// });
// export default reducer;