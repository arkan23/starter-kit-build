//import addUser from '../../../src/data/mongo/controllers/saveUser';

export default function saveUser() {
    return store => next => action => {
        if (action.type !== 'SAVE_USER') {
            /*  store.dispatch({
      type:successAction,
      payload: action.payload
    }); */
            console.log(action.type);
            console.log('111111111111111');
            return next(action);
        }
        //addUser();
        console.log('Save use data middleware : .....');
        console.log(`Name : ${action.payload.user}`);
        /*     const [startAction, successAction, failureAction] = action.actions;
        store.dispatch({
            type: startAction,
        }); */
        return next(action);
        /*  action.payload.then((data)=>store.dispatch({
    type:successAction,
    payload: data,
  }),(error)=>store.dispatch({
    type:failureAction,
    payload: error})); */
    };
}
