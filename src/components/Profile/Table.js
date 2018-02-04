import React from "react";
import { Icon, Table } from "semantic-ui-react";

const AnalysesTable = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="3">Johann's Analyses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell collapsing textAlign="right">
          10 hours ago
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign="right">10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign="right">10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign="right">10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell textAlign="right">10 hours ago</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default AnalysesTable;
