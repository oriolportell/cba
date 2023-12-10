import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { InitialScreen } from './initialScreen/initialScreen.js';
import { Appartments } from './appartments/appartments.js';
import { Footer } from './footer/footer';
import { AppartmentView } from './appartmentView/appartmentView.js';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <InitialScreen />
        <Appartments />
        <Footer />
      </div>
    );
  }
}
function App() {
  return (
    <Router>
      <Route path='/appartment/:id' component={AppartmentView} />
      <Route path='/' exact component={MainPage} />
      {/* Other routes */}
    </Router>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
});
