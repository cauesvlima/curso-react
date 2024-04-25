function Lista(){

    const meusItens=['React', 'Vue', 'Angular']


    return(
        <div>

            {meusItens.length > 0 ? (
            meusItens.map((item, index) =>(
                <p key={index}> {item}</p>
            ))): (//Else
                <p>Não há itens na lista</p>
            )} 
        </div>
    )
}
export default Lista