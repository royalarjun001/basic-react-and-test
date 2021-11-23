import { render, screen } from '@testing-library/react';
import Map from '../Map';

describe('Map', () => {
    describe('Map basic test', () => {
        beforeEach(() => {
            render(<Map />);
        })
    
        test('renders store without crashing', () => {
            expect(screen.getByTestId('map-element')).toBeInTheDocument();
        });
    
        test('it should render map image', () => {
            const image = document.querySelector('img');
            expect(image).toBeInTheDocument();
        });
    
        test('display the default map when no params are given', () => {
            const defaultImage = document.querySelector('img');
            expect(defaultImage.src).toContain('default-map')
        });
    });
    describe('Map with default props', () => {
        beforeEach(() => {
            const props = {
                location: undefined,
                imageName: 'testmap.png'
            };
            render(< Map {...props} />)
        });

        test('display the map with the image name as a source', () => {
            const mapImage = document.querySelector('img');
            expect(mapImage.src).toContain('testmap.png');
        });
    })
});

