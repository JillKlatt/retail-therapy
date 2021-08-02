import { useDispatch } from 'react-redux'
import { removeFromInventory } from '../Actions/index'

function InventoryButton(props) {

    const dispatch = useDispatch()


    function useItem() {
        dispatch(removeFromInventory(props.item))
    }

    return (
        <>
        <button onClick={useItem}>X</button>
        </>
    )

}

export default InventoryButton