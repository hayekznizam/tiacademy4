import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Listar } from './views/Cliente/Listar/';
import { ListarPedido } from './views/Pedido/Listar/';
import { ListarServico } from './views/Servico/Listar';
//importando o menu
import { Menu } from './components/Menu';

import { Item } from './views/Servico/Item';
import { Cadastrar } from './views/Servico/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar-cliente" component={Listar} />
          <Route path="/listar-pedido" component={ListarPedido} />
          <Route path="/listar-servico" component={ListarServico} />
          <Route path="/listar-pedido/:id" component={Item} />
          <Route path="/cadastrarservico" component={Cadastrar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
