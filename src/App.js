import React from 'react';
import TopBar from './layout/TopBarComponent';
import Home from './pages/Home';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Container maxWidth="lg">
        <Route exact path="/" component={Home} />
        <Route path="/artist/:id" component={Detail} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
