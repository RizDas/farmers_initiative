"use client";

import * as React from "react";
import { useEffect, useState, useRef, useCallback } from "react";

type NewsArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const PAGE_SIZE = 10;

function News(props: { disableCustomTheme?: boolean }) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [category] = useState<string>("agriculture OR farming OR crops");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchArticles = async (reset = false) => {
    if (loading || (!hasMore && !reset)) return;
    setLoading(true);

    try {
      const url =
        `/api/newsdata?category=${encodeURIComponent(category)}` +
        (reset || !nextPage ? "" : `&page=${nextPage}`);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();

      if (reset) {
        setArticles(data.articles);
      } else {
        setArticles((prev) => [...prev, ...data.articles]);
      }

      setNextPage(data.nextPage ?? null);
      setHasMore(!!data.nextPage);
    } catch (err) {
      console.error("Fetch error:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
      if (initialLoad) setInitialLoad(false);
    }
  };

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        fetchArticles();
      }
    },
    [hasMore, loading, nextPage]
  );

  // Set up intersection observer
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  // Initial load effect
  useEffect(() => {
    fetchArticles(true);
  }, []);

  return (
    <div className={`${props.disableCustomTheme ? "" : "news-content"}`}>
      {/* Sticky Header */}
      <div className="news-header">
        <div className="news-header-content">
          <h2 className="news-header-title">Farming News</h2>
          <p className="news-header-description">
            Latest agriculture and farming news globally
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div>
        {initialLoad && loading ? (
          // Initial loading state
          <div className="loading-initial">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading news...</span>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="articles-grid">
              {articles.map((article, index) => (
                <article
                  key={`${article.url}-${index}`}
                  className="article-card"
                >
                  {/* Image */}
                  {article.urlToImage && (
                    <div className="article-image-container">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="article-image"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="article-image-overlay"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="article-content">
                    <h3 className="article-title">{article.title}</h3>

                    {article.description && (
                      <p className="article-description">
                        {article.description}
                      </p>
                    )}

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-link"
                    >
                      Read more
                      <svg
                        className="article-link-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Loading indicator for infinite scroll */}
            {loading && !initialLoad && (
              <div className="loading-more">
                <div className="loading-spinner-small"></div>
                <span className="loading-more-text">Loading more...</span>
              </div>
            )}

            {/* Infinite scroll trigger */}
            <div ref={loaderRef} className="scroll-trigger" />

            {/* No more articles message */}
            {!hasMore && articles.length > 0 && (
              <div className="status-message">
                <p className="no-more-articles">No more articles to load</p>
              </div>
            )}

            {/* No articles found */}
            {!loading && articles.length === 0 && !initialLoad && (
              <div className="status-message">
                <p className="no-articles-found">
                  No farmer news articles found
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default News;
