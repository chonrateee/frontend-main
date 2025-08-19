'use client';
import { useState } from "react";

export default function ConverseStore() {
  const converseShoes = [
    { 
      id: 1, 
      title: "Converse Chuck Taylor All Star Classic", 
      price: 2100, 
      img: "/images/brands/convers/C1.jpg",
      rating: 4.6, 
      reviews: 3421,
      details: [
        "วัสดุ: ผ้าใบ Canvas คุณภาพสูง",
        "พื้นรองเท้า: ยางธรรมชาติ แข็งแรงทนทาน",
        "น้ำหนัก: 350 กรัม",
        "เหมาะสำหรับ: ใส่ประจำวัน casual style",
        "สีที่มีจำหน่าย: ดำ, ขาว, แดง, น้ำเงิน, เหลือง",
        "จุดเด่น: ดีไซน์คลาสสิค เก๋ไก๋ ไม่มีวันเอาท์ ใส่ได้ทุกวัย"
      ]
    },
    { 
      id: 2, 
      title: "Converse One Star Pro", 
      price: 2800, 
      img: "/images/brands/convers/C2.jpg",
      rating: 4.4, 
      reviews: 1687,
      details: [
        "วัสดุ: หนังกลับและผ้าใบผสม",
        "พื้นรองเท้า: ยางแบบ grip ดี เหมาะสำหรับ skate",
        "น้ำหนัก: 380 กรัม",
        "เหมาะสำหรับ: skateboarding และใส่ประจำวัน",
        "สีที่มีจำหน่าย: ดำ, ขาว, เทา, น้ำเงินเข้ม",
        "จุดเด่น: ดีไซน์ retro มั่นคง ทนทาน เหมาะกับกีฬา skate"
      ]
    }
  ];

  const [favorites, setFavorites] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', 
        color: 'white', 
        padding: '64px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
                        background: 'radial-gradient(circle at 30% 40%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
        }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
            <div style={{ 
              fontSize: '56px',
              background: 'linear-gradient(45deg, #dc2626, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))'
            }}>
              ⭐
            </div>
            <h1 style={{ 
              fontSize: '56px', 
              fontWeight: 'bold', 
              margin: 0,
              background: 'linear-gradient(45deg, #ffffff, #f8fafc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
              letterSpacing: '2px'
            }}>
              CONVERSE
            </h1>
          </div>
          <p style={{ 
            fontSize: '24px', 
            color: '#fecaca', 
            margin: 0,
            fontWeight: '600',
            letterSpacing: '1px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Forever Chuck
          </p>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 16px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '40px' 
        }}>
          {converseShoes.map((shoe) => (
            <div key={shoe.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '20px', 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(220, 38, 38, 0.1)'
            }}>
              {/* Image Area */}
              <div style={{ 
                position: 'relative',
                height: '320px', 
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)', 
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
                }}></div>
                <img 
                  src={shoe.img} 
                  alt={shoe.title}
                  style={{ 
                    height: '100%', 
                    maxHeight: '240px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                    zIndex: 1,
                    position: 'relative'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  width: '128px', 
                  height: '128px', 
                                          background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                  borderRadius: '16px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  boxShadow: '0 10px 20px rgba(220, 38, 38, 0.3)'
                }}>
                  ⭐
                </div>
                
                {/* Heart Button */}
                <button
                  onClick={() => toggleFavorite(shoe.id)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '48px',
                    height: '48px',
                    background: favorites.includes(shoe.id) 
                      ? 'linear-gradient(135deg, #dc2626, #b91c1c)' 
                      : 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  {favorites.includes(shoe.id) ? '❤️' : '🤍'}
                </button>

                {/* Classic Badge */}
                {shoe.id === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                    letterSpacing: '1px'
                  }}>
                    CLASSIC
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div style={{ padding: '32px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  margin: '0 0 16px 0'
                }}>
                  {shoe.title}
                </h3>
                
                {/* Rating */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '20px'
                }}>
                  <div style={{ color: '#f59e0b', fontSize: '16px' }}>
                    {'★'.repeat(Math.floor(shoe.rating))}
                    {'☆'.repeat(5 - Math.floor(shoe.rating))}
                  </div>
                  <span style={{ color: '#6b7280', fontSize: '14px' }}>
                    {shoe.rating} ({shoe.reviews.toLocaleString()} รีวิว)
                  </span>
                </div>

                {/* Price */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '16px', 
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ 
                      fontSize: '32px', 
                      fontWeight: 'bold', 
                      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {shoe.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '18px', color: '#6b7280' }}>฿</span>
                  </div>
                  {shoe.id === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ 
                        fontSize: '16px', 
                        color: '#9ca3af', 
                        textDecoration: 'line-through' 
                      }}>
                        3,200 ฿
                      </span>
                      <span style={{ 
                        fontSize: '12px', 
                        color: '#10b981',
                        fontWeight: '600',
                        background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                        padding: '2px 8px',
                        borderRadius: '12px'
                      }}>
                        ประหยัด 400 ฿
                      </span>
                    </div>
                  )}
                </div>

                {/* Brief Description */}
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '28px',
                  lineHeight: '1.6',
                  fontSize: '15px'
                }}>
                  {shoe.id === 1 ? 
                    "รองเท้าผ้าใบคลาสสิคที่โด่งดังที่สุดในโลก ดีไซน์เหนือกาลเวลา ใส่ได้ทุกวัย ทุกสไตล์ เป็นที่ชื่นชอบของเซเลบและคนทั่วไปมากว่า 100 ปี" :
                    "รองเท้าสเก็ตบอร์ดระดับโปร พัฒนาจากรุ่นคลาสสิค One Star เพิ่มความแข็งแรงและ grip ดีขึ้น เหมาะสำหรับนักสเก็ตจริงจัง"
                  }
                </p>

                {/* Button */}
                <button 
                  onClick={() => setSelectedShoe(shoe)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';
                  }}
                >
                  ดูรายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedShoe && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedShoe(null)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(220, 38, 38, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: '32px 32px 24px 32px', 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start'
              }}>
                <div>
                  <h2 style={{ 
                    fontSize: '28px', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    margin: '0 0 12px 0'
                  }}>
                    {selectedShoe.title}
                  </h2>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px'
                  }}>
                    <div style={{ color: '#f59e0b', fontSize: '16px' }}>
                      {'★'.repeat(Math.floor(selectedShoe.rating))}
                      {'☆'.repeat(5 - Math.floor(selectedShoe.rating))}
                    </div>
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>
                      {selectedShoe.rating} ({selectedShoe.reviews.toLocaleString()} รีวิว)
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedShoe(null)}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135df, #dc2626, #b91c1c)',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 8px 16px rgba(220, 38, 38, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              {/* Image */}
              <div style={{ 
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)', 
                borderRadius: '16px', 
                padding: '32px', 
                marginBottom: '32px',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
                }}></div>
                <img 
                  src={selectedShoe.img} 
                  alt={selectedShoe.title}
                  style={{ 
                    height: '200px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                    zIndex: 1,
                    position: 'relative'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
                  borderRadius: '16px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>
                  ⭐
                </div>
              </div>

              {/* Price */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '32px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center', 
                  gap: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ 
                      fontSize: '48px', 
                      fontWeight: 'bold', 
                      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {selectedShoe.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '24px', color: '#6b7280' }}>฿</span>
                  </div>
                  {selectedShoe.id === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ 
                        fontSize: '18px', 
                        color: '#9ca3af', 
                        textDecoration: 'line-through' 
                      }}>
                        3,200 ฿
                      </span>
                      <span style={{ 
                        fontSize: '14px', 
                        color: '#10b981',
                        fontWeight: '600',
                        background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                        padding: '4px 12px',
                        borderRadius: '16px'
                      }}>
                        ประหยัด 400 ฿
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontWeight: 'bold', 
                  fontSize: '20px', 
                  color: '#1f2937', 
                  margin: '0 0 20px 0'
                }}>
                  รายละเอียดสินค้า
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedShoe.details.map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '16px', 
                      padding: '16px', 
                      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                      borderRadius: '12px',
                      border: '1px solid rgba(220, 38, 38, 0.1)'
                    }}>
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0
                      }}></span>
                      <span style={{ color: '#374151', lineHeight: '1.6' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div style={{ 
                background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', 
                borderRadius: '16px', 
                padding: '24px', 
                marginBottom: '32px',
                border: '1px solid rgba(220, 38, 38, 0.1)'
              }}>
                <h4 style={{ 
                  fontWeight: '600', 
                  color: '#1f2937', 
                  margin: '0 0 16px 0',
                  fontSize: '18px'
                }}>
                  ข้อมูลเพิ่มเติม
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px', 
                  fontSize: '15px', 
                  color: '#374151'
                }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                    รับประกันสินค้า 1 ปี
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                    ส่งฟรีทุกคำสั่งซื้อ
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                    สินค้าแบรนด์แท้ 100%
                  </p>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                    ทดลองใส่ได้ที่ร้าน Converse ทุกสาขา
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedShoe(null)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}