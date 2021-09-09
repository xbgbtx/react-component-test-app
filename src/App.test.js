import { render, screen } from '@testing-library/react';
import App from './App';

test('renders imported component', () => {
  render(<App />);
  const header = screen.getByText(/component lib/i);
  expect(header).toBeInTheDocument();
});
