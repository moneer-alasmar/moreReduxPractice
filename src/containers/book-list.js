import React, { Component } from "react";
import { connect } from "react-redux";

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

export default connect(mapStateToProps)(BookList);
