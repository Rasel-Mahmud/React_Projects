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
import CountThree from './reducer/CountThree';

// Reducer With Context API
import Main from './reducerWithContextAPI/Main';

// Fetching data by useState & useReducer
import DataFetchingOne from './fetchingData/DataFetchingOne';
import DataFetchingTwo from './fetchingData/DataFetchingTwo';

// use callBack Hook
import ParentComponent from './useCallback/ParentComponent';

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
// const App = () => {
//   return <DataFetchingTwo />;
// };

// useCallback
const App = () => {
  return <ParentComponent />;
};

export default App;
