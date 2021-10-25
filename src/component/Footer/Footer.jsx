import style from './Footer.module.css'

export const name = '@Agence Freya';

export default function Footer() {
    return <div className={style.foot}>
                <h3>{name}</h3>
            </div>

}
