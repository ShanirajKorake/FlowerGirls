import React from 'react';
import FlowerCard from './Card'; // Adjust the import path based on your project structure.
import prob1 from '../assets/prob1.jpg';
import prob2 from '../assets/prob2.jpg';
import prob3 from '../assets/prob3.jpg';

export default function LatePro() {
  // Sample product data
  const products = [
    { name: 'Rose Bouquet', price: 199, image: prob1 },
    { name: 'Tulip Arrangement', price: 249, image: prob2 },
    { name: 'Sunflower Set', price: 189, image: prob3 },
  ];

  return (
    <p className="my-6 w-full">
      {/* Header Section */}
      <div className="text-2xl font-bold text-center ">
        Latest Products
      </div>
      {/* Cards Section */}
      <div className="w-4/5 mx-auto grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product, index) => (
          <FlowerCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className="mx-auto w-fit">
      <button className="bg-green-600 hover:bg-green-700 font-bold rounded-xl mx-auto text-white py-2 px-4" type="button">View More...!</button>
      </div>
    </p>
  );
}

