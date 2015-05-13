var options = {
    thumbnailData: [
        {
            title: 'number of clicks',
            number: 12,
            header: 'Learn React JS',
            description: 'learning react is awesome',
            imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
        },
        {
            title: 'number of clicks',
            number: 12,
            header: 'Learn Gulp',
            description: 'learning gulp is awesome',
            imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
        }
    ]
};

//render this class

var element = React.createElement(ThumbnailList, options);


//React renders the compenent using JSX Syntax (Jsx syntax for app component, Target)
// and places class in the body tag
React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
    render: function (){
        //give elements a property and name to customize
        //DOM elements in JSX require a className
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function (){
        //mapping an array calls a function on every element and returns a new array
        //... is used to pass in an entire object instead of listing everything individually

        // the list is an array of thumbnail instances
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });
        return React.createElement("div", null, 
            list
        )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function (){
        return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
            React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
                React.createElement("div", {className: "caption"}, 
                    React.createElement("h3", null, this.props.header), 
                    React.createElement("p", null, this.props.description), 
                    React.createElement("p", null, React.createElement(Badge, {title: this.props.title, number: this.props.number}))
                )
            )
        )
    }
});