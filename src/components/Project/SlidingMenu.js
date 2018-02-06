import React, { Component } from "react";
import NavContainer from "../../containers/NavContainer";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import Box from "./Box";
import ItemTypes from "./ItemTypes";
import {
  Dropdown,
  Menu,
  Segment,
  Header,
  Grid,
  Divider,
  Button,
  Image,
  Card,
  Container,
  Popup,
  TextArea,
  Form,
  Rail,
  Sticky
} from "semantic-ui-react";
import "../../index.css";

import collection from "../../databaseStudies";
import Module from "../Modules/Module";

const SlidingMenu = ({boxes, contextRef, isDropped}) => {
  return (
                <Rail position="left">
                  <Sticky context={contextRef}>
                    <h2>Modules</h2>
                    <div>
                      {boxes.map(({ name, content, type }, index) => (
                        <Box
                          content={content}
                          name={name}
                          type={type}
                          isDropped={isDropped(name)}
                          key={index}
                        />
                      ))}
                    </div>
                  </Sticky>
                </Rail>
  )
}

export default SlidingMenu;
