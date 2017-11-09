import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import TableExampleSimple from './datagrid.js';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import '../img/flaticon.css';
import '../App.css';
import MedicalTab from './medical.js'

const scheduleIcon = <FontIcon className="flaticon-calendar-interface-symbol-tool"></FontIcon>;
const medicineIcon = <FontIcon className="flaticon-medical-kit"></FontIcon>;
const recordsIcon = <FontIcon className="flaticon-interface"></FontIcon>;
const registerIcon = <FontIcon className="flaticon-doctor-with-stethoscope"></FontIcon>;


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'ScheduleTab',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab icon={scheduleIcon} label="Tab Schedule" value="ScheduleTab">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Schedule Tab
            </p>
          </div>
        </Tab>
        <Tab icon={medicineIcon} label="Tab Medicine" value="MedicineTab">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              Medicine Tab
            </p>
          </div>
        </Tab>
        <Tab icon={recordsIcon} label="Tab Records" value="Records Tab">
          <div>
            <MedicalTab/>
          </div>
        </Tab>
        <Tab icon={registerIcon} label="Tab Register" value="RegisterTab">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              Register Tab
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}