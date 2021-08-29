import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Form } from './pages/Form';
import { Congratulations } from './pages/Congratulations';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/congratulations" exact component={Congratulations} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
