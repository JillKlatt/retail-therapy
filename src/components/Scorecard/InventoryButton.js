import { useDispatch, useSelector } from 'react-redux'
import { removeFromInventory, changePoint, changeHP } from '../Actions/index'
import './Scorecard.css'
import { inventoryArray } from './inventoryArray'


function InventoryButton({item}) {

    const dispatch = useDispatch()

    let inventory = useSelector((state) => state.inventory.inventory)

    let index = inventory.indexOf(item)

    // function displayOutcome() {
    //     return (
    //         <h2>{pointsArray.find(e => e.name === item).inventoryDescription}</h2>
    //     )

    // }
    function useItem(){
        let inventoryItem = inventoryArray.find(e => e.name === item)
        if (inventoryItem.type === 'health'){
            dispatch(changeHP(inventoryItem.amount))
        }
        if (inventoryItem.type === 'health'){
            dispatch(changePoint(inventoryItem.amount))
        }
        
        dispatch(removeFromInventory(index))
    }
    return (
        <>
        <button id='inventory-button' onClick={useItem} >Use Item</button>
        </>
    )

}

export default InventoryButton