var React = require('react');

var AddCommodity = React.createClass({

    componentDidMount : function(){
    },

    render : function(){
        return (
            <div className='add-commodity-view'>
                <div className="wrapper">
                    <div className='widget'>
                        <div className='title'><h6>商品基本信息</h6><div className='clear'></div></div>
                        <form id="validate" className="form user-management" method="post" action="">
                            <div className="formRow">
                                <label>商品类型：</label>
                                <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div>
                                <input type='text' style={{width:'200px',marginLeft:'20px;'}} />
                            </div>
                            <div className="formRow">
                                <label>商品属性图：</label>
                                <div className="formRight"><input size="25" id="file" name="file" type="file" /></div>
                                <div className='clear'></div>
                            </div>
                            <div className="formRow">
                                <label>商品名称：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /><span>最多30字</span></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>商品简介：</label>
                                <div className="formRight"><textarea className='jianjie'></textarea><span>最多150字</span></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>所在地：</label>
                                <div className="selector" id="uniform-undefined"><select name="select2"><option value="opt1">是</option><option value="opt2">否</option><option value="opt3">不限</option></select></div>
                                <div className='clear'></div>
                            </div>
                            <div className="formRow">
                                <label>商品价格：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>商品数量：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>商品编码：</label>
                                <div className="formRight"><input className="validate[required]" name="req" id="req" type="text" /></div><div className="clear"></div>
                            </div>
                            <div className="formRow">
                                <label>商品图片：</label>
                                <div className="formRight"><input size="25" id="file" name="file" type="file" /></div><div className="clear"></div>
                            </div>
                            <div className="formSubmit"><input value="发布" className="redB" type="submit" /></div>
                            <div className="clear"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = AddCommodity;