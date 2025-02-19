import { getNews } from "../api/api";
import { useParams } from "react-router-dom";
import { timeAgo } from "../constants/utils";
import { useState, useEffect } from "react";

interface newsI {
  id: number;
  source: string;
  headline: string;
  datetime: number;
  url: string;
}

const News = () => {
  const { id } = useParams();
  const [newsList, setNewsList] = useState<newsI[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNewsList(response.slice(0, 3));
    };

    fetchNews();

    console.log(newsList);
  }, [id]);
  return (
    <div className="news-container">
      <div className="py-6 px-5">
        <h2 className="text-secondary-text font-normal text-base my-2 font-roboto">
          Latest News
        </h2>

        {newsList
          ? newsList.map((news) => (
              <div key={news.id} className="flex flex-col gap-1 py-2">
                <a href={news.url} target="_blank">
                  <h3 className="text-sm tracking-wide hover:underline ">
                    {news.headline}
                  </h3>
                </a>
                <span className="text-xs ternary-text">
                  {timeAgo(news.datetime)}
                </span>
              </div>
            ))
          : "Something Went Wrong"}
      </div>
    </div>
  );
};

export default News;
