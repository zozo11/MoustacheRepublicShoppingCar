import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import './Header.css'
import classicTee from "../../assets/images/classic-tee.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOnClick: false
        };
    }

    render() {
        return (
            <Fragment>
                <nav className="navBar">
                    <a href="# " onMouseEnter={() => this.handleMiniCartHover()} onMouseLeave={() => this.handleMiniCartLeave()}>
                        <div className={this.state.cartOnClick ? "navCartIconActive" : "navCart"}>
                            <span className="navHeadText">My Cart</span>
                            <FontAwesomeIcon className="navHeadCartIcon" icon={faShoppingCart}/>
                            <span> ({this.props.totalCount})</span>
                        </div>
                    </a>
                    {this.state.cartOnClick ?
                        <div className="navCartContent cartContent">{this.handleDisplayCartProduct()} </div> : null}
                </nav>
            </Fragment>
        );
    }

    handleDisplayCartProduct = () => {
        if (this.props.cartProductList.length > 0) {
            return (
                this.props.cartProductList.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="col-6">
                            <img className="homeBgImg" src={classicTee} alt={"productItem"}/>
                        </div>
                        <div className="col-6 cartPdInfo">
                            <p className="productName productTextBorder ">{item.name}</p>
                            <p className="productName productTextBorder ">{item.count} ×
                                &nbsp;<strong>${item.price}</strong>
                            </p>
                            <p className="productPrice productTextBorder ">Size: {item.selectSize}</p>
                        </div>
                    </div>
                ));
        } else {
            return <p>Your cart is empty</p>;
        }
    };

    handleMiniCartHover = () => {
        const cartOnClick = !this.state.cartOnClick;
        this.setState({cartOnClick});
    };
    handleMiniCartLeave = () => {
        const cartOnClick = !this.state.cartOnClick;
        this.setState({cartOnClick});
    }
}

const mapStateToProps = (state) => ({
    totalCount: state.cart.totalCount,
    cartProductList: state.cart.cartProductList,
});

export default connect(mapStateToProps, null)(Header);
