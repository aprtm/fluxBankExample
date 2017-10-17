import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher<any>{
    dispatch( action = {} ){
        console.log('Dispatched', action);
        super.dispatch(action);
    }
}

export default new AppDispatcher();