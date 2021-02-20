import React from 'react';
import ShopContainer from './components/shop/ShopContainer';
import styles from './app.module.css'
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
    <div className={styles.app}>
      <Route path='/:category?'
      render={ () => <ShopContainer /> } />
    </div>
    )
  }
}

export default App;
