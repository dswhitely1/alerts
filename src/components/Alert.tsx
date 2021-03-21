import React from 'react';

interface IAlertProps {
  alert: {
    properties: {
      headline: string;
      description: string;
      instruction: string;
    };
  };
}

export const Alert = (props: IAlertProps) => {
  const {
    alert: {
      properties: { headline, description, instruction },
    },
  } = props;
  return (
    <div>
      <h2>{headline}</h2>
      <h3>{description}</h3>
      <p>{instruction}</p>
    </div>
  );
};
