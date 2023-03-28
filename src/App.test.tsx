import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders download link', () => {
  render(<App />);
  const linkElement = screen.getByText(/download here/i);
  expect(linkElement).toBeInTheDocument();
});
