import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header';
import Routes from './layouts/routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
