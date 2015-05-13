(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/app.jsx":[function(require,module,exports){
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

console.log('hey');

//React renders the compenent using JSX Syntax (Jsx syntax for app component, Target)
// and places class in the body tag
React.render(element, document.querySelector('.container'));

},{}]},{},["./src/app.jsx"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gICAgdGh1bWJuYWlsRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ251bWJlciBvZiBjbGlja3MnLFxuICAgICAgICAgICAgbnVtYmVyOiAxMixcbiAgICAgICAgICAgIGhlYWRlcjogJ0xlYXJuIFJlYWN0IEpTJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGVhcm5pbmcgcmVhY3QgaXMgYXdlc29tZScsXG4gICAgICAgICAgICBpbWFnZVVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93aWtpL2ZhY2Vib29rL3JlYWN0L3JlYWN0LWxvZ28tMTAwMC10cmFuc3BhcmVudC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnbnVtYmVyIG9mIGNsaWNrcycsXG4gICAgICAgICAgICBudW1iZXI6IDEyLFxuICAgICAgICAgICAgaGVhZGVyOiAnTGVhcm4gR3VscCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xlYXJuaW5nIGd1bHAgaXMgYXdlc29tZScsXG4gICAgICAgICAgICBpbWFnZVVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ndWxwanMvYXJ0d29yay9tYXN0ZXIvZ3VscC0yeC5wbmcnXG4gICAgICAgIH1cbiAgICBdXG59O1xuXG4vL3JlbmRlciB0aGlzIGNsYXNzXG5cbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcblxuY29uc29sZS5sb2coJ2hleScpO1xuXG4vL1JlYWN0IHJlbmRlcnMgdGhlIGNvbXBlbmVudCB1c2luZyBKU1ggU3ludGF4IChKc3ggc3ludGF4IGZvciBhcHAgY29tcG9uZW50LCBUYXJnZXQpXG4vLyBhbmQgcGxhY2VzIGNsYXNzIGluIHRoZSBib2R5IHRhZ1xuUmVhY3QucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSk7XG4iXX0=
