import React from 'react';
import { Alert } from 'react-bootstrap';

export const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 12 }}>
    <strong>{children}</strong>
    </Alert>
  );
};
