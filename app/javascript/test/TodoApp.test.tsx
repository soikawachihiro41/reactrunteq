import React from 'react';
import { render, screen } from '@testing-library/react';
import Todos from '../react/features/todos';
import '@testing-library/jest-dom';

test('renders Todos component', () => {
  render(<Todos />);
  const helloWorldElement = screen.getByText(/helloworld/i);
  expect(helloWorldElement).toBeInTheDocument();
});