import React from 'react';
import './App.css';
import Search from './components/search/Search';
import DipItems from './components/dip/DipItem';
import GridResults from './components/result/GridResults';
import { Switch, Route } from 'react-router';

const App = () => {
    return (
            <Route path={'/'}>
                <Route path={'/'} component={Search} />
                <Switch>
                    <Route exact path={'/items/:id'} component={DipItems} />
                    <Route exact path={'/items'} component={GridResults} />
                </Switch>
            </Route>
    )
}

export default App;
