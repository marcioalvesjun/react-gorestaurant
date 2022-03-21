import ReactModal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/global';

ReactModal.setAppElement('#root');

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  )
};
