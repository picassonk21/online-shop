import React from 'react'
import { connect } from 'react-redux'
import { setProductsData } from '../../redux/productsReducer'
import Shop from './Shop';

class ShopContainer extends React.Component {
    componentDidMount() {
        this.props.setProductsData();
    }

    render() {
        return (
            <div>
                <Shop confirmOrderMode={this.props.confirmOrderMode}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        confirmOrderMode: state.orderPage.confirmOrderMode
    }
}

export default connect(mapStateToProps, {setProductsData})(ShopContainer);