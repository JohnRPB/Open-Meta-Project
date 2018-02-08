import React from "react";
import {Button, Segment, Table} from "semantic-ui-react";

const CollectionSearchCollections = ({
  userCollections,
  onClick,
  history,
  match,
  location
}) => {
  let colorArray = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black"
  ];

  return (
    <Segment.Group>
      <Segment color="olive" textAlign="center">
        <b>Import From Your Collections</b>
      </Segment>
      <Segment style={{overflowX: "scroll"}}>
        <Table singleLine style={{borderWidth: "0px"}}>
          <Table.Row>
            {userCollections.length ? (
              userCollections.map((collection, index) => {
                let colorVar = index;
                while (colorVar > 12) {
                  colorVar -= 13;
                }
                let htmlIds = collection.studies.map(study => study.id);
                let htmlValue = htmlIds.join("_");

                console.log(
                  "history for collectionssearchcollections",
                  history
                );
                if (history.location.pathname === "/selectcollection") {
                  console.log("called");
                  htmlValue = userCollections[index]._id.toString();
                }
                console.log("match for collectionssearchcollections", match);
                console.log(
                  "location for collectionssearchcollections",
                  location
                );

                return (
                  <Table.Cell>
                    <Button
                      animated="fade"
                      color={colorArray[colorVar]}
                      id={htmlValue}
                      style={{
                        width: "100px",
                        height: "100px",
                        whiteSpace: "normal"
                      }}
                      onClick={onClick}
                    >
                      <Button.Content visible>{collection.name}</Button.Content>
                      <Button.Content hidden id={htmlValue}>
                        Use This Collection{" "}
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                );
              })
            ) : (
              <div>You don't have any collections</div>
            )}
          </Table.Row>
        </Table>
      </Segment>
    </Segment.Group>
  );
};
export default CollectionSearchCollections;
