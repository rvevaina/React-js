var React = require('react');

module.exports = React.createClass({
    render: function (){
        //give elements a property and name to customize
        //DOM elements in JSX require a className
        return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});