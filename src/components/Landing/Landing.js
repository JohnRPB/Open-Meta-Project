import React from "react";
import NavContainer from "../../containers/NavContainer";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Popup,
  Header,
  Divider
} from "semantic-ui-react";
import hai from "../../assets/images/hai.jpg";
import gene from "../../assets/images/gene.jpeg";
import johann from "../../assets/images/johann.jpeg";
import edwin from "../../assets/images/edwin.jpeg";
import dave from "../../assets/images/dave.png";
import graph from "../../assets/images/graph.png";

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
          <h2>Your Portal to Papers and Meta-analyses</h2>
        </div>
        <br />
        <br />
        <Container>
          {/* ABOUT TEXT */}
          <Segment>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <h3>
                    OpenMeta is a platform for sharing and conducting scientific reviews, powered 
                    by R. With our tools, anyone can manage a collection of studies, conduct a
                    systematic review, post interactive documents to the web, share their content 
                    with others, and get rapid feedback on their work. {' '} Join a community that 
                    supports transparency and reproducibility in science, and start participating
                    in the exciting process of scientific discovery!
                  </h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          {/* ANALYSIS EXAMPLE */}
          <Segment>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <h3>Create Dynamic Reviews</h3>
                  <Divider />
                  <p style={{fontWeight:"15px", marginLeft:"40px", textAlign:"left"}}>
                    With the scope and depth of R's already available statistical libraries,
                    rendered using our intuitive drag and drop interface, explore multiple
                    datasets and probe the scientific landscape, propped up by a community
                    that cares about reproducibility and transparency. Share your analyses
                    with others, see graphs and statistical output delivered in an interactive 
                    manner, and download your analyses into R Markdown documents for greater
                    control and customization. Never put off a scientific debate again; get
                    answers quickly and spread your knowedlge effectively, with OpenMeta.
                  </p>
                </Grid.Column>

                <Grid.Column>
                  <Image src={graph} bordered centered />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          {/* <Grid.Row columns={2} />
            <Grid.Column>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                suscipit praesentium repudiandae ad neque, repellendus eaque
                voluptates possimus consequuntur error modi nesciunt nihil quas
                sed harum consequatur repellat. Earum, repudiandae.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Est suscipit
                praesentium repudiandae ad neque, repellendus eaque voluptates
                possimus consequuntur error modi nesciunt nihil quas sed harum
                consequatur repellat. Earum, repudiandae.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Image src={graph} />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

          {/* FEATURES */}
          <Segment>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <br />
                  <i className="laptop icon huge" />
                  <br />
                  <h3> Explore datasets, conveniently </h3>
                  {/*<Button>Science!</Button>*/}
                  <br />
                </Grid.Column>
                <Grid.Column>
                  <br />
                  <i className="cubes icon huge" />
                  <br />

                  <h3>Contribute to our tools with open source</h3>
                  {/*<Button>Analyses!</Button>*/}
                  <br />
                </Grid.Column>
                <Grid.Column>
                  <br />
                  <i className="group icon huge" />
                  <br />
                  <h3> Join our community </h3>
                  {/*<Button>So Meta!</Button>*/}
                  <br />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          {/* OUR TEAM */}
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
