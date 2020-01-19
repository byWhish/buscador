import React from 'react';
import './App.css';
import Search from './components/search/Search';
import DipItems from './components/dip/DipItem';
import GridResults from './components/result/GridResults';
import { Switch, Route } from 'react-router';
import { routes } from './config';

const App = () => {
    const { dipItem, gridItems } = routes;
    return (
            <Route path={'/'}>
                <Route path={'/'} component={Search} />
                <Switch>
                    <Route exact path={dipItem} component={DipItems} />
                    <Route exact path={gridItems} component={GridResults} />
                </Switch>
            </Route>
    )
}

export default App;
