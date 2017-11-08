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
      adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>No</TableHeaderColumn>
        <TableHeaderColumn>Tanggal</TableHeaderColumn>
        <TableHeaderColumn>Penyakit</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      stripedRows={true}>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>12 Desember 2016</TableRowColumn>
        <TableRowColumn>Demam</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>1 Desember 2016</TableRowColumn>
        <TableRowColumn>Flu dan batuk</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>10 Oktober 2016</TableRowColumn>
        <TableRowColumn>Pusing</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>7 Agustus 2016</TableRowColumn>
        <TableRowColumn>Diare</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>29 Juni 2016</TableRowColumn>
        <TableRowColumn>Maag</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>6</TableRowColumn>
        <TableRowColumn>4 April 2016</TableRowColumn>
        <TableRowColumn>Sakit perut</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableExampleSimple;