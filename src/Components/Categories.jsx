import React from 'react';
import './Categories.css'; 

const categories = [
  { name: 'Top Offers', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/698ba0cebe456aaf.jpg?q=100' },
  { name: 'Mobiles & Tablets', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/44e10b16e649b691.jpg?q=100' },
  { name: 'TVs & Appliances', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/717b5077a5e25324.jpg?q=100' },
  { name: 'Electronics', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4da1d0d19350cc84.jpg?q=100' },
  { name: 'Fashion', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9d4e9c605fc1d2d3.jpg?q=100' },
  { name: 'Beauty', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a5e656672d0548dd.jpg?q=100' },
  { name: 'Home & Kitchen', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b813b64a3179898.jpg?q=100' },
  { name: 'Furniture', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7a5e96c10ada8a56.jpg?q=100' },
  { name: 'Travel', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7a5e96c10ada8a56.jpg?q=100' },
  { name: 'Grocery', icon: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/25f400c36bc3487d.jpg?q=100' },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <img src={category.icon} alt={category.name} className="category-icon" />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
