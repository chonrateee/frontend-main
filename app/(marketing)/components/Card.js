'use client';

export default function Card() {
  const cards = [
    { 
      img: "/images/Card/1.jpg", 
      alt: "Card 1", 
      title: "การ์ดที่ 1",
      text: "รายละเอียดการ์ด 1 พร้อมข้อมูลที่น่าสนใจและน่าติดตาม",
      category: "หมวดหมู่ A",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    { 
      img: "/images/Card/2.jpg", 
      alt: "Card 2", 
      title: "การ์ดที่ 2",
      text: "รายละเอียดการ์ด 2 ที่มีเนื้อหาครบครันและทันสมัย",
      category: "หมวดหมู่ B",
      gradient: "linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)"
    },
    { 
      img: "/images/Card/3.jpg", 
      alt: "Card 3", 
      title: "การ์ดที่ 3",
      text: "รายละเอียดการ์ด 3 ที่น่าประทับใจและมีคุณค่า",
      category: "หมวดหมู่ C",
      gradient: "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
    },
  ];

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 
          className="fw-bold mb-3"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          ✨ Featured Cards
        </h2>
        <p className="text-muted fs-5">
          สำรวจการ์ดที่น่าสนใจและเลือกสิ่งที่ดีที่สุดสำหรับคุณ
        </p>
      </div>

      {/* Cards Container */}
      <div 
        className="d-flex justify-content-center gap-4 flex-wrap" 
        role="group" 
        aria-label="Card list"
      >
        {cards.map((card, index) => (
          <div 
            className="position-relative overflow-hidden"
            style={{ 
              width: '20rem',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) rotateY(5deg)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            {/* Gradient Overlay */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
              style={{
                background: card.gradient,
                transition: 'opacity 0.3s ease',
                zIndex: 1,
                borderRadius: '20px'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.1';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0';
              }}
            />

            {/* Category Badge */}
            <div 
              className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill text-white fw-semibold"
              style={{
                background: card.gradient,
                fontSize: '0.8rem',
                zIndex: 2,
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            >
              {card.category}
            </div>

            {/* Image Container */}
            <div 
              className="position-relative overflow-hidden"
              style={{
                height: '200px',
                borderRadius: '20px 20px 0 0'
              }}
            >
              <img 
                src={card.img} 
                className="w-100 h-100 object-fit-cover"
                alt={card.alt}
                style={{
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              
              {/* Image Overlay */}
              <div 
                className="position-absolute bottom-0 start-0 w-100 p-3"
                style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  zIndex: 1
                }}
              >
                <h5 className="text-white fw-bold mb-0">{card.title}</h5>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 position-relative" style={{ zIndex: 2 }}>
              <p 
                className="text-muted mb-3"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}
              >
                {card.text}
              </p>

              {/* Action Buttons */}
              <div className="d-flex gap-2 align-items-center">
                <button 
                  className="btn text-white fw-semibold px-4 py-2 border-0 rounded-pill flex-grow-1"
                  style={{
                    background: card.gradient,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                >
                  📖 อ่านเพิ่มเติม
                </button>
                
                <button 
                  className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = card.gradient;
                    e.target.style.borderColor = 'transparent';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'rotate(15deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = '#6c757d';
                    e.target.style.color = '#6c757d';
                    e.target.style.transform = 'rotate(0deg) scale(1)';
                  }}
                >
                  ❤️
                </button>
              </div>

              {/* Stats */}
              <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                <small className="text-muted d-flex align-items-center gap-1">
                  👁️ <span>1.2k views</span>
                </small>
                <small className="text-muted d-flex align-items-center gap-1">
                  ⭐ <span>4.8 rating</span>
                </small>
                <small className="text-muted d-flex align-items-center gap-1">
                  💬 <span>24 comments</span>
                </small>
              </div>
            </div>

            {/* Floating Elements */}
            <div 
              className="position-absolute"
              style={{
                top: '10px',
                left: '10px',
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                backdropFilter: 'blur(5px)',
                zIndex: 0,
                opacity: 0.5
              }}
            />
            <div 
              className="position-absolute"
              style={{
                bottom: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(5px)',
                zIndex: 0,
                opacity: 0.3
              }}
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <button 
          className="btn text-white fw-bold px-5 py-3 border-0 rounded-pill"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
            e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
        >
          🚀 ดูการ์ดทั้งหมด
        </button>
      </div>
    </div>
  );
}