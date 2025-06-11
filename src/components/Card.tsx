import React from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%' }} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
