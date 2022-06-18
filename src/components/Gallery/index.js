function Gallery({ imagesArray, deleteFromFavorites }) {
    return (
        <div className="gallery">
            {imagesArray.map((imageURL, index) => 
            <div >
                <img className="favourite" src={imageURL} alt="A random cat" height={300}/>
                <button onClick={() => {deleteFromFavorites(index)}}>Delete</button>
            </div>
            )}
        </div>
    )
}

export default Gallery;