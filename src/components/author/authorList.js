/**
 * Created by nguyenle on 10/16/2015.
 */
var React = require('react');
var AuthorList = React.createClass({
    propTypes : {
      authors : React.PropTypes.array.isRequired
    },
    render : function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.firstName} {author.lastName} </td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }

});

module.exports = AuthorList;