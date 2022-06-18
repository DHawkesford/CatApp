import { render, screen } from "@testing-library/react"
import Gallery from '.';


test('Checks whether the Gallery component renders successfully', () => {
    const testImage = ['https://cdn2.thecatapi.com/images/afk.jpg'];
    render(<Gallery imagesArray={testImage}/>)
    const gallery = screen.getByAltText('A random cat');
    expect(gallery).toBeInTheDocument();
})

test('Checks that the Gallery component contains the correct number of images', () => {
    const testImages = ['https://cdn2.thecatapi.com/images/afk.jpg', 'https://cdn2.thecatapi.com/images/MTc5NDg0Ng.jpg'];
    render(<Gallery imagesArray={testImages}/>)
    const gallery = screen.getAllByAltText('A random cat');
    expect(gallery.length).toEqual(testImages.length);
});