/**
 * Created by nguyenle on 10/14/2015.
 */

var React = require('react');
var Router = require('react-router');
var routers = require('./routes');

Router.run(routers,function(Handler){
   React.render(<Handler/>,document.getElementById('app'));
});