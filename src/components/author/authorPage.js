/**
 * Created by nguyenle on 10/16/2015.
 */
var React = require('react');
var AuthorApi = require('../api/authorApi');
var AuthorList = require('./authorList');
var Authors = React.createClass({
    getInitialState : function(){
        return {
            authors : []
        };
    },
    componentDidMount : function () {
        if(this.isMounted()) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },
    render : function(){
        return (
            <div>
                <h1> Author </h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

});

module.exports = Authors;