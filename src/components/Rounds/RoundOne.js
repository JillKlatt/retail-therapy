import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

function RoundOne(props) {

    // function changeRound() {
    //     console.log(this.props)
    //     this.props.setRound()
    // }setRound={changeRound}/>setRound={changeRound}
    return (
    <div>    
    <Villain name={"Villain Number One!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundOne