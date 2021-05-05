import './App.css';
import 'antd/dist/antd.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthStateProvider } from './store/context/authContext';
import { Responsive } from './utilities/styledComponent/responsive';

function App() {
  return (
    <>
      <Responsive>
        <AuthStateProvider>
          <Router>
            <Routes />
          </Router>
        </AuthStateProvider>
      </Responsive>
    </>
  );
}

export default App;
