const RenderCont = ({x}) => {
    return(<div>
        {x > 5 &&  <p>x é maior que 5</p>}
        {x > 5 ? <p>X é alto</p> : <p>X é baixo</p>}

    </div>);
}

export default RenderCont;