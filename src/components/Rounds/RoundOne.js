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
    <Villain name={"Villain Number One!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setRound={changeRound}/>
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setRound={changeRound}/>
    </div>
    )
}

export default RoundOne