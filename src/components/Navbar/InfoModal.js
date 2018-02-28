import React from 'react';
import {
  // Button,
  Header,
  // Icon,
  Modal
} from 'semantic-ui-react';
import AccordionExampleStyled from './InfoAccordian';

const InfoModal = () => (
  <Modal trigger={<i className="help circle icon" />} closeIcon>
    <Header icon="help circle" content="OpenMeta Information" />
    <Modal.Content>
      <AccordionExampleStyled />
    </Modal.Content>
    {/* <Modal.Actions>
      <Button color="green">
        <Icon name="checkmark" /> Got it!
      </Button>
    </Modal.Actions> */}
  </Modal>
);

export default InfoModal;
