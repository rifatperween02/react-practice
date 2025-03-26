function Profile(){
    return (
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
        alt="Mona Lisa"
        />
    );
}

function Gallery(){
    return(
        <>
        <h1>Mona Lisa</h1>
        <Profile/>
        </>
    );
}

export default Gallery;