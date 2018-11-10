import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // WHATEVER IS RETURNED FROM APPLICATION STATE WILL SHOW UP AS PROPS FOR OUR CONTAINER, IN THIS CASE OUR BOOK LIST CONTAINER WILL HAVE ACCESS TO OUR LIST OF BOOKS IN APPLICATION STATE
  return {
    books: state.books
  };
}

// Anything Returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our Reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a cotnainer - it needs to know about new dispatch method, selectBook. Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
