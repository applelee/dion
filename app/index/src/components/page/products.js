var React = require('react');
var ProductsListItem = require('../blocks/products-list-item.js');
var BreadCrumbs = require('../blocks/bread-crumbs.js');

var Products = React.createClass({
    render : function(){
        return (
            <div className='Products-view'>
                <div className="container">
                    <BreadCrumbs name={'产品中心'} />
                </div>
                <div style={{marginTop:'40px'}} className="container">
                    <div className="product-tit"><span className="tit01"></span><span className="tit02">红酒</span></div>
                    <ProductsListItem listData={[1,1,1,1,1,1,1,1]} />
                </div>
            </div>
        );
    }
});

module.exports = Products;
