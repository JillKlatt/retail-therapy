import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

const RoundOne = () => {

    function changeRound() {
        console.log(this.props)
        this.props.setRound()
    }
    return (
    <div>    
    <Villain name={"Villain Number Two!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} onClick={changeRound}/>
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} onClick={changeRound}/>
    </div>
    )
}

export default RoundOne