function Evento({numero}){

function meuEvento(){
    console.log(`FUI ATIVADASSOOOO ${numero}`)
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento