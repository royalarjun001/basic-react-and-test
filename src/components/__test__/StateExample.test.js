import { render, screen } from "@testing-library/react";
import StateExample from '../StateExample';
import userEvent from "@testing-library/user-event";

describe('render of input element', () => {
    beforeEach(() => {
        render(<StateExample />);
    });
    it('should be in the document', () => {
        const inputField = screen.getByTestId('use-state-input');
        expect(inputField).toBeInTheDocument();
    });
    it('should be type of text', () => {
        const inputField = screen.getByTestId('use-state-input');
        expect(inputField).toHaveAttribute('type', 'text');
    });
});
describe('validate behavior', () => {
    beforeEach(() => {
        render(<StateExample />);
    });
    it('should show text entered on the screen', () => {
        const inputField = screen.getByTestId('use-state-input');
        userEvent.type(inputField, 'sample');
        const displayElement = screen.getByTestId('user-state-display-span')
        expect(displayElement).toHaveTextContent('sample');
    });
    it('should show history same as input', () => {
        const inputField = screen.getByTestId('use-state-input');
        userEvent.type(inputField, 'my text');
        const historyElement = screen.getByTestId('user-state-history-list');
        const spanHistoryElement = historyElement.querySelectorAll('li');
        expect(spanHistoryElement.length).toBe(7);
    })
});