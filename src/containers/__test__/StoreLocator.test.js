import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import StoreLocator from '../StoreLocator';

describe("StoreLocator", () => {
  beforeEach(() => {
    render(<StoreLocator />)
  });

  it('renders store without crashing', () => {
    expect(screen.getByTestId('store-locator-element')).toBeInTheDocument();
  });

  it('should render single header element', () => {
    const headerElement = screen.getAllByTestId('header-element');
    expect(headerElement.length).toBe(1);
  });

  // it('should render three button element', () => {
  //   const buttonElement = screen.getAllByRole('button');
  //   expect(buttonElement.length).toBe(3);
  // });

  it('should render single map element', () => {
    const mapElement = screen.getAllByTestId('map-element');
    expect(mapElement.length).toBe(1);
  });

});

describe('chooseMap', () => {
  it("should show no button in absence of any store data", async () => {
    axios.get.mockResolvedValueOnce({ data: { stores: [] } });
    act(() => {
      render(< StoreLocator />);
    });
    const storeLocatorButton = await screen.findByTestId('store-locator-element');
    const buttonElement = storeLocatorButton.querySelector('button');
    expect(buttonElement).toBeNull();
  });

  it("should show button with location value as text", async () => {
    const mockStoreInfo = {
      data: {
        stores: [{
          "location": "TestStore",
          "address": "TestAddress",
          "imgName": "test.png",
          "id": "1"
        }]
      }
    };
    axios.get.mockResolvedValueOnce(mockStoreInfo);
    act(() => {
      render(< StoreLocator />);
    });
    const storeLocatorButton = await screen.findByRole('button');
    expect(storeLocatorButton).toHaveTextContent(mockStoreInfo.data.stores[0].location);
  });

  it('should change map on click for respective location button', async () => {
    const mockStoreInfo = {
      data: {
        stores: [{
          "location": "TestStore",
          "address": "TestAddress",
          "imgName": "test.png",
          "id": "1"
        },{
          "location": "demoTestStore",
          "address": "demoTestAddress",
          "imgName": "demo-test.png",
          "id": "2"
        }]
      }
    };
    axios.get.mockResolvedValueOnce(mockStoreInfo);
    act(() => {
      render(< StoreLocator />)
    });
    const demoStoreLocatorBtn = await screen.findByTestId('button-element-2');
    fireEvent.click(demoStoreLocatorBtn);
    const mapElement = await screen.findByTestId('map-image')
    expect(mapElement.src).toContain('demo-test.png');
  })
})

