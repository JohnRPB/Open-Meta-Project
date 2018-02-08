import React from "react";
import NavContainer from "../../containers/NavContainer";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Popup,
  Header
} from "semantic-ui-react";
import hai from "../../assets/images/hai.jpg";
import gene from "../../assets/images/gene.jpeg";
import johann from "../../assets/images/johann.jpeg";
import edwin from "../../assets/images/edwin.jpeg";
import dave from "../../assets/images/dave.png";

const Landing = () => {
  return (
    <div>
      <div className="ui  vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <NavContainer />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="ui text container">
          <i className="connectdevelop icon massive" />
          <br />
          <h2>Your Portal to Papers and Metanalyses</h2>
        </div>
        <br />
        <br />
        <Container>
          <Segment>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est suscipit praesentium repudiandae ad neque, repellendus
                    eaque voluptates possimus consequuntur error modi nesciunt
                    nihil quas sed harum consequatur repellat. Earum,
                    repudiandae.{" "}
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est suscipit praesentium repudiandae ad neque, repellendus
                    eaque voluptates possimus consequuntur error modi nesciunt
                    nihil quas sed harum consequatur repellat. Earum,
                    repudiandae.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <i className="flask icon huge" />
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est suscipit praesentium repudiandae ad neque, repellendus
                    eaque voluptates possimus consequuntur error modi nesciunt
                    nihil quas sed harum consequatur repellat. Earum,
                    repudiandae.{" "}
                  </p>
                  <Button>Science!</Button>
                  <br />
                </Grid.Column>
                <Grid.Column>
                  <i className="line graph icon huge" />
                  <br />
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est suscipit praesentium repudiandae ad neque, repellendus
                    eaque voluptates possimus consequuntur error modi nesciunt
                    nihil quas sed harum consequatur repellat. Earum,
                    repudiandae.
                  </p>
                  <Button>Analyses!</Button>
                  <br />
                </Grid.Column>
                <Grid.Column>
                  <i className="thermometer icon huge" />
                  <br />
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est suscipit praesentium repudiandae ad neque, repellendus
                    eaque voluptates possimus consequuntur error modi nesciunt
                    nihil quas sed harum consequatur repellat. Earum,
                    repudiandae.
                  </p>
                  <Button>So Meta!</Button>
                  <br />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <h3>Our Team</h3>
            <Grid>
              {" "}
              <Grid.Row columns={5}>
                {" "}
                <Grid.Column>
                  <Popup
                    trigger={
                      <Image
                        src={johann}
                        centered
                        circular={true}
                        size="tiny"
                      />
                    }
                    content="Disrupt by day. Dance at night."
                  />

                  <br />
                  <div>
                    <Header as="h3" sub>
                      Johann Baptista
                    </Header>
                    <span>CEO</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={
                      <Image src={gene} centered circular={true} size="tiny" />
                    }
                    content="The man behind the
                    machine."
                  />
                  <br />
                  <div>
                    <Header as="h3" sub>
                      Gene Tinderholm
                    </Header>
                    <span>Systems Architect</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={
                      <Image src={dave} centered circular={true} size="tiny" />
                    }
                    content={`"Dazzle me."`}
                  />
                  <br />
                  <div>
                    <Header as="h3" sub>
                      Dave Lee
                    </Header>
                    <span>Security Consultant</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={
                      <Image src={edwin} centered circular={true} size="tiny" />
                    }
                    content="Ready to go #beastmode at a moment's notice."
                  />

                  <br />
                  <div>
                    <Header as="h3" sub>
                      Edwin Yung
                    </Header>
                    <span>Senior Programmer</span>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={
                      <Image src={hai} centered circular={true} size="tiny" />
                    }
                    content="It's pronounced /hi/."
                  />

                  <br />
                  <div>
                    <Header as="h3" sub>
                      Hai Nguyen
                    </Header>
                    <span>UX</span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
