import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ImageAndButton from '.';

test('Checks whether the ImageAndButton component renders successfully', () => {
    render(<ImageAndButton />)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})

test('Checks whether the handleClick function is called when the button is clicked', () => {
    const testFunction = jest.fn();
    render(<ImageAndButton handleClick={testFunction}/>)
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(testFunction).toHaveBeenCalled();
})

test('Checks whether the button text matches the buttonText prop', () => {
    render(<ImageAndButton buttonText={'Test text'}/>)
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/^Test text$/) // Matches the string exactly
})

test('Checks whether the src property of the image element matches the imgURL prop', () => {
    render(<ImageAndButton imgURL={'https://cdn2.thecatapi.com/images/afk.jpg'} />)
    const img = screen.getByAltText('A random cat');
    expect(img).toHaveAttribute('src', 'https://cdn2.thecatapi.com/images/afk.jpg');
})