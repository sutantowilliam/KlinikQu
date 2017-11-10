import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleSimple from './datagrid.js'
import TableExample from './dataObat.js'
import TabsExampleControlled from './tab.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

var parent = class Parent extends Component {
	constructor(props) {
		super(props);
	}
}

var tab = class ObatTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['obatView'];
		this.state={
			view: forms['obatView']
		}
		this.handleMedicineChange = this.handleMedicineChange.bind(this);
		window.handleMedicineChange = this.handleMedicineChange;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleMedicineChange(currentMode);
	}

	handleMedicineChange(currentMode) {
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
	// console.log(tab.handleMedicineChange('addRecord'));
	window.handleMedicineChange(currentMode)
}

var addRecord = function(currentMode) {
	window.handleMedicineChange(currentMode);
	alert('Record sukses ditambahkan');
}

var editRecord = function(currentMode) {
	window.handleMedicineChange(currentMode);
	alert('Record sukses diubah');
}

var forms = {
	obatView:
				<div>
        		<div className="title">
					<br/>
					Daftar Obat
				</div>
				<div>
					<TableExample/>
					<FloatingActionButton onClick={() => func('filterObat')} className="float-left margin-top margin-left" backgroundColor={greenA200}><Filter/></FloatingActionButton>
					<FloatingActionButton onClick={() => func('addRecord')} className="float-right margin-top margin-right" backgroundColor={blue500}><ContentAdd/></FloatingActionButton>
            	</div>
            	</div>,
    addRecord: <div>
    			<div className="title">
    				<br/>
    				Tambah Medical Records
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<div>Tanggal Record:<DatePicker autoOk='true' container='dialog' hintText="Tanggal Record" /></div>
    				<div>Nama Penyakit:<TextField fullWidth='true' inputStyle={{margin: '10, 10, 10, 10'}}hintText=""/></div>
    				<div>Nama Dokter:</div><TextField hintText=""/>
    				<div>Durasi Sakit:<TextField style={{width: 100}} hintText=""/>
				        <DropDownMenu value={1} onChange={this.handleMedicineChange}>
				          <MenuItem value={1} primaryText="Hari" />
				          <MenuItem value={2} primaryText="Minggu" />
				          <MenuItem value={3} primaryText="Bulan" />
				        </DropDownMenu>
	        		</div>
	        		Keterangan: <TextField multiLine={true} rows='4' rowsMax='4' hintText=""/>
	    			</div>
				    <RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' label="Kembali" primary={true}/>
					<RaisedButton onClick={() => addRecord('obatView')} className='float-right margin-right margin-bottom' label="Tambah" primary={true}/>
	    		</div>,
	filterObat: <div>
    			<div className="title">
    				<br/>
    				Filter By
    			</div>
    			<br/>
    			<div>Kategori Obat:
				        <DropDownMenu value={1} onChange={this.handleMedicineChange}>
				          <MenuItem value={1} primaryText="Antibiotik" />
				          <MenuItem value={2} primaryText="Komplemen" />
				          <MenuItem value={3} primaryText="Supplemen" />
				        </DropDownMenu>
				</div>
				    <RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' label="Kembali" primary={true}/>
					<RaisedButton onClick={() => func('obatView')} className='float-right margin-right margin-bottom' label="Filter" primary={true}/>
				</div>,

	filterRecord1:
				<div>
        		<div className="title">
					<br/>
					Filter Medical Record
				</div>
				<div>
					<TableExampleSimple/>
					<FloatingActionButton onClick={() => func('obatView')} className="float-left margin-top margin-left" backgroundColor={greenA200}><ArrowBack/></FloatingActionButton>
            	</div>
            	</div>,
    editRecord: <div>
    			<div className="title">
    				<br/>
    				Ubah Medical Records
    			</div>
    			<br/>
    			<div className='margin-left margin-right'>
    				<div>Tanggal Record:<DatePicker autoOk='true' container='dialog' hintText="Tanggal Record" /></div>
    				<div>Nama Penyakit:<TextField fullWidth='true' inputStyle={{margin: '10, 10, 10, 10'}}hintText=""/></div>
    				<div>Nama Dokter:</div><TextField hintText=""/>
    				<div>Durasi Sakit:<TextField style={{width: 100}} hintText=""/>
				        <DropDownMenu value={1} onChange={this.handleMedicineChange}>
				          <MenuItem value={1} primaryText="Hari" />
				          <MenuItem value={2} primaryText="Minggu" />
				          <MenuItem value={3} primaryText="Bulan" />
				        </DropDownMenu>
	        		</div>
	        		Keterangan: <TextField multiLine={true} rows='4' rowsMax='4' hintText=""/>
	    			</div>
				    <RaisedButton onClick={() => func('obatView')} className='float-left margin-left margin-bottom' label="Kembali" primary={true}/>
					<RaisedButton onClick={() => editRecord('obatView')} className='float-right margin-right margin-bottom' label="Ubah" primary={true}/>
	    		</div>,
}

export default tab;