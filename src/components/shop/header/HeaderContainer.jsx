import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import styles from './header.module.css'

class HeaderContainer extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <Header {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.shopPage.activeCategory
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);