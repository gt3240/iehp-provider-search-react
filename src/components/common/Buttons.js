import React from 'react';

export const DefaultButton = ({type, title, disabled}) => {
  return (
    <button className={'btn ' + type + ' w150'} disabled={disabled}>
      {title}
    </button>
    );
}

export const WarningButton = () => {

  return (
    <button className="btn btn-warning">
      Warning
    </button>
    );
}

