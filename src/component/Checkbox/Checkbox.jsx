import style from './Checkbox.module.css'

var state = true;

export default function Checkbox() {
 return <div className={style.check} onclick={check()}>
            {state}
        </div>   
}

function check() {
   state = !state;
}