import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createBook } from '../actions/index';

class BooksFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      errorMessage: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;

    if (title === '' || category === '') {
      this.setState({
        errorMessage: 'Please provide complete details',
      });
    } else {
      createBook({
        id: Math.floor(Math.random() * 100),
        title,
        category,
      });
      e.target.reset();
      this.setState({
        title: '',
        category: '',
        errorMessage: '',
      });
    }
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const { errorMessage } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>{errorMessage}</h4>
        Title:
        <input type="text" name="title" onChange={this.handleChange} />
        Categories:
        <select name="category" onChange={this.handleChange} defaultValue="default">
          <option disabled value="default">-- select category --</option>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksFrom.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksFrom);
