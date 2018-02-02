import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
const SearchTable = ({checkedStudy, uncheckedStudy, onClick}) => {
  let tableContent = (<div></div>);
    if(checkedStudy.length || uncheckedStudy.length){
  tableContent = (<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Save</Table.HeaderCell>
        <Table.HeaderCell>DOI</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Publication Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
        <Table.Body>
        {checkedStudy.map(study => {
          return (<Table.Row>
            <Table.Cell><Checkbox defaultChecked /></Table.Cell>
            <Table.Cell>{ study.DOI }</Table.Cell>
            <Table.Cell>{ study.name }</Table.Cell>
            <Table.Cell>{ study.pubDate }</Table.Cell>
          </Table.Row>
            )
        })}
        {uncheckedStudy.map(study => {
          return (<Table.Row key={study.id} >
            <Table.Cell><Checkbox id={study.id} value={study.id} onClick={onClick} /></Table.Cell>
            <Table.Cell>{ study.DOI }</Table.Cell>
            <Table.Cell>{ study.name }</Table.Cell>
            <Table.Cell>{ study.pubDate }</Table.Cell>
          </Table.Row>
            )
        })}
      </Table.Body>
  </Table>)
    }
  return(
    tableContent
  )
}

export default SearchTable;
