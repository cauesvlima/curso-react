function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }
    return(
        <div>
            {nome ?(
            <p>{gerarSaudacao(nome)}</p>
            ):(
                <p>
                    Digite um nome
                </p>
            )}
        </div>
    )
}

export default Saudacao