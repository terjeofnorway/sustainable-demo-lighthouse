import { NewsItemData } from '../../types/NewsData';
import { NewsItem } from './NewsItem';

import style from './News.module.css';

type NewsProps = {
  newsData: NewsItemData[];
};

export const News = ({ newsData }: NewsProps) => {
  return (
    <div className={style.news}>
      <h1 className={style.header}>Kurs med oppstart i september</h1>
      <div className={style.newsContainer}>
        {newsData.map((newsItem, index) => (
          <NewsItem key={index} data={newsItem} />
        ))}
      </div>
    </div>
  );
};
