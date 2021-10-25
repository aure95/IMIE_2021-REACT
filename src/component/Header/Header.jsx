import style from './Header.module.css'

const headerName = "?"

export default function Header() {
    return (
        <div>
            <h1 className={style.Header}>{headerName}</h1>
        </div>
    )
}