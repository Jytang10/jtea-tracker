import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DrinkForm extends React.Component {

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="formTitle">Drink Entry</Label>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="drinkName" placeholder="Enter drink name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="store" sm={2}>Store</Label>
          <Col sm={10}>
            <Input type="text" name="store" id="drinkStore" placeholder="Enter store name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="location" sm={2}>Location</Label>
          <Col sm={10}>
            <Input type="text" name="location" id="storeLocation" placeholder="Enter location (city)" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="score" sm={2}>Score</Label>
          <Col sm={10}>
            <Input type="number" name="score" id="drinkScore" placeholder="Enter drink score (1-100)" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="stars" sm={2}>Stars</Label>
          <Col sm={10}>
            <Input type="select" name="stars" id="drinkStars">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <Row>
          <Button>Add</Button>
          <Button>Cancel</Button>
        </Row>
      </Form>
    );
  }
}

export default DrinkForm;
