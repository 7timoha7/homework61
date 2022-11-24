import React, {MouseEventHandler} from 'react';

interface Props {
  name: string;
  onClick: MouseEventHandler;
}

const CountryItem: React.FC<Props> = ({name, onClick}) => {
  return (
    <div>
      <p className="itemCountry" onClick={onClick}>{name}</p>
    </div>
  );
};

export default CountryItem;