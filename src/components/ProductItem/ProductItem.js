import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'Con hang' : 'het hang';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <button className="btn btn-success" type="button">
            Sua
          </button>
          <button className="btn btn-danger" type="button">
            Xoa
          </button>
        </td>
      </tr>
    )
  }
}

export default ProductItem;