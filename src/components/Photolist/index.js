import React, { useState } from 'react';

const PhotoList = ({ category }) => {
const [photos] = useState([
    {
      name: 'Book Worms',
      category: 'app',
      description: 'An app thats allows users to search for books and leave review.',
    },
    {
      name: 'Ticket Gurusss',
      category: 'app',
      description: 'An app that allows users to to search for events by city and book.',
    },
]);
    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoList;