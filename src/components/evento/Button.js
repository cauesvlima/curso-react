import style from './Button.module.css';
function Button({event, text}){
        return    <button onClick={event} className={style.button}>{text}</button>
    }
    
    export default Button