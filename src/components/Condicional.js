import { useState } from "react"
function Condicional(){
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }
    return(
        <>
        <h2>Cadastre o vosso email</h2>
        <form>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Digite vosso email"/>
            <button type="submit" onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O email é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </form>
        </>
    )
    }
    
    export default Condicional