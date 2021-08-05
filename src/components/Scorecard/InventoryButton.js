import { useDispatch, useSelector } from 'react-redux'
import { removeFromInventory } from '../Actions/index'
import './Scorecard.css'


function InventoryButton({item}) {

    const dispatch = useDispatch()

    let inventory = useSelector((state) => state.inventory.inventory)

    let index = inventory.indexOf(item)


    function useItem(e) {
        dispatch(removeFromInventory(index))
    }


    return (
        <>
        <button id='inventory-button' onClick={useItem}>Use Item</button>
        </>
    )

}

export default InventoryButton