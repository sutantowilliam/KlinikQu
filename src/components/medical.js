import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './datagrid.js'
import TabsExampleControlled from './tab.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';

var tab = class MedicalTab extends Component {
	constructor(props) {
		super(props);
		this.state={
			view: forms['medRecord1'],
		}
		this.handleChange = this.handleChange.bind(this);
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	handleChange(currentMode) {
		console.log('masuk ga bung');
		this.setState({
			view: forms[currentMode],
		});
	}

	render() {
		return (
			this.state.view
		);
	}
}

var func = function() {
	// console.log(document.getElementById('test').parentElement.innerHTML);
	// console.log(tab.handleChange('addRecord'));
	console.log(tab.x);
}

var forms = {
	medRecord1:
				<div>
        		<div className="title">
					<br/>
					Lihat Medical Records
				</div>
				<div>
					<TableExampleSimple/>
					<FloatingActionButton className="float-right margin-top margin-right" backgroundColor={blue500}><ContentAdd/></FloatingActionButton>
					<FloatingActionButton onClick={func} className="float-left margin-top margin-left" backgroundColor={greenA200}><Filter/></FloatingActionButton>
            	</div>
            	</div>,
    addRecord: <div>
    			<div className="title">
    				<br/>
    				Tambah Medical Records
    			</div>
    			<div>
    				this will be the form
    			</div>
    			</div>,
}

export default tab;