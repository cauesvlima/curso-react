import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
    e.preventDefault()
        console.log(`Usuário ${name}`)
        console.log(`Senha ${password} `)
    }
    const[name, setName] = useState() //Valor aqui serviria para edição tipo useState(Cauê)
    const[password, setPassword] = useState()

    
        return(
            <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    
                    <input 
                    type="text" 
                    id="nome" 
                    name="name" 
                    
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div>
                    <input type="password" id="senha" name="senha" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
            </>
        )
    }
    
    export default Form