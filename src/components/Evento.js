function Evento(){

function meuEvento(){
    console.log('FUI ATIVADASSOOOO')
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento