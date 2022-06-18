function ImageAndButton({imgURL, handleClick, buttonText}) {
    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
            <br></br>
            <img src={imgURL} alt="A random cat" height={300}/>
        </div>
    )
}

export default ImageAndButton;