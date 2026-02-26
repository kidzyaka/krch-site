import { useEffect, useRef } from "react";
import "./css/Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add("footer-visible");
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <h2>Что такое KRCH?</h2>

        <div className="footer-text">
          <p>
            Современные ссылки стали перегруженными: токены, параметры,
            идентификаторы. Это удобно для сервисов, но неудобно для людей.
            KRCH делает ссылки короткими и лаконичными.
          </p>

          <p>
            Принцип работы основан на HTTP-перенаправлении: короткая ссылка
            содержит запись, которая ведёт на оригинальный адрес.
          </p>

          <p>
            Сервис ориентирован на минимализм и приватность — без регистрации
            и без хранения личных данных.
          </p>
        </div>

        <div className="footer-links">
          <a href="#" className="patreon">Patreon</a>
          <a href="#" className="boosty">Boosty</a>
          <a href="#" className="coffee">Buy me a coffee</a>
          <a href="https://github.com/kidzyaka/krch-site" target="_blank" className="github">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;