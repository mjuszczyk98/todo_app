import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Menu from '../../components/Menu/Menu';
import NotesView from '../Notes/NotesView';
import MondayView from '../Monday/MondayView';
import TuesdayView from '../Tuesday/TuesdayView';

const Root = () => (
    
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path='/' component={NotesView} />
                <Route path='/monday' component={MondayView} />
                <Route path='/tuesday' component={TuesdayView} />
                <Route path='/' component={NotesView} />
                <Route path='/' component={NotesView} />
                <Route path='/' component={NotesView} />
                <Route path='/' component={NotesView} />
            </Switch>
        </BrowserRouter>
    
)
export default Root;