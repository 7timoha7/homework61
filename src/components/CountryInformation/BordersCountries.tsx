import React from 'react';

interface Props {
  name: string;
}

const BordersCountries: React.FC<Props> = ({name}) => {
  const random = () => {
    return Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  }

  return (
    <div style={{margin: '10px'}}>
      <p style={{color: "rgb(" + random() + ", " + random() + ", " + random() + ")", fontSize: '20px'}}>{name}, </p>
    </div>
  );
};

export default BordersCountries;