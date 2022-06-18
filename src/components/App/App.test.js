import { render, screen } from "@testing-library/react"
import App from '.';

test('Checks whether the App component renders successfully', () => {
    render(<App />)
    // const inputField = screen.getByRole('textbox');
    // expect(inputField).toBeInTheDocument();
})