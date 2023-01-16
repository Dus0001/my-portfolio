import React, { useState } from 'react';

const PhotoList = ({ category }) => {
const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
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