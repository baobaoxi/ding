var Text = React.createClass({
    getInitialState: function() {
      return {
          ticketType:'1',
          days:['2012-12-12']
      };
    },
    changeType: function(e){
       var value = e.target.value;
        
        this.setState({
        ticketType: value,
      }); 
    },
    handleClick:function(){
     
        this.state.days.push('');
        console.log(this.state.days);
    },
    render: function () {
        return (
            <div>
                <select name='type' id='J_type' onChange={this.changeType}>
                    <option value="1">我这个月辛辛苦苦上班啦~~</option>
                    <option value="2">早早下班什么的最开心~~~~</option>
                </select>
                <div className='time-wrap'>
                    <span className={this.state.ticketType==1 && 'show'}>
                        以下时间不包括
                    </span>
                    <span className={this.state.ticketType==2 && 'show'}>
                        只要以下时间
                    </span>
                </div>
                <span onClick={this.handleClick}>点我加日期</span>
                <div>
                {
                    this.state.days.map(function (name) {
                        return <input type="date" ref="name" key="name" />
                    }) 
                }
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <Text></Text>,
    document.getElementById('J_content')
);