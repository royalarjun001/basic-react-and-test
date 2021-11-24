import { render, screen } from "@testing-library/react";
import UseRefExampleComponent from '../UseRefExample';
import userEvent from '@testing-library/user-event';

describe('Use Ref Component test', () => {
    beforeEach(() => {
        render(<UseRefExampleComponent />)
    });
    it('should render with header', () => {
        const exampleComponent = screen.getByTestId('use-ref-example-container');
        expect(exampleComponent).toHaveTextContent('useRef Hook Example');
    });
    it('should render black and white image by default', () => {
        const imageElement = screen.getByTestId('ref-image');
        expect(imageElement.src).toContain('bw.png');
    });
    it('should change image to color on mouse in to area', () => {
        const imgElement = screen.getByTestId('ref-image');
        userEvent.hover(imgElement);
        expect(imgElement.src).toContain('color.png');
    })
});