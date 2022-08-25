import "./main.css"
import planetone from "./planet-one.png"

const Main = ()=>{
return(
    <div className="main">
        <div className="planet-name">
        <h1 className="">Name:</h1>

        </div>

        <div className="hero">
            <div className="info-one">
                <h3 className="planet-mass">Mass:</h3>
                <h3 className="planet-radius">Radius:</h3>
                <h3 className="planet-temp">Temp:</h3>
            </div>
            
            <div className="planet-image">
            <img src={planetone} alt="" />
            </div>

            <div className="info-two">
            <h3 className="Years-away" >Light Years away:</h3>
            <h3 className="host-star">Host Star Size:</h3>
            <h3 className="host-star-temp">Temp of Host Star:</h3>

            </div>
        </div>
    </div>
)
}

export default Main