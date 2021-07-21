import React, { useState } from "react"
import { useSelector } from 'react-redux';


function Inventory() {

    const state = useSelector((state) => state)

    const inventory = state.inventory.inventory
    console.log(inventory.length)

    function renderInventory() {
        if (inventory.length > 0) {
            return(
            <>
                <h4 id='inventory'>Inventory</h4>
                {inventory.map(item => <ul id='redbull'>{item}</ul>)}
            </>
                )
        }
    }

    return (
        <>
        {renderInventory()}
        </>

    )
}

export default Inventory