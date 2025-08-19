'use client';
import { useState } from "react";

export default function AdidasStore() {
  const adidasShoes = [
    { 
      id: 1, 
      title: "Adidas Runner Pro", 
      price: 2800, 
      img: "/images/brands/adidas/A1.jpg",
      rating: 4.5, 
      reviews: 245,
      details: [
        "วัสดุ: ผ้า Mesh ระบายอากาศดี",
        "พื้นรองเท้า: EVA แบบลดแรงกระแทก",
        "น้ำหนัก: 280 กรัม",
        "เหมาะสำหรับ: วิ่งและใส่ประจำวัน",
        "สีที่มีจำหน่าย: ดำ, ขาว, น้ำเงิน",
        "จุดเด่น: ดีไซน์ทันสมัย น้ำหนักเบา"
      ]
    },
    { 
      id: 2, 
      title: "Adidas Ultraboost", 
      price: 5500, 
      img: "/images/brands/adidas/A2.jpg",
      rating: 4.8, 
      reviews: 892,
      details: [
        "วัสดุ: Primeknit ยืดหยุ่นเข้ารูปเท้า",
        "พื้นรองเท้า: Boost midsole รองรับแรงกระแทก",
        "น้ำหนัก: 310 กรัม",
        "เหมาะสำหรับ: วิ่งระยะไกลและใส่ประจำวัน",
        "สีที่มีจำหน่าย: ดำ, ขาว, แดง, ฟ้า",
        "จุดเด่น: นุ่มสบาย รองรับแรงกระแทกดีเยี่ยม"
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
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(to right, #000000, #374151)', 
        color: 'white', 
        padding: '48px 16px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ fontSize: '48px' }}>👟</span>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: 0 }}>adidas</h1>
          </div>
          <p style={{ fontSize: '20px', color: '#d1d5db', margin: 0 }}>Impossible is Nothing</p>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '32px' 
        }}>
          {adidasShoes.map((shoe) => (
            <div key={shoe.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              {/* Image Area */}
              <div style={{ 
                position: 'relative',
                height: '320px', 
                backgroundColor: '#f3f4f6', 
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={shoe.img} 
                  alt={shoe.title}
                  style={{ 
                    height: '100%', 
                    maxHeight: '256px', 
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  width: '128px', 
                  height: '128px', 
                  backgroundColor: '#e5e7eb',
                  borderRadius: '8px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px'
                }}>
                  👟
                </div>
                
                {/* Heart Button */}
                <button
                  onClick={() => toggleFavorite(shoe.id)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px'
                  }}
                >
                  {favorites.includes(shoe.id) ? '❤️' : '🤍'}
                </button>
              </div>

              {/* Product Info */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  margin: '0 0 12px 0'
                }}>
                  {shoe.title}
                </h3>
                
                {/* Rating */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '16px'
                }}>
                  <div style={{ color: '#fbbf24' }}>
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
                  alignItems: 'baseline', 
                  gap: '4px', 
                  marginBottom: '16px'
                }}>
                  <span style={{ 
                    fontSize: '32px', 
                    fontWeight: 'bold', 
                    color: '#111827'
                  }}>
                    {shoe.price.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '18px', color: '#6b7280' }}>฿</span>
                </div>

                {/* Brief Description */}
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}>
                  {shoe.id === 1 ? 
                    "รองเท้าวิ่งสำหรับการใช้งานประจำวัน ด้วยวัสดุ Mesh ระบายอากาศ และพื้น EVA ลดแรงกระแทก น้ำหนักเบาเพียง 280 กรัม" :
                    "รองเท้าวิ่งระดับพรีเมียม ด้วยเทคโนโลยี Primeknit และพื้น Boost midsole รองรับแรงกระแทกได้ดีเยี่ยม เหมาะสำหรับนักวิ่งทุกระดับ"
                  }
                </p>

                {/* Button */}
                <button 
                  onClick={() => setSelectedShoe(shoe)}
                  style={{
                    width: '100%',
                    backgroundColor: '#374151',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1f2937'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              borderRadius: '12px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ 
              padding: '24px', 
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start'
              }}>
                <div>
                  <h2 style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: '#111827', 
                    margin: '0 0 8px 0'
                  }}>
                    {selectedShoe.title}
                  </h2>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px'
                  }}>
                    <div style={{ color: '#fbbf24' }}>
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
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '24px' }}>
              {/* Image */}
              <div style={{ 
                backgroundColor: '#f3f4f6', 
                borderRadius: '8px', 
                padding: '24px', 
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src={selectedShoe.img} 
                  alt={selectedShoe.title}
                  style={{ height: '192px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  backgroundColor: '#e5e7eb',
                  borderRadius: '8px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px'
                }}>
                  👟
                </div>
              </div>

              {/* Price */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '24px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  justifyContent: 'center', 
                  gap: '4px'
                }}>
                  <span style={{ 
                    fontSize: '40px', 
                    fontWeight: 'bold', 
                    color: '#111827'
                  }}>
                    {selectedShoe.price.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '20px', color: '#6b7280' }}>฿</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontWeight: 'bold', 
                  fontSize: '18px', 
                  color: '#111827', 
                  margin: '0 0 16px 0'
                }}>
                  รายละเอียดสินค้า
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedShoe.details.map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px', 
                      padding: '12px', 
                      backgroundColor: '#f9fafb',
                      borderRadius: '8px'
                    }}>
                      <span style={{ 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#111827',
                        borderRadius: '50%',
                        marginTop: '6px',
                        flexShrink: 0
                      }}></span>
                      <span style={{ color: '#374151' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div style={{ 
                backgroundColor: '#f9fafb', 
                borderRadius: '8px', 
                padding: '16px', 
                marginBottom: '24px'
              }}>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  margin: '0 0 12px 0'
                }}>
                  ข้อมูลเพิ่มเติม
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  fontSize: '14px', 
                  color: '#374151'
                }}>
                  <p style={{ margin: 0 }}>✓ รับประกันสินค้า 1 ปี</p>
                  <p style={{ margin: 0 }}>✓ จัดส่งฟรีเมื่อซื้อครบ 2,000 บาท</p>
                  <p style={{ margin: 0 }}>✓ คืนสินค้าได้ภายใน 30 วัน</p>
                  <p style={{ margin: 0 }}>✓ ทดลองใส่ได้ที่ร้าน adidas ทุกสาขา</p>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedShoe(null)}
                style={{
                  width: '100%',
                  backgroundColor: '#374151',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1f2937'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
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