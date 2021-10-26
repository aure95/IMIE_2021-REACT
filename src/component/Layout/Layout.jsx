import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListComponent from "../ListComponent/ListComponent";

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <p>Hello my Footer</p>
            <div>
                <ListComponent name="hola"/> 
                <ListComponent  name="nager piscine"/>
                <ListComponent  name="faire courses"/>
            </div>
            <Footer/>
        </div>
    )
}