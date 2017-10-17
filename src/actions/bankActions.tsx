import AppDispatcher from '../appDispatcher';
import bankConstants from '../../utils/constants';

let BankActions = {
    // Create an account with an empty value
    createAccount(){
        AppDispatcher.dispatch({
            type: bankConstants.CREATED_ACCOUNT,
            amount: 0
        });
    },
    // @param  {number} ammount to whithdraw
    depositIntoAccount(ammount:number){
        AppDispatcher.dispatch({
            type: bankConstants.DEPOSITED_INTO_ACCOUNT,
            ammount: ammount
        });
    },
    // @param  {number} ammount to whithdraw
    whithdrawFromAccount(ammount:number){
        AppDispatcher.dispatch({
            type: bankConstants.WITHDREW_FROM_ACCOUNT,
            ammount: ammount
        });
    }
}

export default BankActions