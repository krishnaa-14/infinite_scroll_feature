const Item = ({title, imageUrl}) => {
    return (
        <div style = {{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center", padding : "10px", border : "1px solid black", width : "300px", height : "400px"}}>
            <img style = {{width : "250px", height : "250px"}} src = {imageUrl}/>
            <h5> {title.substr(0, 10)}</h5>
        </div>
    )
}

export default Item;