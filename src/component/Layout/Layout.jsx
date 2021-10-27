import ButtonAdd from "../Checkbox/ButtonAdd/ButtonAdd";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListComponentElement from "../ListComponentElement/ListComponentElement";
import style from "./Layout.module.css"

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <div>
                {props.component}
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    )
}