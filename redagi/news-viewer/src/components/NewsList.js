import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 786px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({ category }) {
  const [loading, resolved, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=12ca3481e4e445adb763b6bdd2525202`,
    );
  }, [category]);
  // const [articles, setArticles] = useState(null);
  //const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const res = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=12ca3481e4e445adb763b6bdd2525202`,
  //       );
  //       setArticles(res.data.articles);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  if (loading) {
    return <NewsListBlock>....loading...</NewsListBlock>;
  }
  if (!resolved) {
    return null;
  }
  if (error) {
    return <NewsListBlock>....something went wrong...</NewsListBlock>;
  }

  const { articles } = resolved.data;
  return (
    <NewsListBlock>
      {articles.map((article, i) => (
        <NewsItem key={i} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
