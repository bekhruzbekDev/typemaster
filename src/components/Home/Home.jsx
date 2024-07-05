import HomeInfo from "./HomeInfo/HomeInfo"
import "./home.css"
function Home(){
    return(

        <section className="home">
        <div className="icon"></div>
           <div className="home-container">
            <HomeInfo/>
              <img src="./assets/image/keyboard-one.jpg" alt="keyboard-one" className="home-photo"/>  
            </div> 
        </section>  
)
}
export default Home
