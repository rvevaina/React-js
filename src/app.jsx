var React = require('react');
var ThumbnailList = require('./thumbnail-list');
var Dropdown = require('./dropdown');

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

var dropDownOptions = {
    title: 'Choose a dessert', //button title for the dropdown
    subTitle: 'Desserts are nice',
    years: 22,
    items: [ //list of items in the dropdown
    'Apple pie',
    'peach cobbler',
    'chocolate fudge'
    ]
};

//render this class

var element = React.createElement(ThumbnailList, options);

var element2 = React.createElement(Dropdown, dropDownOptions);


//React renders the compenent using JSX Syntax (Jsx syntax for app component, Target)
// and places class in the body tag
React.render(element, document.querySelector('.section-1'));

React.render(element2, document.querySelector('.section-2'));
