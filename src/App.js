import React from 'react';
import { FlashCardArray } from 'react-flashcards';

const MyFlashcardComponent = () => {
  const flashcards = [
    {
      id: 1,
      front: <h1>Front of Card One</h1>,
      back: <p>Back of Card Two</p>
      // Other properties...
    },
    {
      id: 2,

      front: <h1>Front of Card One</h1>,
      back: <p>Back of Card Two</p>
      // Other properties...
    },
    {
      id: 3,

      front: <h1>Front of Card One</h1>,
      back: <p>Back of Card Two</p>
      // Other properties...
    }
    // Add more flashcards as needed
  ];

  return (
      <FlashCardArray
          cards={flashcards}
          controls={true}
          showCount={true}
          autoPlay={true}
          onCardChange={(id, index) => console.log(`Card change detected: ID ${id}, Index: ${index}`)}
          onCardFlip={(id, index, state) => console.log(`Card flipped: ID ${id}, Index: ${index}, Flipped: ${state}`)}

          // Other props...
      />
  );
};

export default MyFlashcardComponent;