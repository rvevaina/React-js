var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
    render: function (){
        //mapping an array calls a function on every element and returns a new array
        //... is used to pass in an entire object instead of listing everything individually
        // the list is an array of thumbnail instances
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return < Thumbnail { ...thumbnailProps } />
        });
        return <div>
            { list }
        </div>
    }
});