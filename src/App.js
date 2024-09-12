import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@mui/material/styles';


function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

/*  <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/register" component={Register} /> */