import ButtonAdd from "../Checkbox/ButtonAdd/ButtonAdd";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListComponentElement from "../ListComponentElement/ListComponentElement";
import style from "./Layout.module.css"

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <div className={style.button_add}>
                <ButtonAdd/>
            </div>
            <div className={style.layout_list_component}>
                <ListComponentElement className={style.list_component} name="hola"/> 
                <ListComponentElement className={style.list_component}  name="nager piscine"/>
                <ListComponentElement className={style.list_component}  name="faire courses"/>
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    )
}