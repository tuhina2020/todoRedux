import React from 'react';
import './Task.css'

export default class Task extends React.Component {
	render() {
		const {task, onTaskDelete, onTaskClick} = this.props;
		// console.log('PROPS OF A TASK', this.props);
		const {checked} = task;
		return(
			<tr>
				<td>
					<input type="checkbox" id={task.key} checked={task.checked} value={task.text} onClick={()=>onTaskClick(task)}/>
				</td>
				<td className={checked ? 'strike' : 'lol'}>
					<span>{task.text}</span>
				</td>
				<td className={checked ? 'strike' : 'lol'}>
					<input type="button" value="Delete" onClick={()=>onTaskDelete(task)}/>
				</td>
			</tr>
		);
	}
}