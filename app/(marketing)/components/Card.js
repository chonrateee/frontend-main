'use client';

export default function CardShoes() {
  const shoes = [
    {
      img: "/images/Card/11.jpg",
      alt: "Nike Air Zoom",
      title: "Nike Air Zoom",
      text: "รองเท้าวิ่งน้ำหนักเบา ดีไซน์ทันสมัย ใส่สบายทุกวัน",
      category: "รองเท้าวิ่ง",
      gradient: "linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)"
    },
    {
      img: "/images/Card/22.jpg",
      alt: "Adidas Runner Pro",
      title: "Adidas Runner Pro",
      text: "รองเท้าวิ่งน้ำหนักเบา เหมาะสำหรับคนชอบออกกำลังกาย",
      category: "รองเท้าออกกำลังกาย",
      gradient: "linear-gradient(135deg, #FF6F61 0%, #D63384 100%)"
    },
    {
      img: "/images/Card/33.jpg",
      alt: "Converse Classic",
      title: "Converse Classic",
      text: "รองเท้าผ้าใบสุดคลาสสิค ใส่ได้ทุกโอกาส",
      category: "รองเท้าผ้าใบ",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
    }
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3 gradient-text">✨ รองเท้าแนะนำ</h2>
        <p className="text-muted fs-5">
          เลือกรองเท้าที่น่าสนใจและตรงใจคุณมากที่สุด
        </p>
      </div>

      {/* Shoes Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {shoes.map((shoe, index) => (
          <div key={index} className="shoe-card">
            {/* Image */}
            <div className="image-container">
              <img src={shoe.img} alt={shoe.alt} />
              <div className="image-overlay"></div>
              <span className="category">{shoe.category}</span>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <h5 className="title">{shoe.title}</h5>
              <p className="text">{shoe.text}</p>
              <div className="actions">
                <button className="btn-primary" style={{background: shoe.gradient}}>
                  ดูรายละเอียด
                </button>
                <button className="btn-favorite">❤️</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
    

      {/* CSS */}
      <style jsx>{`
        .gradient-text {
          font-size: 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .shoe-card {
          width: 19rem;
          border-radius: 20px;
          background: white;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
        }
        .shoe-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .shoe-card:hover .image-container img {
          transform: scale(1.1);
        }
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(transparent, rgba(0,0,0,0.5));
        }
        .category {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          background: rgba(0,0,0,0.7);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card-content {
          padding: 1rem;
        }
        .title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .text {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 1rem;
        }
        .actions {
          display: flex;
          gap: 0.5rem;
        }
        .btn-primary {
          flex-grow: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .btn-favorite {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.8);
          color: #e83e8c;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-favorite:hover {
          background: #e83e8c;
          color: white;
          transform: scale(1.1);
        }

        .btn-all-shoes {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-all-shoes:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
