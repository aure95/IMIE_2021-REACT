import style from './Header.module.css'

const headerName = "my Header name"

export default function Header() {
    return (
        <header>
            <div className={style.header}>
                <h1>{headerName}</h1>
                <h1 className={style.dot}>T</h1>
            </div>
        </header>
    )
}