const person={
    name:'Mona Lisa',
    theme:{
        backgroundColor:'black',
        color:'white'
    }
};

export default function TodoList(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            />
            <ul>
                <li>This painting is famous</li>
                <li>Mona looks beautiful</li>
                <li>But the Place not nice</li>
            </ul>

        </div>
    )
}