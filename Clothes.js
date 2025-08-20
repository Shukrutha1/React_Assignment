import React from 'react';
import './Clothes.css';

const Clothes = () => {
  const products = [
    {
      productId: 101,
      productName: 'T-Shirt',
      description: 'Cotton material',
      price: 499,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      productId: 102,
      productName: 'Jeans',
      description: 'Slim fit denim',
      price: 1299,
      sizes: ['M', 'L', 'XL']
    },
    {
      productId: 103,
      productName: 'Jacket',
      description: 'Winter collection',
      price: 2499,
      sizes: ['L', 'XL']
    },
    {
      productId: 104,
      productName: 'Hoodie',
      description: 'Fleece-lined hoodie',
      price: 999,
      sizes: ['S', 'M', 'L']
    },
    {
      productId: 105,
      productName: 'Shorts',
      description: 'Casual summer shorts',
      price: 699,
      sizes: ['M', 'L']
    }
  ];

  return (
    <div className="clothes-container">
      <h2 className="title">🛍 Cloth Store</h2>
      {products.length === 0 ? (
        <p className="no-products">No Products Available</p>
      ) : (
        <table className="clothes-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td className="price">₹{product.price}</td>
                <td>{product.sizes.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clothes;
