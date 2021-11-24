import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("App", () => {

  beforeEach(() => {
    render(<App />);
  });
  
  it('should render app element', () => {
    const linkElement = screen.getByTestId('app-element');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render single Store Locator element', () => {
    const storeLocator = screen.getAllByTestId('store-locator-element');
    expect(storeLocator.length).toBe(1);
  });

  it('should show use state component on selecting route for it', () => {
    const useStateLink = screen.getByTestId('state-link');
    fireEvent.click(useStateLink);
    const useStateContainer = screen.getByTestId('use-state');
    expect(useStateContainer).toHaveTextContent('useState Example');
  });

  it('should render component for useRef example', () => {
    const useRefRouteLink = screen.getByTestId('use-ref-route-link');
    userEvent.click(useRefRouteLink);
    const useRefComponentContainer = screen.getByTestId('use-ref-example-container');
    expect(useRefComponentContainer).toHaveTextContent('useRef Hook Example');
  })
});

