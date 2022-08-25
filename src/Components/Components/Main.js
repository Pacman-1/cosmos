import "./main.css"
import planetone from "./planet-one.png"
import React from 'react';
import $ from 'jquery';



    




const Main = ()=>{

       $(document).ready(function(){

        $("#btn-search").on("click",function(e){
            e.preventDefault()
            var test = $("#input-text").val()

            $(".Name").val("hi")

            console.log(test)
        })
       
   
    });


return(
    
    <div className="main">
        <div className="planet-name">
        <h1 className="Name">Name:</h1>
        <div className="search-bar">
        <form className="example "  action="action_page.php" >
        <input type="text" placeholder="Search.." name="search" id="input-text"/>
        <button type="submit" id="btn-search"><i className="fa-solid fa-satellite-dish"></i></button>
        </form>
        </div>

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