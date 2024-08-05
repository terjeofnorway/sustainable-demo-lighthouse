import { NewsItemData } from '../../types/NewsData';
import style from './NewsItem.module.css';

type NewsItemProps = {
  data: NewsItemData;
};

export const NewsItem = ({ data }: NewsItemProps) => {
  return (
    <div className={style.newsItem}>
      <div className={style.newsImageContainer}>
        <img
          className={style.newsImage}
          src={`/public/images/${data.image}`}
          alt={data.title}
        />
      </div>
      <div className={style.textWrapper}>
        <a href={data.url} className={style.newsHeader}>
          <h2 className={style.newsHeader}>{data.title}</h2>
        </a>
        <p className={style.newsText}>{data.text}</p>
      </div>
    </div>
  );
};
