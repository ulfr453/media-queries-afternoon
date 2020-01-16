import React, {Component} from 'react';


class Button extends Component{
    constructor(){
        super();
        this.state = {
            showDropdown: false

        }
    }
    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }



    render(){
        return(
            <div className= 'butt-div'>
                <div className= 'desktop-nav'>

                    <button className= 'services'>SERVICES</button>
                    <button className= 'portfolio'>PORTFOLIO</button>
                    <button className= 'about'>ABOUT</button>
                    <button className= 'team'>TEAM</button>
                    <button className= 'contact'>CONTACT</button>
                </div>

            <div className= 'reduced'>
                <button id='mobile-nav' onClick={()=> this.toggleDropdown()}>MENU</button>
            {this.state.showDropdown ? (<div id='dropdown'>
            
                <button className= 'services'>SERVICES</button>
                <button className= 'portfolio'>PORTFOLIO</button>
                <button className= 'about'>ABOUT</button>
                <button className= 'team'>TEAM</button>
                <button className= 'contact'>CONTACT</button>
            
            </div>): null}

            </div>
        
        </div>
        


        )
    }


}

export default Button