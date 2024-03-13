
import Button from './evento/Button'; 
function Evento(){

function meuEvento(){
    console.log(`Ativando primero evento`)
}

function segundoEvento(){
    console.log("Ativando segundo evento")
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <br/>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={segundoEvento} text="Segundo evento"/>
        </>
    )
}

export default Evento