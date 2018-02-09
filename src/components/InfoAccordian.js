import React, {Component} from "react";
import {Accordion, Icon} from "semantic-ui-react";

export default class AccordionExampleStyled extends Component {
  state = {activeIndex: 0};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex});
  };

  render() {
    const {activeIndex} = this.state;

    return (
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is Open Meta?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Open Meta is a platform for creating meta-analyses from tens to
            millions of studies easily. It is the platform for researchers and
            statisticians to find grounded scientific truth based on statistical
            analysis. For information on what meta analyses are:
            https://en.wikipedia.org/wiki/Meta-analysis
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          How do I start?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            To start, create an account on the Open Meta platform. Meta-analyses
            creation on Open Meta is based on two important parts: the
            Collection and the Analyses. The Collection is the collection of
            studies you want to create a Meta-Analysis for. Open Meta aggregates
            data from millions of studies available on the web. Next, the
            Anlysis is the meta-analyses which aggregates your collection data.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is a collection?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What is a review?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Walkthrough
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
