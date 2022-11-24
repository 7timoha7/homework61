import React from 'react';

interface Props {
  name:string;
}

const BordersCountries:React.FC<Props> = ({name}) => {
  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default BordersCountries;