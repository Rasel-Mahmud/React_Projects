import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom';
// import Header from './structure/Header';
// import Footer from './structure/Footer';
// import IceCreamMenu from './ice-cream/iceCremMenu';
// import EditIceCream from './ice-cream/EditIceCream';
import './styles/ice-cream.scss';

// Context API
import ComponentA from './contextAPI/ComponentA';

// Reducer
import CountOne from './reducer/CountOne';

// Main App
// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/" exact component={IceCreamMenu} />
//         <Route path="/menu-items/:menuItemId" component={EditIceCream} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// };

// Context API
// const App = () => {
//   return <ComponentA />;
// };

// Context API
const App = () => {
  return <CountOne />;
};

export default App;
