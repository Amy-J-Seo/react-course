import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { labeledStatement } from '../../../../../../../Users/com4in/AppData/Local/Microsoft/TypeScript/5.0/node_modules/@babel/types/lib/index';
import axios from '../../node_modules/axios/index';
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
const sampleArticle = {
  title: 'title',
  description: 'contents',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=12ca3481e4e445adb763b6bdd2525202',
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>....loading...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.id} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
