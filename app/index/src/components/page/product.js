var React = require('react');
var BreadCrumbs = require('../blocks/bread-crumbs.js');

var Products = React.createClass({

    componentDidMount : function(){
        //$('#slider_product').Slider();
        $('#slider_detail').Slider({type:'Horizontal'});
    },

    render : function(){
        return (
            <div className='Product-view'>
                <div className='container'>
                    <div className="responsive-box clearfix" id="slider_detail">
                        <div className="kpxq-img-box">
                            <div className="lef-hover-box btn-prev"><div className="pos-box"><i className="ico-15-js ico-15-lef-js"></i></div></div>
                            <div className="rig-hover-box btn-next"><div className="pos-box"><i className="ico-15-js ico-15-rig-js"></i></div></div>
                            <img className="big-img" src='./assets/img/photo.jpg'/>
                        </div>
                        <div className="slider-box-3-js clearfix" >
                            <div className="btn-prev"><i className="arrow-2-js arrow-2-lef-js btn-lef"></i></div>
                            <div className="btn-next"><i className="arrow-2-js arrow-2-rig-js btn-rig"></i></div>
                            <div className="slider-box">
                                <ul className="item-box">
                                    <li className='item' data-big-img-url='./assets/img/photo.jpg'>
                                        <a className="img-box"><img src='./assets/img/photo.jpg' /></a>
                                    </li>
                                    <li className='item' data-big-img-url='./assets/img/photo.jpg'>
                                        <a className="img-box"><img src='./assets/img/photo.jpg' /></a>
                                    </li>
                                    <li className='item' data-big-img-url='./assets/img/photo.jpg'>
                                        <a className="img-box"><img src='./assets/img/photo.jpg' /></a>
                                    </li>
                                    <li className='item' data-big-img-url='./assets/img/photo.jpg'>
                                        <a className="img-box"><img src='./assets/img/photo.jpg' /></a>
                                    </li>
                                    <li className='item' data-big-img-url='./assets/img/photo.jpg'>
                                        <a className="img-box"><img src='./assets/img/photo.jpg' /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="slider_product" className="container slider-box-1-js" style={{display:'none'}}>
                        <ul className="slider">
                            <li className="item transition-opacity-1">
                                <img src='./assets/img/photo.jpg' />
                            </li>
                            <li className="item transition-opacity-1">
                                <img src='./assets/img/photo.jpg' />
                            </li>
                            <li className="item transition-opacity-1">
                                <img src='./assets/img/photo.jpg' />
                            </li>
                        </ul>
                    </div>
                    <div className='product-info-box'>
                        <h2>商品详情</h2>
                        <p>阿萨德发地方；阿里会计师阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方阿萨德发地方</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Products;