var React = require('react');

var ProductDetail = React.createClass({

    componentDidMount : function(){
        $('#slider_detail').Slider({type:'Horizontal'});
    },

    render : function(){
        return (
            <div className='product-detail-view'>
                <div className="slider-layout-box clearfix" id="slider_detail">
                    <div className="kpxq-img-box">
                        <div className="lef-hover-box btn-prev"><div className="pos-box"><i className="ico-15-js ico-15-lef-js"></i></div></div>
                        <div className="rig-hover-box btn-next"><div className="pos-box"><i className="ico-15-js ico-15-rig-js"></i></div></div>
                        <img className="big-img" src='./assets/images/photo.jpg'/>
                    </div>
                    <div className="slider-box-3-js clearfix" >
                        <div className="btn-prev"><i className="arrow-2-js arrow-2-lef-js btn-lef"></i></div>
                        <div className="btn-next"><i className="arrow-2-js arrow-2-rig-js btn-rig"></i></div>
                        <div className="slider-box">
                            <ul className="item-box">
                                <li className='item' data-big-img-url='./assets/images/photo.jpg'>
                                    <a className="img-box"><img src='./assets/images/photo.jpg' /></a>
                                </li>
                                <li className='item' data-big-img-url='./assets/images/photo.jpg'>
                                    <a className="img-box"><img src='./assets/images/photo.jpg' /></a>
                                </li>
                                <li className='item' data-big-img-url='./assets/images/photo.jpg'>
                                    <a className="img-box"><img src='./assets/images/photo.jpg' /></a>
                                </li>
                                <li className='item' data-big-img-url='./assets/images/photo.jpg'>
                                    <a className="img-box"><img src='./assets/images/photo.jpg' /></a>
                                </li>
                                <li className='item' data-big-img-url='./assets/images/photo.jpg'>
                                    <a className="img-box"><img src='./assets/images/photo.jpg' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className="widget">
                        <div className="title"><h6>路易123456789</h6><div className="clear"></div></div>
                        <div className='product-id'><span>商品ID：9527</span></div>
                        <div className='price'><span>单价：¥300</span></div>
                        <p>Fusce luctus libero porta eros molestie sed varius nulla pharetra. Praesent elementum convallis felis, et scelerisque ipsum ullamcorper sit amet. Fusce vitae diam dui. Phasellus non nulla nisi. Suspendisse interdum massa vulputate ligula fermentum id tempor eros dictum.Fusce luctus libero porta eros molestie sed varius nulla pharetra. Praesent elementum convallis felis, et scelerisque ipsum ullamcorper sit amet. Fusce vitae diam dui. Phasellus non nulla nisi. Suspendisse interdum massa vulputate ligula fermentum id tempor eros dictum.</p>
                        <div className='line'></div>
                        <form id="validate" className="form" method="post" action="">
                            <div className="formRow">
                                <label>购买数量：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div>
                                <div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>配送城市：</label>
                                <div className="formRight">
                                    <div className="selector" id="uniform-undefined">
                                        <select name="select2">
                                            <option value="opt1">Usual select dropdown</option>
                                            <option value="opt2">Option 2</option>
                                            <option value="opt3">Option 3</option>
                                            <option value="opt4">Option 4</option>
                                            <option value="opt5">Option 5</option>
                                            <option value="opt6">Option 6</option>
                                            <option value="opt7">Option 7</option>
                                            <option value="opt8">Option 8</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="加入购物车" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ProductDetail;
