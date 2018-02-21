import React from 'react'

import { Popup } from 'semantic-ui-react'
import "../../index.css";

// const style = {
//   borderRadius: 0,
//   opacity: 0.7,
//   padding: '2em',
// }

const PopupPanel = ({trigger, children}) => (

  <Popup
    on="click"
    inverted={true}
    trigger={trigger}
    position="right center"
    size='huge'
    className="popup-panel"
    basic
  >
   <Popup.Content >
      {children}
   </Popup.Content>
  </Popup>

)

export default PopupPanel;
