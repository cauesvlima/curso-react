import Item from "./Item"
function List(){
    return(
        <> 
            <h1>
                Minha Lista
            </h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Bugatti" ano_lancamento={1965}/>
                <Item marca="Honda" ano_lancamento={1975}/>
            </ul>
        </>
    )
}
export default List