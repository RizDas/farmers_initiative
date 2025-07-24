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

  // Remove category change handler
  // const handleCategoryChange = (newCategory: "technology" | "business") => {
  //   setCategory(newCategory);
  //   setArticles([]);
  //   setNextPage(null);
  //   setHasMore(true);
  //   setInitialLoad(true);
  // };

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
    <div className={`min-h-screen ${props.disableCustomTheme ? '' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="sticky top-0 bg-white shadow-sm z-10 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Farmer News India</h1>
          <p className="text-gray-600 mt-2">Latest agriculture and farming news from India</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {initialLoad && loading ? (
          // Initial loading state
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading news...</span>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <article
                  key={`${article.url}-${index}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Image */}
                  {article.urlToImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2 leading-tight">
                      {article.title}
                    </h2>
                    
                    {article.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {article.description}
                      </p>
                    )}
                    
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Loading indicator for infinite scroll */}
            {loading && !initialLoad && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2 text-gray-600">Loading more...</span>
              </div>
            )}

            {/* Infinite scroll trigger */}
            <div ref={loaderRef} className="h-10" />

            {/* No more articles message */}
            {!hasMore && articles.length > 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No more articles to load</p>
              </div>
            )}

            {/* No articles found */}
            {!loading && articles.length === 0 && !initialLoad && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No farmer news articles found</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default News;