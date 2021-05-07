import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Menu from '../../components/Menu/Menu';
import PopUp from '../../components/PopUp/PopUp'
import NotesView from '../Notes/NotesView';
import MondayView from '../Monday/MondayView';
import TuesdayView from '../Tuesday/TuesdayView';
import WednesdayView from '../Wednesday/WensdayView';
import ThursdayView from '../Thursday/ThursdayView';
import FridayView from '../Friday/FridayView';
import SaturdayView from '../Saturday/SaturdayView';
import SundayView from '../Sunday/SundayView';

class Root extends React.Component{
    state = {
        isPopUpOpen : false,
    };
    openPopUp = () =>{
        this.setState({
            isPopUpOpen: true,
        })
    }
    closePopUp = () =>{
        this.setState({
            isPopUpOpen: false,
        })
    }
        render(){
            const {isPopUpOpen} = this.state;
            return(
                <BrowserRouter>
                    <Menu openPopUp={this.openPopUp}/>
                    <Switch>
                        <Route exact path='/' component={NotesView} />
                        <Route path='/monday' component={MondayView} />
                        <Route path='/tuesday' component={TuesdayView} />
                        <Route path='/wednesday' component={WednesdayView} />
                        <Route path='/thursday' component={ThursdayView} />
                        <Route path='/friday' component={FridayView} />
                        <Route path='/saturday' component={SaturdayView} />
                        <Route path='/sunday' component={SundayView} />
                    </Switch>
                {isPopUpOpen && <PopUp closePopUp={this.closePopUp} />}
                </BrowserRouter>
            );
        }   
}


export default Root;