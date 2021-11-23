import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {

  describe("Basic test for Button component", () => {
    beforeEach(() => {
      render(<Button />);
    });

    it('renders store without crashing', () => {
      expect(screen.getByTestId('button-element-3')).toBeInTheDocument();
    });
  });

  describe('On Click', () => {
    it('should call the callback function on Click', () => {
      const mockCallBack = jest.fn();
      render(<Button handleClick={mockCallBack} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  })

  describe('When a location is passed to it', () => {
    beforeEach(() => {
      const props = {
        location: 'Location1'
      };

      render(<Button {...props} />)
    });

    it('should show the location name on button', () => {
      const locationButton = document.querySelector('button');
      expect(locationButton.textContent).toContain('Location1');
    });

  });

  describe('When a location is not defined to it', () => {
    beforeEach(() => {
      const props = {
        location: undefined
      };

      render(<Button {...props} />)
    });

    it('should show the location name on button', () => {
      const locationButton = document.querySelector('button');
      expect(locationButton.textContent).toContain('Sector-49');
    });

  });
});



