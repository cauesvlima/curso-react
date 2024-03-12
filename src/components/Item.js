import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
    <> 
    <li>{marca} - {ano_lancamento}</li>
    </>
    
    )
    
    }
    Item.propTypes = {
        marca: PropTypes.string.isRequired,
        ano_lancamento:PropTypes.number,
    }


    //Valor padrão
    Item.defaultProps={
        marca:"Faltou a marca",
        ano_lancamento:"Faltou o ano de lançamento"
    }

    export default Item