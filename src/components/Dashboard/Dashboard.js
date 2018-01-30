import React from "react";
import { Grid, Image, Segment, Header } from "semantic-ui-react";
import Feed from "./Feed";

const Dashboard = () => (
  <div>
    <Grid columns="equal">
      <Grid.Column width={10}>
        <Feed fluid={true} />
      </Grid.Column>
      <Grid.Column>
        <Header as="h2">Your Activity</Header>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>
    <Grid>
      <Header as="h2">Papers you might be interested in</Header>
      <Grid.Row columns={3}>
        <Grid.Column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.{" "}
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.
          </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.{" "}
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            suscipit praesentium repudiandae ad neque, repellendus eaque
            voluptates possimus consequuntur error modi nesciunt nihil quas sed
            harum consequatur repellat. Earum, repudiandae.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Dashboard;
