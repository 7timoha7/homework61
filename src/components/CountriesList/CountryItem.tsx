import React, {MouseEventHandler} from 'react';

interface Props {
  name: string;
  onClick:MouseEventHandler;
}

const CountryItem: React.FC<Props> = ({name, onClick}) => {
  return (
    <>
      <p onClick={onClick}>{name}</p>
    </>
  );
};

export default CountryItem;