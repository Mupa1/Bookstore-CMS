import React from 'react';

const BooksFrom = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      Title:
      <input type="text" placeholder="enter the book's title" />
      Categories:
      <select>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </form>
  );
};

export default BooksFrom;