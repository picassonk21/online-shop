import React from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { setActiveCategory } from '../../../redux/productsReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class MenuContainer extends React.Component {

    componentDidMount() {
        this.props.setActiveCategory(this.props.match.params.category)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.category !== this.props.match.params.category) {
            this.props.setActiveCategory(this.props.match.params.category)
        }
    }

    render() {
        return (
            <div>
                <Menu {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.shopPage.categories,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setActiveCategory} )
)(MenuContainer)
