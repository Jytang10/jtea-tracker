import React from 'react';
import { Row, Button } from 'reactstrap';

class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.drink.id);
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.drink.name}</th>
        <td>{this.props.drink.store}</td>
        <td>{this.props.drink.location}</td>
        <td>{this.props.drink.score}</td>
        <td>{this.props.drink.stars}</td>
        <td>
          <Row>
            <Button color="info" size="sm" onClick={this.handleDelete}>Update</Button>
            <Button color="danger" size="sm">Delete</Button>
          </Row>
        </td>
      </tr>
    );
  }
}

export default Drink;
