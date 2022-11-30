import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';
function NewsPage({ match }) {
  // console.log(params);
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
