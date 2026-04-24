import "./css/Home.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const res = await fetch("http://localhost:8081/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(url),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      const finalUrl =
        data.shortUrl ?? `${data.shortCode}`;

      setShortUrl(finalUrl);
    } catch (e) {
      setError("Ошибка при сокращении ссылки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="krch">
      <Header />

      <div className="krch-content">
        <h1 className="logo">KRCH.IO</h1>
        <p className="desc">Make links grate again</p>

        <div className="steps">
          <div className="input-with-chains">
            <div className="chain-bg" />

            <div className="input-link">
              <input
                type="text"
                value={url}
                placeholder="Вставь длинную ссылку..."
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="krch-link" onClick={handleShorten} disabled={loading}>
          {loading ? "..." : "Короче!"}
        </button>

        {shortUrl && (
          <p style={{ marginTop: 20 }}>
            Короткая ссылка: <a href={shortUrl} style={{ color: "white" }}>{shortUrl}</a>
          </p>
        )}

        {error && (
          <p style={{ marginTop: 20, color: "red" }}>
            {error}
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;