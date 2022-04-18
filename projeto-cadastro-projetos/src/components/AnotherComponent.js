const AnotherComponent  = () => {
    
    function handleClick (){
        console.log("clicou no btn");
    };

    return(
        <div>
            <p>Segundo componente </p>
            <button onClick={handleClick}>Evento de clique</button>
            <button onClick={() => console.log("teste")}>Evento de clique2</button>
        </div>
    );
};

export default AnotherComponent;