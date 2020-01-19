import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import DipItems from './components/dip/DipItem';
import GridResults from './components/result/GridResults';
import { Switch, Route } from 'react-router';
import { routes } from './config';
import PropsRoute from './utils/PropsRoute';

const App = () => {
    const { dipItem, gridItems } = routes;
    const [filtersRoute, setFiltersRoute] = useState('');
    return (
            <Route path={'/'}>
                <Route path={'/'} component={Search} />
                <Switch>
                    <PropsRoute exact path={dipItem} component={DipItems} filtersRoute={filtersRoute} />
                    <PropsRoute exact path={gridItems} component={GridResults} setFiltersRoute={setFiltersRoute} filtersRoute={filtersRoute} />
                </Switch>
            </Route>
    )
}

export default App;
