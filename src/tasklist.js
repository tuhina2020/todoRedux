import React from 'react';
import Task from './task.js';

export default class TaskList extends React.Component {
	render() {
		let {tasks, onTaskClick, onTaskDelete} = this.props;
		let rows = [];
		tasks.forEach((task, index) => {
			rows.push(<Task task={task} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} key={index}/>);
		});

		return(
			<table>
				<tbody>{rows}</tbody>
			</table>
		);
	};
};