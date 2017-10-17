import * as React from 'react';
import { render } from 'react-dom';
import BankBalanceStore from './stores/bankBalanceStore';
import BankActions from './actions/bankActions';

interface AppProps{

}

interface AppState{
    balance: number;    
}

class App extends React.Component<AppProps, AppState>{
    
    private ammount_input: HTMLInputElement|null;

    constructor(){
        super();
        BankActions.createAccount();
        this.state = {
            balance: BankBalanceStore.getState()
        }
    }

    storeSubscription = BankBalanceStore.addListener(()=>{});

    componentDidMount(){
        this.storeSubscription.remove();
        this.storeSubscription = BankBalanceStore.addListener( () => this.handleStoreChange() );
    }

    componentWillUnmount(){
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState({
            balance: BankBalanceStore.getState()
        });
    }

    deposit = ()=>{
        if( this.ammount_input ){
            BankActions.depositIntoAccount( Number(this.ammount_input.value) );
            this.ammount_input.value = '';
        }
    }

    withdraw = ()=>{
        if( this.ammount_input ){
            BankActions.whithdrawFromAccount( Number(this.ammount_input.value) );
            this.ammount_input.value = '';
        }
    }

    render(){
        return (
            <div>
                <header> FluxTrust Bank</header>
                <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref={iAmmount=>this.ammount_input = iAmmount}/>
                    <br />
                    <button onClick={this.withdraw}>Withdraw</button>
                    <button onClick={this.deposit}>Deposit</button>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));