import './App.css';
import React from "react";
import Card from "./components/Card"

function App(props){
   
    return (//componentWithJSX ;
        <div class="head" >
        <h1>Calorie Read Only</h1>
        <div class="App">
        <Card food="Pizza" calory="56"/>
        <Card food="Burger" calory="69"/>
        <Card food="Coke" calory="500"/>
        <Card food="Browne" calory="180"/>
        <Card food="Fried Rice" calory="90"/>
        <Card food="Lassania" calory="200"/>
        <Card food="Pani Puri" calory="10"/>
        </div>
        </div>
    )
}
 
export default App;