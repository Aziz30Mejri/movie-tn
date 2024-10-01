import React, { useState } from 'react';
import ListFilms from './ListFilms';
import Header from '../../Header';

const Films = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
    <Header onSearch={handleSearch} />
    <ListFilms searchTerm={searchTerm} />
  </div>
  )
}

export default Films
