import React, { useState } from 'react'
import ListSeries from './ListSeries'
import Header from '../../Header';

const Series = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <Header onSearch={handleSearch} />
      <ListSeries searchTerm={searchTerm} />
    </div>
  )
}

export default Series
