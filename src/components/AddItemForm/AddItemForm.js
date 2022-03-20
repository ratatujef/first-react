import React, {Component} from 'react';
import UiInput from '../UiInput/UiInput.js';

export default class AddItemForm extends Component{
    state={
        inputValue:'',
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.inputValue);
        this.props.addNewItem(this.state.inputValue)
        this.setState({inputValue: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="d-flex mt-3">
                    <UiInput value={this.state.inputValue} inputHandler={(e)=>this.setState({inputValue:e})} />
                    <button type="submit" 
                        className='btn btn-outline-secondary'
                    > Add </button>
                </div>
            </form>
        )
    }
}