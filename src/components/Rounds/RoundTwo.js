import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

const RoundOne = () => {

    return (
    <div>    
    <Villain name={"Villain Number Two!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"}/>
    <Card choice={"Fight!"} outcome={"Stay And Fight!"}/>
    </div>
    )
}

export default RoundOne