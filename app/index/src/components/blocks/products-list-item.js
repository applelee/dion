var React = require('react');

var ProductsList = React.createClass({

    render : function(){
        return (
            <div className='products-list-view product-box'>
                {
                    $.map(this.props.listData || [],function(v,i){
                        return(
                            <a key={i} href='#/product/12' className="box-01">
                                <div className="pic"><img src="assets/img/product/hj-01.jpg" /></div>
                                <span>长城四星赤霞珠</span>
                            </a>
                        )
                    })
                }
            </div>
        );
    }
});

module.exports = ProductsList;

