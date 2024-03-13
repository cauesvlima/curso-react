
import Button from './evento/Button'; 
function Evento(){

function meuEvento(){
    console.log(`Ativando primero evento`)
}

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <br/>
        
      <Button event={meuEvento} text="Primeiro evento"/>

        </>
    )
}

export default Evento