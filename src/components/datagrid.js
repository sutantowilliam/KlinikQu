import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  tanggal: '12 Desember 2016',
  penyakit: 'Demam',
},
{
  tanggal: '1 Desember 2016',
  penyakit: 'Flu dan batuk',
},
{
  tanggal: '10 Oktober 2016',
  penyakit: 'Pusing',
},
{
  tanggal: '7 Agustus 2016',
  penyakit: 'Diare',
},
{
  tanggal: '29 Juni 2016',
  penyakit: 'Maag',
},
{
  tanggal: '4 April 2016',
  penyakit: 'Sakit perut',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = () => (
  <Table
    height={300}
    fixedHeader={true}
    fixedFooter={true}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      selectable={false}>
      <TableRow>
        <TableHeaderColumn>No</TableHeaderColumn>
        <TableHeaderColumn>Tanggal</TableHeaderColumn>
        <TableHeaderColumn>Penyakit</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      stripedRows={true}
      selectable={false}>
      {tableData.map( (row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{index}</TableRowColumn>
          <TableRowColumn>{row.tanggal}</TableRowColumn>
          <TableRowColumn>{row.penyakit}</TableRowColumn>
          <TableRowColumn>editIcon and deleteIcon</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default TableExampleSimple;