var React = require('react');
var ProductListItem = require('../blocks/product-list-item.js');

var MallHome = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        var alcohol = ['高娘九','不桃酒','纪委酒']

        return (
            <div className='mall-home-view'>
                <div className="wrapper">
                    {
                        $.map(alcohol,function(v,i){
                            return(
                                <div key={i} className="widget">
                                    <div className="title"><h6>{v}</h6><div className="clear"></div></div>
                                    <ProductListItem listData={[1,0,0,0,1,2,2]} id={'product_list_' + i} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
});

module.exports = MallHome;
