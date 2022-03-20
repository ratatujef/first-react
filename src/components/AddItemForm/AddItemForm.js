import React, {Component} from 'react';
import UiInput from '../UiInput/UiInput.js';

export default class AddItemForm extends Component {
	state={
		inputValue:'',
	};
	propTypes={
		addNewItem: propTypes.function.isReguired
	};
    
	handleSubmit=(e)=>{
		e.preventDefault();
		if (this.state.inputValue==='') return;
		this.props.addNewItem(this.state.inputValue);
		this.setState({inputValue: ''});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="d-flex mt-3">
					<UiInput value={this.state.inputValue} inputHandler={(e)=>this.setState({inputValue:e})} />
					<button type="submit" 
						className='btn btn-outline-secondary'
					> add </button>
				</div>
			</form>
		);
	}
}
