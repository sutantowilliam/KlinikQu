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
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

var parent = class Parent extends Component {
	constructor(props) {
		super(props);
	}
}

var tab = class MedicalTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['medRecord1'];
		this.state={
			view: forms['medRecord1']
		}
		this.handleChange = this.handleChange.bind(this);
		window.handleChange = this.handleChange;
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

var func = function(currentMode) {
	// console.log(document.getElementById('test').parentElement.innerHTML);
	// console.log(tab.handleChange('addRecord'));
	window.handleChange(currentMode)
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
					<FloatingActionButton onClick={() => func('addRecord')} className="float-right margin-top margin-right" backgroundColor={blue500}><ContentAdd/></FloatingActionButton>
					<FloatingActionButton className="float-left margin-top margin-left" backgroundColor={greenA200}><Filter/></FloatingActionButton>
            	</div>
            	</div>,
    addRecord: <div>
    			<div className="title">
    				<br/>
    				Tambah Medical Records
    			</div>
    			<br/>
    			<div>
    				<div>Tanggal Record:<DatePicker dialogContainerStyle={{width: 150, float: 'right'}} textFieldStyle={{width: 150, float: 'right'}} autoOk='true' container='dialog' hintText="Tanggal Record" /></div>
    				<div>Nama Penyakit:<TextField style={{width: 100, float: 'right'}} hintText=""/></div>
    				<div style={{width: 'fit-content'}}>Nama Dokter:</div><TextField style={{width: 100, float: 'right'}} hintText=""/>
    				<div>Durasi Sakit:<TextField style={{width: 100}} hintText=""/>
				        <DropDownMenu value={1} onChange={this.handleChange}>
				          <MenuItem value={1} primaryText="Hari" />
				          <MenuItem value={2} primaryText="Minggu" />
				          <MenuItem value={3} primaryText="Bulan" />
				        </DropDownMenu>
	        		</div>
	    			</div>
	    			</div>,
}

export default tab;