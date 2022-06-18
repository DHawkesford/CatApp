import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import FavouritesButton from '.';

test('Checks whether the FavouritesButton component renders successfully', () => {
    render(<FavouritesButton />)
    const favouritesButton = screen.getByText('Add to favourites 🙂');
    expect(favouritesButton).toBeInTheDocument();
})

test('Checks whether the handleClick function is called when the button is clicked', () => {
    const testFunction = jest.fn();
    render(<FavouritesButton handleClick={testFunction}/>)
    const favouritesButton = screen.getByText('Add to favourites 🙂');
    userEvent.click(favouritesButton);
    expect(testFunction).toHaveBeenCalled();
})