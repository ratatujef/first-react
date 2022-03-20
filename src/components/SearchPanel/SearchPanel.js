import React, {Component} from 'react';
import UiInput from '../UiInput/UiInput.js';
import Filter from '../Filter/Filter.js';
import './SearchPanel.css';

export default class SearchPanel extends Component {
	state = {
		inputValue:''
	};
	propTypes=[Any]; 
	inputHandler=(value)=>{
		this.setState({inputValue: value});
		this.props.serchItem(value);
	};
	render() {
		const placeHolderText = 'Type here to searh';
		return (
			<div className="search-panel mt-3 d-flex justify-content-between input-group mb-3">
				<UiInput value={this.state.inputValue} type="search" 
					inputHandler={(value)=>this.inputHandler(value)} 
					placeholder={placeHolderText}/>
				<Filter {...this.props} />
			</div>
		);
	}
} 

