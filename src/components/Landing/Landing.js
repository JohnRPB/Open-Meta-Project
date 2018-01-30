import React from "react";
import Nav from "../Nav";
import {
  Dropdown,
  Menu,
  Segment,
  Header,
  Grid,
  Divider,
  Button
} from "semantic-ui-react";

const Landing = () => {
  return (
    <div>
      <div class="ui  vertical masthead center aligned segment">
        <div class="following bar">
          <div class="ui container">
            <Nav />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="ui text container">
          <i class="connectdevelop icon massive" />
          <h2>Your Portal to Papers and Metanalyses</h2>
        </div>
        <br />
        <br />

        <Segment>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  suscipit praesentium repudiandae ad neque, repellendus eaque
                  voluptates possimus consequuntur error modi nesciunt nihil
                  quas sed harum consequatur repellat. Earum, repudiandae.{" "}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  suscipit praesentium repudiandae ad neque, repellendus eaque
                  voluptates possimus consequuntur error modi nesciunt nihil
                  quas sed harum consequatur repellat. Earum, repudiandae.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <i class="flask icon huge" />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  suscipit praesentium repudiandae ad neque, repellendus eaque
                  voluptates possimus consequuntur error modi nesciunt nihil
                  quas sed harum consequatur repellat. Earum, repudiandae.{" "}
                </p>
                <Button>Science!</Button>
              </Grid.Column>
              <Grid.Column>
                <i class="line graph icon huge" />
                <br />
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  suscipit praesentium repudiandae ad neque, repellendus eaque
                  voluptates possimus consequuntur error modi nesciunt nihil
                  quas sed harum consequatur repellat. Earum, repudiandae.
                </p>
                <Button>Analyses!</Button>
              </Grid.Column>
              <Grid.Column>
                <i class="thermometer icon huge" />
                <br />
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  suscipit praesentium repudiandae ad neque, repellendus eaque
                  voluptates possimus consequuntur error modi nesciunt nihil
                  quas sed harum consequatur repellat. Earum, repudiandae.
                </p>
                <Button>So Meta!</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <h3>About Us</h3>
        </Segment>
      </div>
    </div>
  );
};

export default Landing;
