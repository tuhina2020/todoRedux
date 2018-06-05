import React from 'react';
import './TextBox.css';
import isEmpty from 'lodash/isEmpty';

export default class TextBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			placeholder: 'ENTER THE DRAGON'
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleKeyPress = this.handleKeyPress.bind(this);
	};

	handleChange(event) {
	    this.setState({value: event.target.value});
	};

	handleKeyPress(event) {
		const {value} = this.state;
		if (event.key === 'Enter' && !isEmpty(value)) {
			const { onTaskAdd } = this.props;
			this.setState({value: ''});
			return onTaskAdd(value);
	    }
	    return;
	};

	render() {
		const {value, placeholder} = this.state;
		return (
			<input type="text" value={value} placeholder={placeholder} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
		);
	}

}