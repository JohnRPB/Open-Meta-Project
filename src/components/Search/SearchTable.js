import React from 'react';
import {Checkbox, Form, Grid, Segment, Button, Modal, Pagination, Table} from 'semantic-ui-react';
const SearchTable = ({checkedStudy, uncheckedStudy, onClick, secondClick, activePage, pageChange, onSubmit}) => {
  let tableContent = <div />;
  if (checkedStudy.length || uncheckedStudy.length) {
    let uncheckedStudyPage = uncheckedStudy.slice((activePage - 1) * 10, 10 * activePage);
    tableContent = (
      <div>
        <Modal trigger={<Button floated='right'>
          Save Selected Studies
        </Button>} >
        <Modal.Header>
          Save Collection
        </Modal.Header>
        <Grid centered>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Collection Name</label>
            <input type="text" name="collection[name]" />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input type="text" name="category[0]" />
          </Form.Field>
          <Button>Save</Button>
        </Form>
      </Grid>
        </Modal>
        <Table attached='top' celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Save</Table.HeaderCell>
              <Table.HeaderCell>DOI</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Publication Date</Table.HeaderCell>
              <Table.HeaderCell>Abstract</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {checkedStudy.map((study, index) => {
              return (
                <Table.Row key={study.id}>
                  <Table.Cell>
                    <Checkbox
                      id={study.id}
                      value={study.id}
                      onClick={secondClick}
                      defaultChecked
                    />
                  </Table.Cell>
                  <Table.Cell>{study.DOI}</Table.Cell>
                  <Table.Cell>{study.name}</Table.Cell>
                  <Table.Cell>{study.pubDate}</Table.Cell>
                  <Table.Cell>
                    <a href={`${study.url}`}>Link</a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
            {uncheckedStudyPage.map((study, index) => {
              return (
                <Table.Row key={study.id}>
                  <Table.Cell>
                    <Checkbox
                      id={study.id}
                      value={study.id}
                      onClick={onClick}
                    />
                  </Table.Cell>
                  <Table.Cell>{study.DOI}</Table.Cell>
                  <Table.Cell>{study.name}</Table.Cell>
                  <Table.Cell>{study.pubDate}</Table.Cell>
                  <Table.Cell>
                    <a href={`${study.url}`}>Link</a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        {uncheckedStudy.length > 10 ? 
        <Pagination
          firstItem={null}
          lastItem={null}
          attached='bottom'
          defaultActivePage={activePage}
          onPageChange={pageChange}
          totalPages={Math.ceil(uncheckedStudy.length / 10)}
          tabular
        /> : null}
      </div>
    );
  }
  return tableContent;
};

export default SearchTable;
