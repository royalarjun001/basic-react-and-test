import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {

  test('should render app element', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app-element');
    expect(linkElement).toBeInTheDocument();
  });

  test('should render single Store Locator element', () => {
    render(<App />);
    const storeLocator = screen.getAllByTestId('store-locator-element');
    expect(storeLocator.length).toBe(1);
  })
});

