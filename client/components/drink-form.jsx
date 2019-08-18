import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      store: '',
      location: '',
      score: null,
      stars: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newDrink = {
      name: this.state.name,
      store: this.state.store,
      location: this.state.location,
      score: this.state.score,
      stars: this.state.stars
    };
    this.props.onSubmit(newDrink);
    this.handleReset();
  }

  handleReset(event) {
    this.setState({
      name: '',
      store: '',
      location: '',
      score: null,
      stars: null
    });
  }

  render() {
    const nameValue = this.state.name;
    const storeValue = this.state.store;
    const locationValue = this.state.location;
    const scoreValue = this.state.score;
    const starsValue = this.state.stars;
    return (
      <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <FormGroup row>
          <Label for="formTitle">Drink Entry</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" value={nameValue} name="name" onChange={this.handleChange} id="drinkName" placeholder="Enter drink name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="store" sm={2}>Store</Label>
          <Col sm={10}>
            <Input type="text" value={storeValue} name="store" onChange={this.handleChange} id="drinkStore" placeholder="Enter store name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="location" sm={2}>Location</Label>
          <Col sm={10}>
            <Input type="text" value={locationValue} name="location" onChange={this.handleChange} id="storeLocation" placeholder="Enter location (city)" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="score" sm={2}>Score</Label>
          <Col sm={10}>
            <Input type="number" value={scoreValue} name="score" onChange={this.handleChange} id="drinkScore" placeholder="Enter drink score (1-100)" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="stars" sm={2}>Value</Label>
          <Col sm={10}>
            <Input type="select" value={starsValue} name="stars" onChange={this.handleChange} id="drinkStars">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <Row>
          <Button type="submit" color="success">Add</Button>
          <Button type="reset" value="reset" color="secondary">Reset</Button>
        </Row>
      </Form>
    );
  }
}

export default DrinkForm;
