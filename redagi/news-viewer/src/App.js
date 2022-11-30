import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsPage from '../src/pages/NewsPage';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  console.log('app');
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
      {/* <Categories onSelect={onSelect} />
      <NewsPage category={category} /> */}
    </>
  );
};

export default App;
