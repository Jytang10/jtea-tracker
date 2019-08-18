import React from 'react';
import Drink from './drink';
import { Table } from 'reactstrap';

class DrinkTable extends React.Component {
  render() {
    const drinkList = this.props.drinks.map(drink => {
      return (
        <Drink
          key={drink.id}
          drink={drink}
          onDelete={this.props.onDelete}
        />
      );
    });

    return (
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Store</th>
            <th>Location</th>
            <th>Score</th>
            <th>Stars</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{drinkList}</tbody>
      </Table>
    );
  }
}

export default DrinkTable;
