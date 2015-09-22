var React = require('react');

var ProductListItem = React.createClass({

    componentDidMount : function(){
        var $product_list = $('#' + this.props.id);

        $('.oneFive',$product_list).each(function(i,e){
            var $lef = $('.lef',$(e));
            var $rig = $('.rig',$(e));
            var $num = $('.num',$(e));
            var $price_input = $('.price-input',$(e));

            $lef.on('click',function(){
                var num = $num.text();

                if(num > 0){
                    $num.text(parseInt(num)-1);
                    $price_input.val('¥' + (parseInt(num)-1) * $num.attr('data-price'));
                }
            });

            $rig.on('click',function(){
                var num = $num.text();

                $num.text(parseInt(num)+1);
                $price_input.val('¥' + (parseInt(num)+1) * $num.attr('data-price'));
            });
        });
    },

    render : function(){
        return (
            <div className='product-list clearfix' id={this.props.id}>
                {
                    $.map(this.props.listData || [],function(v,i){
                        return(
                            <div key={i} className="oneFive">
                                <div className="widget">
                                    <div className="title"><h6>玉液穷浆</h6></div>
                                    <div className='mall-item-box'>
                                        <a className='img-box' href='#/product_detail/12'>
                                            <img src='./assets/images/backgrounds/bg.jpg' />
                                        </a>
                                        <div className='price'><input className='price-input' type='text' disabled="disabled" value='¥0' /></div>
                                        <div className='numBox'><i className='lef'>-</i><i className='rig'>+</i><span data-price='30' className='num'>0</span></div>
                                        <span className='btn'>加入购物车</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = ProductListItem;
