import React, { Component } from "react";
import NavHeader from './components/Header'
import Statistics from './components/Statistics'
import Countdown from './components/Countdown'
import Transaction from './components/Transaction'
import Approved from './components/Approved'
import Footer from './components/Footer'
import { Grid  ,Dimmer } from 'semantic-ui-react'




class App extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        const handleShow = () => this.setState({active:true})
        const handleHide = () => this.setState({active:false})
        const { active } = this.state;
        return ( 
            <div className = "container" >
                <NavHeader click={handleShow} close={handleHide} />
                <Dimmer.Dimmable dimmed={active}>
                    <Grid stackable columns={2} >
                        <Grid.Row>
                        <Grid.Column className='statisticsContainer'>
                            <Statistics/>
                        </Grid.Column>
                        <Grid.Column className='counterContainer'>
                            <Countdown/>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Transaction/>
                    <Approved/>
                    <Dimmer active={active} onClickOutside={handleHide} />
                    <Footer/>
                </Dimmer.Dimmable>
            </div>
        );
    }
}

export default App;