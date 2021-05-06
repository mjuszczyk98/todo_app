import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Menu from '../../components/Menu/Menu';
import NotesView from '../Notes/NotesView';
import MondayView from '../Monday/MondayView';
import TuesdayView from '../Tuesday/TuesdayView';
import WednesdayView from '../Wednesday/WensdayView';
import ThursdayView from '../Thursday/ThursdayView';
import FridayView from '../Friday/FridayView';
import SaturdayView from '../Saturday/SaturdayView';
import SundayView from '../Sunday/SundayView';

class Root extends React.Component{
    openModal = () =>{
        console.log('Add Item');
    }
        render(){
            return(
                <BrowserRouter>
                    <Menu openModal={this.openModal}/>
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
                </BrowserRouter>
            );
        }   
}


export default Root;