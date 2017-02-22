var Text = React.createClass({
    changeType: function(){
        alert(1);
    },
    render: function () {
        return (
            <select name='type' id='J_type' onChange={this.changeType}>
                <option value="1">我这个月辛辛苦苦上班啦~~</option>
                <option value="2">早早下班什么的最开心~~~~</option>
            </select>
        );
    }
});
ReactDOM.render(
    <Text></Text>,
    document.getElementById('J_content')
);