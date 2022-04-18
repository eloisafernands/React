const List = () =>{
    const items = [{
        id: 1,
        name: "Eloisa"
    }, {
        id: 2,
        name: "Fernanda"
    }, {
        id: 3,
        name: "Pedro"
    }]; 

    return(<div>
        {items.map((item) => 
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        )}
    </div>);
};

export default List;