import FarmerNews from "@/components/News";
import "../../../css/News.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="news-container">
        <div className="news-page-header">
          <h1 className="news-page-title">Latest Agricultural News</h1>
          <p className="news-page-subtitle">
            Stay updated with the latest agriculture and farming news from
            across the World
          </p>
        </div>
        <main className="news-main-content">
          <FarmerNews />
        </main>
      </div>
    </>
  );
}
