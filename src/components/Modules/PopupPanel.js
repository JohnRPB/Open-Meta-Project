import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import "../../index.css";

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

const PopupPanel = ({trigger, children}) => (

  <Popup
    on="focus"
    inverted={true}
    trigger={trigger}
    position="right center"
    content="The default theme's basic popup removes the pointing arrow."
    basic
  >
   <Popup.Content>
      {children}
   </Popup.Content>
  </Popup>

)

export default PopupPanel;
