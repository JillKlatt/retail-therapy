import React from "react"
import { useSelector } from 'react-redux';
import InventoryButton from "./InventoryButton";
import './Scorecard.css'


function Inventory() {

    const state = useSelector((state) => state)

    const inventory = state.inventory.inventory
    console.log(inventory)

    function renderInventory() {
        if (inventory.length > 0 && inventory !== []) {
            return(
            <>
                <h4 id='inventory'>Inventory:</h4>
                <p>(You can only hold two items at one time)</p>
                {inventory.map((item, index) => <ul id='inventory-item'>{item} key={index}<InventoryButton item={item}/></ul>)}

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