import React from 'react'
import Header from './header'
import ItemCard from './ItemCard'

function Main(){
    return(
        <div id="LandingPageMain">
        <Header/>
        <div id="cardsBox">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        </div>
        </div>
    )
}

export default Main