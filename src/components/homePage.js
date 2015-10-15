/**
 * Created by nguyenle on 10/15/2015.
 */
"use strict";
var React = require('react');


var Home = React.createClass({
    render : function(){
        return (
                <div className="jumbotron">
                    <h1>Pluralsight Administartion</h1>
                    <p>React , React Router , and Flux</p>
                </div>
        );
    }
});

module.exports = Home;
