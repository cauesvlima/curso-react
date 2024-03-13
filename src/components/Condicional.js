import { useState } from "react"
function Condicional(){
    const[email, setEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        console.log("teste")
    }
    return(
        <>
        <h2>Cadastre o vosso email</h2>
        <form>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Digite vosso email"/>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
        </form>
        </>
    )
    }
    
    export default Condicional