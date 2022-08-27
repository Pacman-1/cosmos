import "./main.css"
import planetone from "./planet-one.png"
import React from 'react';
import {useState} from 'react';
import $ from 'jquery'
let ids =document.getElementById("input-text")






const Main = ()=>{
    
    let names =ids.value

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/planets?name=' + names,
        headers: { 'X-Api-Key': 'LUzifa1Hcd3nt987OZgdkA==8nL9HBP8W1PZUT84'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


    // Use states
      const [name, setName] = useState('Name');
      const [Mass, setMass] = useState('Mass');
      const [Radius, setRadius] = useState('Radius');
      const [Temp, setTemp] = useState('Temp');
      const [years, setYears] = useState('Light Years Away:');
      const [star, setStar] = useState('Host Star Size:');
      const [startemp, setStarTemp] = useState('Host Star Temperature:');


      const handleClick = event => {
        event.preventDefault();
    
        // 👇️ set value of input field
        setName(ids.value);
       
      }
      



    return(
    
    <div className="main">
        <div className="planet-name">
        <h1 className="Name">{name}</h1>
        <div className="search-bar">
        <form className="example "  action="action_page.php" >
        <input type="text" placeholder="Search.." name="search" id="input-text"/>
        <button type="submit" onClick={handleClick} id="btn-search"><i className="fa-solid fa-satellite-dish"></i></button>
        </form>
        </div>

        </div>

        <div className="hero">
            <div className="info-one">
                <h3 className="planet-mass">{Mass}</h3>
                <h3 className="planet-radius">{Radius}</h3>
                <h3 className="planet-temp">{Temp}</h3>
            </div>
            
            <div className="planet-image">
            <img src={planetone} alt="" />
            </div>

            <div className="info-two">
            <h3 className="Years-away" >{years}</h3>
            <h3 className="host-star">{star}</h3>
            <h3 className="host-star-temp">{startemp}</h3>

            </div>
        </div>
    </div>
    
)
}


export default Main