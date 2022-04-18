import { useState, useEffect } from "react";

const Hooks = () => {
    const [novaIdade, setNovaIdade] = useState(22);

    const changeNewAge = () => {
        setNovaIdade(25);      
    }

    useEffect(() => {
        console.log("Testando");
    })

    return(
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mude a idade</button>
        </div>
    );
};

export default Hooks;