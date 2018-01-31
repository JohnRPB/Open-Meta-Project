import React from "react";
import Nav from "../Nav";
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
  Label,
  Statistic,
  Icon
} from "semantic-ui-react";
import johann from "../../assets/images/johann.jpeg";
import AnalysesTable from "./Table";

const Profile = () => {
  return (
    <div class="ui  vertical masthead center aligned segment">
      <div class="following bar">
        <div class="ui container">
          <Nav />
        </div>
      </div>
      <br />
      <br />
      <Container>
        <Grid>
          <Grid.Column width={1} />

          <Grid.Column width={14}>
            <Segment>
              <Image src={johann} centered circular="true" size="small" />
              <h2>Johann Baptista</h2>
              <h3>Web Developer, Data Scientist, Swing Dancer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Segment>

            <Segment>
              {" "}
              <Statistic.Group widths="four">
                <Statistic>
                  <Statistic.Value>52</Statistic.Value>
                  <Statistic.Label>Papers</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>41</Statistic.Value>
                  <Statistic.Label>Forks</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>15</Statistic.Value>
                  <Statistic.Label>Reviews</Statistic.Label>
                </Statistic>

                <Statistic>
                  <Statistic.Value>42</Statistic.Value>
                  <Statistic.Label>Followers</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Segment>

            <AnalysesTable />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
