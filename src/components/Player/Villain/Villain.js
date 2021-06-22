import React from 'react';

class Villain extends React.Component {

    constructor(props){
        super(props);
        this.name = props.name
    }

    render(){
        return(
            <div>
                {this.name}
            </div>
        )
    }

}

export default Villain