const iState={
    name:'ujj',
    name1:'ujj'
}
const Reducer=(state=iState,action)=>{
    if(action.type==='change_name')
    {
        return {
            ...state,
            name:action.payload
        }
    }
    if(action.type==='change_name1')
    {
        return {
            ...state,
            name1:action.payload
        }
    }
    return state;
}
export default Reducer;