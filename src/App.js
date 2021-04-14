import React from 'react';
import ShopContainer from './components/shop/ShopContainer';
import styles from './app.module.css'
import { Route } from 'react-router-dom';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      <div className={styles.app}>
        {this.props.initialized
        ? <Route path='/:category?'
        render={() => <ShopContainer />} />
        : <Preloader />}
        
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
