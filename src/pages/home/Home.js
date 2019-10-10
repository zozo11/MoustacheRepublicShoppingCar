import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import classicTee from '../../assets/images/classic-tee.jpg'
import './Home.css'
import {handleAddToCart} from "../shoppingCart/store/action";
import {handleAddProductError, handleAddProductSuccess} from "../../basic/Notification";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 0,
                name: 'Classic Tee',
                price: '75.00',
                selectSize: null,
                size: ['S', 'M', 'L']
            },
            isSelect: false
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="homeBgImg" src={classicTee} alt={"productItem"}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 productWrapper">
                            <p className="productName">Classic Tee</p>
                            <p className="productPrice">$75.00</p>
                            <p className="productContent">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.</p>
                            <p className="productContentSize">SIZE
                                <span className="sizeRequire">*</span>
                                <span
                                    className="productContentSelectSize">&nbsp;&nbsp;{this.state.product.selectSize}</span>
                            </p>
                            <div>
                                {
                                    this.state.product.size.map((item, index) =>
                                        <a href="# " key={index}
                                           className={item === this.state.product.selectSize ? 'productSizeActive' : 'productSize'}
                                           onClick={() => this.handleSelectItem (item)}>
                                            <p>{item}</p>
                                        </a>)
                                }
                            </div>
                            {
                                this.state.product.selectSize ?
                                    <button className="btnAddItem"
                                            onClick={(e) => {
                                                this.props.handleAddToCart(this.state.product);
                                                handleAddProductSuccess(e)
                                            }}>
                                        ADD TO CART</button> :
                                    <button className="btnAddItem"
                                            onClick={(e) => {
                                                handleAddProductError(e)
                                            }}>
                                        ADD TO CART </button>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    handleSelectItem = value => {
        const product = this.state.product;
        product.selectSize = value;
        const isSelect = true;
        this.setState({product, isSelect})
    };
}

const mapDispatchToProps = (dispatch) => ({
    handleAddToCart(product) {
        dispatch(handleAddToCart(product));
    }
});

export default connect(null, mapDispatchToProps)(Home);
