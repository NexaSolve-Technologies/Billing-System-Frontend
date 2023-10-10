import React, { useState } from 'react';
import ProductCard from './productcard';
import './productcard.css';

function ProductPage() {
    // Sample card data
    const initialCards = [
      { id: 1, title: 'Card 1', description: 'Description 1' },
      { id: 2, title: 'Card 2', description: 'Description 2' },
      { id: 3, title: 'Card 3', description: 'Description 3' },
      { id: 4, title: 'Card 4', description: 'Description 4' },
      { id: 5, title: 'Card 5', description: 'Description 5' },
      // Add more card data as needed
    ];
  
    const [cards] = useState(initialCards);
  
    const handleAddButtonClick = (cardData) => {
      // In this example, we'll just log the card title
      console.log(`Added ${cardData.title} to cart`);
    };
  
    return (
      <div className="card-page">
        {cards.map((card) => (
          <ProductCard key={card.id} cardData={card} onAddButtonClick={handleAddButtonClick} />
        ))}
      </div>
    );
  }
  
  export default ProductPage;