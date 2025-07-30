'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ShoeCarousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const slides = [
    {
      src: "/images/sliders/2.jpg",
      alt: "โปรโมชั่นรองเท้า",
      headline: "🔥 ลดราคาสุดพิเศษ!",
      subText: "รองเท้าแบรนด์ดัง ลดสูงสุด 50%",
    },
    {
      src: "/images/sliders/4.jpg",
      alt: "รองเท้าใหม่ล่าสุด",
      headline: "🆕 คอลเลกชันใหม่",
      subText: "พร้อมให้คุณเลือกก่อนใคร",
    },
  ];

  return (
    <div>
      <style jsx>{`
        .carousel {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          margin-bottom: 2rem;
        }
        .carousel-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9; /* ขนาดเท่ากันทุกสไลด์ */
        }
        .carousel-caption {
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          bottom: 12%;
          left: 8%;
          right: auto;
          text-align: left;
        }
        .carousel-caption h5 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }
        .carousel-caption p {
          font-size: 1.1rem;
          color: #ddd;
        }
        .carousel-indicators [data-bs-target] {
          background-color: #000;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          padding: 10px;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .carousel-caption {
            bottom: 8%;
            left: 5%;
            padding: 0.8rem 1rem;
          }
          .carousel-caption h5 {
            font-size: 1.4rem;
          }
          .carousel-caption p {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div id="carouselShoe" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselShoe"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="carousel-image-wrapper">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.headline}</h5>
                <p>{slide.subText}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselShoe" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselShoe" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
