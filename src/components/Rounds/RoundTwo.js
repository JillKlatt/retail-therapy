import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

const RoundTwo = () => {

    return (
    <div>    
    <Villain name={"You Made it to Villain Number Two!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"}/>
    <Card choice={"Fight!"} outcome={"Stay And Fight!"}/>
    </div>
    )
}

export default RoundTwo