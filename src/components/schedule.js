import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScheduleByDayTable from './dataSchedule.js'
import Welcome from './coba.js'
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

  var tab = class MedicalTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['byDay'];
		this.state={
			view: forms['byDay']
		}
		this.handleChange = this.handleChange.bind(this);
		window.handleChange = this.handleChange;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleChange(currentMode);
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

var forms = {
	byDay:	<div>
        		<div className="title"><br/>Senin</div>
				<ScheduleByDayTable name ="senin"/>
                <div className="title"><br/>Selasa</div>
                <ScheduleByDayTable name ="selasa"/>
                <div className="title"><br/>Rabu</div>
                <ScheduleByDayTable name ="rabu"/>
                <div className="title"><br/>Kamis</div>
				<ScheduleByDayTable name ="kamis"/>
                <div className="title"><br/>Jumat</div>
                <ScheduleByDayTable name ="jumat"/>
                <div className="title"><br/>Sabtu</div>
                <ScheduleByDayTable name ="sabtu"/>
            </div>,
    byDoctor: <div>
        		<div className="title">
					<br/>
					dr.AAA
				</div>
				
            	</div>
	
}

export default tab;