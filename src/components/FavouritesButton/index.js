function FavouritesButton({ handleClick }) {
    return (
        <div>
            <button className="favouritesButton" onClick={handleClick}>Add to favourites 🙂</button>
        </div>
    )
}

export default FavouritesButton;