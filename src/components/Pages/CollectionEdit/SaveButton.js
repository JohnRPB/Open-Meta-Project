import React from 'react';
import {Button} from 'semantic-ui-react';

const SaveButton = ({onSave}) => {
  return (
          <Button
            type="button"
            onClick={onSave}
            content="Save"
          />
  );
};

export default SaveButton;
