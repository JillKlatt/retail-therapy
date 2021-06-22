import React from 'react';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.choice = props.choice
    }

    render(){
        return(
            <div>
                {this.choice}
            </div>

        )
    }

}

export default Card