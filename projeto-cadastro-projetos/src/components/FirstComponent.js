import AnotherComponent from "./AnotherComponent";

function FirstComponente(){
    let name = "eloisa";
    return(
        <div className="">
            <p>primeiro componente</p>
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    );
}

export default FirstComponente  ;