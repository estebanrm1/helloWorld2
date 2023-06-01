import { useState } from "react";

const Titulo = ({saludoAmigo}) => {
    const [mensaje, setMensaje] = useState('')
    return (
        <div>
            <h1>Hello {saludoAmigo} {mensaje}!</h1>
            <button onClick={()=> setMensaje('(from changed state)') }>Click me</button>
        </div>
    );
};

export default Titulo;