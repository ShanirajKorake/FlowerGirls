import React from 'react';
import FlowerCard from '../Components/Card'; // Assuming the FlowerCard component is in the same folder

import prb1 from "../assets/prob1.jpg"
import prb2 from "../assets/prob2.jpg"
import prb3 from "../assets/prob3.jpg"

const Products = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: 'Rose Bouquet',
      price: 259,
      image: prb1,
    },
    {
      id: 2,
      name: 'Tulip Charm',
      price: 189,
      image: prb2,
    },
    {
      id: 3,
      name: 'Sunflower Bliss',
      price: 229,
      image: prb3,
    },
    {
      id: 4,
      name: 'Lily Elegance',
      price: 300,
      image: prb1,
    },
    {
      id: 5,
      name: 'Orchid Grace',
      price: 375,
      image: prb2,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">
            Explore our range of beautiful and fresh flowers, crafted with care for every occasion.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <FlowerCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need a Custom Bouquet?</h2>
        <p className="text-lg mb-6">
          Contact us to create a personalized flower arrangement tailored to your needs.
        </p>
        <a
          href="#contact"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Products;

