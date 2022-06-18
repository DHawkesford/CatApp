function ImageWithButton({ handleClick, imageURL, index }) {
    return (
        <div className="galleryImage">
            <a className="galleryImageLink" href={imageURL} target={'_blank'}>
                <img src={imageURL} height={'100px'} alt="A random cat" key={index}/>
            </a>
            <button className="galleryImageButton" onClick={() => {handleClick(index)}}>Delete</button>
        </div>
    )
}

export default ImageWithButton;