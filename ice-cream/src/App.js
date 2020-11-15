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
import ComponentA from './contextAPI/ComponentA';

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

const App = () => {
  return <ComponentA />;
};

export default App;
