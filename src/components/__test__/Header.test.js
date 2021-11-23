import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders learn react link', () => {
    const headerElement = screen.getAllByTestId('header-element');
    expect(headerElement.length).toBe(1);
  });

  test('it should render logo', () => {
    const logoElement = document.querySelector('img');
    expect(logoElement).toBeInTheDocument();
  })
});


