import "./header.css"
import Icon from "../../../public/assets/icons/logo.svg"
 function Header(){
    return(
    <header className="header">
        <div className="container header-container">
            <a href="#!"><Icon/></a>
        <button className="header-btn">Pre-order now</button>
        </div>
    </header>
    )
}
export default Header