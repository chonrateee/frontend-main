'use client';
import { useState, useEffect } from 'react';

export default function PromotionsPage() {
  const [activeTab, setActiveTab] = useState('flash-sales');
  const [copiedCode, setCopiedCode] = useState('');
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 42
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Copy coupon code function
  const copyCouponCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    }
  };

  const featuredDeals = [
    {
      id: 1,
      title: 'Nike Air Max 90',
      originalPrice: 4500,
      discountPrice: 3200,
      discount: 29,
      image: '👟',
      timeLeft: '2 วัน',
      stock: 15,
      sold: 85,
      category: 'รองเท้าวิ่ง',
      colors: ['#000000', '#ffffff']
    },
    {
      id: 2,
      title: 'Adidas Ultraboost 22',
      originalPrice: 6000,
      discountPrice: 4200,
      discount: 30,
      image: '⚡',
      timeLeft: '1 วัน',
      stock: 8,
      sold: 42,
      category: 'รองเท้ากีฬา',
      colors: ['#000000', '#ffffff']
    },
    {
      id: 3,
      title: 'Converse Chuck 70',
      originalPrice: 2800,
      discountPrice: 2100,
      discount: 25,
      image: '⭐',
      timeLeft: '3 วัน',
      stock: 25,
      sold: 67,
      category: 'รองเท้าแฟชั่น',
      colors: ['#e31e24', '#ffffff']
    },
    {
      id: 4,
      title: 'Vans Old Skool',
      originalPrice: 2200,
      discountPrice: 1650,
      discount: 25,
      image: '🔥',
      timeLeft: '5 ชม.',
      stock: 5,
      sold: 95,
      category: 'รองเท้าลำลอง',
      colors: ['#000000', '#ff6b00']
    }
  ];

  const flashSales = [
    {
      id: 1,
      title: 'Flash Sale 12.12',
      subtitle: 'ลดสูงสุด 50% ทุกรายการ',
      time: '12:00 - 14:00 น.',
      status: 'กำลังมา',
      items: 120,
      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
    },
    {
      id: 2,
      title: 'Midnight Sale',
      subtitle: 'ลดพิเศษ 40% สินค้าเลือกสรร',
      time: '00:00 - 02:00 น.',
      status: 'จบแล้ว',
      items: 85,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 3,
      title: 'Weekend Special',
      subtitle: 'ซื้อ 2 ชิ้น ลด 35%',
      time: 'เสาร์-อาทิตย์',
      status: 'ดำเนินอยู่',
      items: 200,
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  const couponCodes = [
    {
      id: 1,
      code: 'SHOE50',
      title: 'ลด 50% สำหรับสมาชิกใหม่',
      description: 'ใช้ได้กับรองเท้าทุกคู่ ขั้นต่ำ 2,000 บาท',
      discount: '50%',
      expiry: '31 ธ.ค. 2024',
      used: 245,
      limit: 1000,
      type: 'percentage',
      color: '#e74c3c'
    },
    {
      id: 2,
      code: 'FREESHIP',
      title: 'ส่งฟรีทั่วประเทศ',
      description: 'สั่งซื้อครบ 1,500 บาท ส่งฟรีทันที',
      discount: 'ฟรี',
      expiry: '25 ธ.ค. 2024',
      used: 567,
      limit: 2000,
      type: 'shipping',
      color: '#27ae60'
    },
    {
      id: 3,
      code: 'NIKE300',
      title: 'ลด 300 บาท รองเท้า Nike',
      description: 'เฉพาะรองเท้า Nike ทุกรุ่น ขั้นต่ำ 2,500 บาท',
      discount: '300฿',
      expiry: '20 ธ.ค. 2024',
      used: 123,
      limit: 500,
      type: 'fixed',
      color: '#3498db'
    },
    {
      id: 4,
      code: 'STUDENT20',
      title: 'ลด 20% สำหรับนักเรียน นักศึกษา',
      description: 'แสดงบัตรนักเรียน/นักศึกษา รับส่วนลดทันที',
      discount: '20%',
      expiry: '31 มี.ค. 2025',
      used: 89,
      limit: 1500,
      type: 'student',
      color: '#9b59b6'
    }
  ];

  const seasonalOffers = [
    {
      id: 1,
      title: 'ลิขสิทธิ์ฤดูหนาว',
      subtitle: 'รองเท้าบูทและรองเท้าแฟชั่น',
      discount: 'ลดสูงสุด 40%',
      period: 'ตลอดเดือนธันวาคม',
      image: '🥾',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'New Year Sale',
      subtitle: 'เริ่มต้นปีใหม่ด้วยรองเท้าใหม่',
      discount: 'ลด 25-35%',
      period: '1-15 ม.ค. 2025',
      image: '🎉',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      id: 3,
      title: 'Back to School',
      subtitle: 'รองเท้าสำหรับนักเรียน นักศึกษา',
      discount: 'ลด 30% + ฟรีกระเป๋า',
      period: 'พฤษภาคม 2025',
      image: '🎒',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const tabs = [
    { id: 'flash-sales', name: '⚡ Flash Sale', icon: '⚡' },
    { id: 'coupons', name: '🎫 คูปอง', icon: '🎫' },
    { id: 'seasonal', name: '🎯 โปรตามฤดูกาล', icon: '🎯' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {/* Hero Section with Countdown */}
      <div className="container-fluid py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="position-absolute" style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Ccircle cx="20" cy="20" r="20"/%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold mb-4" style={{
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            letterSpacing: '1px'
          }}>
            โปรโมชันพิเศษ
          </h1>
          <p className="lead mb-5" style={{ fontSize: '1.2rem', opacity: '0.95' }}>
            ข้อเสนอสุดพิเศษสำหรับรองเท้าแบรนด์ดัง พร้อมส่งฟรีทั่วประเทศ
          </p>
          
          {/* Countdown Timer */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="card border-0 shadow-lg" style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px'
              }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">⏰ โปรโมชันจบใน</h5>
                  <div className="row text-center">
                    <div className="col-3">
                      <div className="h4 fw-bold mb-1">{countdown.days.toString().padStart(2, '0')}</div>
                      <small>วัน</small>
                    </div>
                    <div className="col-3">
                      <div className="h4 fw-bold mb-1">{countdown.hours.toString().padStart(2, '0')}</div>
                      <small>ชั่วโมง</small>
                    </div>
                    <div className="col-3">
                      <div className="h4 fw-bold mb-1">{countdown.minutes.toString().padStart(2, '0')}</div>
                      <small>นาที</small>
                    </div>
                    <div className="col-3">
                      <div className="h4 fw-bold mb-1">{countdown.seconds.toString().padStart(2, '0')}</div>
                      <small>วินาที</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Navigation Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-lg border-0" style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-4">
                <div className="d-flex flex-wrap gap-2">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`btn rounded-pill px-4 py-3 fw-semibold ${
                        activeTab === tab.id ? '' : ''
                      }`}
                      style={{
                        background: activeTab === tab.id 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          : 'rgba(102, 126, 234, 0.1)',
                        color: activeTab === tab.id ? 'white' : '#667eea',
                        border: activeTab === tab.id ? 'none' : '2px solid rgba(102, 126, 234, 0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.icon} {tab.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Sales Section */}
        {activeTab === 'flash-sales' && (
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold" style={{ color: '#2c3e50' }}>⚡ Flash Sale รายชั่วโมง</h3>
              <p style={{ opacity: '0.7' }}>โปรโมชันระยะสั้น ลดสูงสุดใน 24 ชั่วโมง!</p>
            </div>
            {flashSales.map(sale => (
              <div key={sale.id} className="col-lg-4 mb-4">
                <div className="card h-100 shadow-lg border-0" style={{
                  borderRadius: '20px',
                  background: sale.background,
                  color: 'white',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <div className="card-body p-4 text-center">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>⚡</div>
                    <h4 className="fw-bold mb-2">{sale.title}</h4>
                    <p className="mb-3" style={{ opacity: '0.9' }}>{sale.subtitle}</p>
                    
                    <div className="row text-center mb-4">
                      <div className="col-6">
                        <div className="fw-bold h5">{sale.time}</div>
                        <small style={{ opacity: '0.8' }}>เวลา</small>
                      </div>
                      <div className="col-6">
                        <div className="fw-bold h5">{sale.items}</div>
                        <small style={{ opacity: '0.8' }}>รายการ</small>
                      </div>
                    </div>

                    <span className={`badge rounded-pill px-4 py-2 ${
                      sale.status === 'ดำเนินอยู่' ? 'bg-success' :
                      sale.status === 'กำลังมา' ? 'bg-warning text-dark' :
                      'bg-secondary'
                    }`} style={{ fontSize: '0.9rem' }}>
                      {sale.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Coupons Section */}
        {activeTab === 'coupons' && (
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold" style={{ color: '#2c3e50' }}>🎫 คูปองส่วนลด</h3>
              <p style={{ opacity: '0.7' }}>รวบรวมคูปองส่วนลดพิเศษสำหรับคุณ!</p>
            </div>
            {couponCodes.map(coupon => (
              <div key={coupon.id} className="col-lg-6 mb-4">
                <div className="card shadow-lg border-0" style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div className="row g-0">
                    <div className="col-4" style={{
                      background: coupon.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative'
                    }}>
                      <div className="text-center">
                        <div className="h3 fw-bold">{coupon.discount}</div>
                        <div style={{ fontSize: '0.8rem', opacity: '0.9' }}>ส่วนลด</div>
                      </div>
                      
                      {/* Zigzag border */}
                      <div className="position-absolute" style={{
                        right: '-10px',
                        top: 0,
                        bottom: 0,
                        width: '20px',
                        background: `repeating-linear-gradient(
                          to bottom,
                          ${coupon.color} 0px,
                          ${coupon.color} 15px,
                          transparent 15px,
                          transparent 30px
                        )`
                      }}></div>
                    </div>
                    
                    <div className="col-8">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="fw-bold mb-0">{coupon.title}</h6>
                          <span 
                            className="badge bg-light text-dark"
                            style={{
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onClick={() => copyCouponCode(coupon.code)}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'scale(1)';
                            }}
                          >
                            {coupon.code}
                          </span>
                        </div>
                        
                        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                          {coupon.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <small>ใช้งานแล้ว: {coupon.used}</small>
                            <small>จำกัด: {coupon.limit}</small>
                          </div>
                          <div className="progress" style={{ height: '4px', borderRadius: '2px' }}>
                            <div 
                              className="progress-bar" 
                              style={{ 
                                width: `${(coupon.used / coupon.limit) * 100}%`,
                                background: coupon.color
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">หมดอายุ: {coupon.expiry}</small>
                          <button 
                            className="btn btn-sm fw-bold position-relative" 
                            style={{
                              background: copiedCode === coupon.code ? '#28a745' : coupon.color,
                              color: 'white',
                              border: 'none',
                              borderRadius: '10px',
                              padding: '6px 15px',
                              transition: 'all 0.3s ease'
                            }}
                            onClick={() => copyCouponCode(coupon.code)}
                          >
                            {copiedCode === coupon.code ? '✓ คัดลอกแล้ว!' : 'คัดลอก'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Seasonal Offers Section */}
        {activeTab === 'seasonal' && (
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fw-bold" style={{ color: '#2c3e50' }}>🎯 โปรโมชันตามฤดูกาล</h3>
              <p style={{ opacity: '0.7' }}>ข้อเสนอพิเศษตลอดทั้งปี เหมาะกับทุกโอกาส!</p>
            </div>
            {seasonalOffers.map(offer => (
              <div key={offer.id} className="col-lg-4 mb-4">
                <div className="card h-100 shadow-lg border-0" style={{
                  borderRadius: '25px',
                  background: offer.background,
                  color: 'white',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotate(1deg)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                }}>
                  <div className="card-body p-5 text-center position-relative">
                    <div className="position-absolute top-0 end-0 m-3" style={{ fontSize: '2rem', opacity: '0.3' }}>
                      {offer.image}
                    </div>
                    
                    <div className="mb-4" style={{ fontSize: '4rem' }}>
                      {offer.image}
                    </div>
                    
                    <h4 className="fw-bold mb-2">{offer.title}</h4>
                    <p className="mb-3" style={{ opacity: '0.9', lineHeight: '1.6' }}>
                      {offer.subtitle}
                    </p>
                    
                    <div className="mb-4">
                      <div className="h5 fw-bold mb-2" style={{
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '15px',
                        padding: '10px 20px',
                        display: 'inline-block'
                      }}>
                        {offer.discount}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <small style={{ opacity: '0.8' }}>ระยะเวลา: {offer.period}</small>
                    </div>
                    
                    <button className="btn btn-light btn-lg fw-bold px-4 py-3" style={{
                      borderRadius: '20px',
                      color: '#2c3e50'
                    }}>
                      ดูรายละเอียด →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Code Input Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-lg border-0" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '25px',
              color: 'white'
            }}>
              <div className="card-body p-5 text-center">
                <h3 className="fw-bold mb-3">🎫 กรอกโค้ดส่วนลด</h3>
                <p className="mb-4" style={{ opacity: '0.9' }}>
                  มีโค้ดส่วนลดอยู่แล้ว? กรอกที่นี่เพื่อรับส่วนลดทันที
                </p>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="กรอกโค้ดส่วนลด..."
                        style={{
                          borderRadius: '25px 0 0 25px',
                          border: 'none',
                          padding: '15px 20px'
                        }}
                      />
                      <button 
                        className="btn btn-warning fw-bold" 
                        style={{
                          borderRadius: '0 25px 25px 0',
                          padding: '15px 30px',
                          border: 'none'
                        }}
                      >
                        ใช้โค้ด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copied notification */}
        {copiedCode && (
          <div 
            className="position-fixed" 
            style={{
              bottom: '20px',
              right: '20px',
              zIndex: 1050,
              animation: 'fadeInOut 2s ease-in-out'
            }}
          >
            <div className="alert alert-success alert-dismissible shadow-lg border-0" style={{
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #28a745, #20c997)',
              color: 'white',
              border: 'none'
            }}>
              <strong>✓ คัดลอกโค้ดสำเร็จ!</strong><br />
              โค้ด <strong>{copiedCode}</strong> ถูกคัดลอกไปยังคลิปบอร์ดแล้ว
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10%, 90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}