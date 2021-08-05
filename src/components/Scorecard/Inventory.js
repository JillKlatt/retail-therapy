import React from "react"
import { useSelector } from 'react-redux';
import InventoryButton from "./InventoryButton";
import './Scorecard.css'


function Inventory() {

    const state = useSelector((state) => state)

    const inventory = state.inventory.inventory


    function itemDescription() {
        return (
            <>
            <p>Mouse Over"</p>
            </>
        )
    }

    function renderInventory() {
        if (inventory.length >= 0) {
            return(
            <>
                <h4 id='inventory'>Inventory:</h4>
                {inventory.map((item, index) => <ul id='inventory-item' key={index} onMouseOver={itemDescription}>{item} <InventoryButton item={item}/></ul>)}
            </>
            )
        }
    }

    return (
        <div id='inventory-container'>

        {renderInventory()}
        </div>

    )
}

export default Inventory