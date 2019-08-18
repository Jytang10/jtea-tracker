import React from 'react';
import Header from './header';
import DrinkTable from './drink-table';
import DrinkForm from './drink-form';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
    this.addDrink = this.addDrink.bind(this);
    this.deleteDrink = this.deleteDrink.bind(this);
  }

  componentDidMount() {
    this.getAllDrinks();
  }

  getAllDrinks() {
    fetch('/api/drinks')
      .then(res => res.json())
      .then(drinks => this.setState({ drinks }))
      .catch(err => console.error('No drinks recorded', err));
  }

  addDrink(drink) {
    fetch('./api/drinks', {
      method: 'POST',
      body: JSON.stringify(drink),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(drink => {
        const drinkList = this.state.drinks.concat(drink);
        this.setState({ drinks: drinkList });
      });
  }

  deleteDrink() {

  }

  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col sm="8"><DrinkTable drinks={this.state.drinks} onDelete={this.deleteDrink} /></Col>
          <Col sm="4"><DrinkForm onSubmit={this.addDrink} /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
