import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'


const Routes: React.FC = () => (
    <Switch>
        <Route path ="/" exact component={Dashboard}/>
        <Route path ="/repository/:repository+" component={Repository}/>     
           {/* O mais indica o final do nome do parametro */}
    </Switch>
)
// O exact serve para que as rotas que nao possuam / sejam executadas 
// O Switch serve para alternar entre as rotas
export default Routes