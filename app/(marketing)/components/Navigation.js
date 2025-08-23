'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ isLoggedIn: propIsLoggedIn, onLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  // ตรวจสอบสถานะการล็อกอิน
  useEffect(() => {
    const checkLoginStatus = () => {
      if (typeof window !== 'undefined') {
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loginStatus);
      }
    };

    checkLoginStatus();

    const handleLoginStatusChange = (event) => {
      setIsLoggedIn(event.detail.isLoggedIn);
    };

    const handleStorageChange = (event) => {
      if (event.key === 'isLoggedIn') {
        setIsLoggedIn(event.newValue === 'true');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('loginStatusChanged', handleLoginStatusChange);
      window.addEventListener('storage', handleStorageChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('loginStatusChanged', handleLoginStatusChange);
        window.removeEventListener('storage', handleStorageChange);
      }
    };
  }, []);

  const loggedIn = propIsLoggedIn !== undefined ? propIsLoggedIn : isLoggedIn;
  
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        
        window.dispatchEvent(new CustomEvent('loginStatusChanged', { 
          detail: { isLoggedIn: false } 
        }));
      }
      setIsLoggedIn(false);
    }
    router.push('/');
  };

  // ฟังก์ชันทดสอบการล็อกอิน (สำหรับ Demo) - เพิ่ม onClick ใน logo สำหรับ Demo
  const handleTestLogin = (e) => {
    // ถ้า shift + click ที่ logo จะเป็น demo login
    if (e.shiftKey) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', 'demo@shoeshop.com');
        
        window.dispatchEvent(new CustomEvent('loginStatusChanged', { 
          detail: { isLoggedIn: true, email: 'demo@shoeshop.com' } 
        }));
      }
      setIsLoggedIn(true);
    }
  };

  const navItemStyle = {
    transition: 'all 0.3s ease',
    border: '1px solid rgba(236, 240, 241, 0.2)',
    textDecoration: 'none'
  };

  const navItemHoverEvents = {
    onMouseEnter: (e) => {
      e.target.style.background = 'rgba(52, 152, 219, 0.3)';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 6px 15px rgba(52, 152, 219, 0.3)';
    },
    onMouseLeave: (e) => {
      e.target.style.background = 'transparent';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(236, 240, 241, 0.1)',
      zIndex: 1030
    }}>
      <div className="container">
        
        {/* Brand Logo - ปรับปรุงให้สวยงามขึ้น */}
        <Link 
          href="/" 
          className="navbar-brand fw-bold d-flex align-items-center text-decoration-none"
          onClick={handleTestLogin}
          title="💡 เคล็ดลับ: Shift + Click สำหรับ Demo Login ทันที!"
          style={{
            fontSize: '28px',
            fontFamily: "'Kanit', 'Poppins', sans-serif",
            letterSpacing: '1px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          <span 
            style={{
              background: 'linear-gradient(135deg, #3498db 0%, #e74c3c 50%, #f39c12 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '800'
            }}
          >
            👟 SHOE
          </span>
          <span 
            style={{
              background: 'linear-gradient(135deg, #e74c3c 0%, #f39c12 50%, #27ae60 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '800',
              marginLeft: '2px'
            }}
          >
            SHOP
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(52, 152, 219, 0.2)',
            backdropFilter: 'blur(8px)',
            borderRadius: '10px',
            padding: '8px 12px'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            {/* หน้าแรก */}
            <li className="nav-item">
              <Link 
                href="/" 
                className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill"
                style={navItemStyle}
                {...navItemHoverEvents}
              >
                🏠 หน้าแรก
              </Link>
            </li>
            
            {/* โปรโมชั่น */}
            <li className="nav-item">
              <Link 
                href="/sale" 
                className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill position-relative"
                style={{
                  ...navItemStyle,
                  background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                  boxShadow: '0 2px 10px rgba(231, 76, 60, 0.3)',
                  animation: 'pulse 2s infinite'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)';
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 2px 10px rgba(231, 76, 60, 0.3)';
                }}
              >
                🔥 SALE
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: '8px' }}>
                  HOT
                </span>
              </Link>
            </li>

            {/* แบรนด์ */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold px-4 py-2 mx-1 rounded-pill"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={navItemStyle}
                {...navItemHoverEvents}
              >
                ⭐ แบรนด์ดัง
              </a>
              <ul 
                className="dropdown-menu shadow-lg border-0" 
                style={{
                  background: 'rgba(44, 62, 80, 0.95)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '15px',
                  marginTop: '12px',
                  border: '1px solid rgba(236, 240, 241, 0.2)'
                }}
              >
                {[
                  { href: '/brands/nike', icon: '✓', label: 'Nike', color: '#ff6900' },
                  { href: '/brands/adidas', icon: '⚡', label: 'Adidas', color: '#000000' },
                  { href: '/brands/converse', icon: '⭐', label: 'Converse', color: '#e31e24' },
                  { href: '/brands/vans', icon: '🎯', label: 'Vans', color: '#ee3124' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white text-decoration-none fw-semibold"
                      style={{ transition: 'all 0.3s ease' }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`;
                        e.target.style.transform = 'translateX(8px)';
                        e.target.style.color = item.color === '#ff6900' ? '#000' : '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                        e.target.style.color = '#fff';
                      }}
                    >
                      {item.icon} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* เพิ่มลิงก์ Admin สำหรับผู้ล็อกอิน */}
            {loggedIn && (
              <li className="nav-item">
                <Link 
                  href="/admin/users" 
                  className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill"
                  style={{
                    ...navItemStyle,
                    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
                    boxShadow: '0 2px 10px rgba(243, 156, 18, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e67e22 0%, #d68910 100%)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 15px rgba(243, 156, 18, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 10px rgba(243, 156, 18, 0.3)';
                  }}
                >
                  👑 จัดการระบบ
                </Link>
              </li>
            )}
          </ul>

          {/* ปุ่มควบคุมและสถานะผู้ใช้ */}
          <div className="d-flex gap-2 align-items-center flex-wrap">
            
            {!loggedIn ? (
              // กรณียังไม่ได้ล็อกอิน
              <>
                <Link 
                  href="/login"
                  className="btn text-white fw-semibold px-4 py-2 border-2 rounded-pill text-decoration-none"
                  style={{
                    borderColor: 'rgba(236, 240, 241, 0.8)',
                    background: 'rgba(236, 240, 241, 0.1)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(236, 240, 241, 0.25)';
                    e.target.style.borderColor = '#ecf0f1';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(236, 240, 241, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(236, 240, 241, 0.1)';
                    e.target.style.borderColor = 'rgba(236, 240, 241, 0.8)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                  }}
                >
                  🔐 เข้าสู่ระบบ
                </Link>
                
                {/* ปุ่มสมัครสมาชิก */}
                <Link 
                  href="/register" 
                  className="btn text-white fw-bold px-4 py-2 border-0 rounded-pill text-decoration-none"
                  style={{
                    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(231, 76, 60, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.4)';
                  }}
                >
                  ✨ สมัครสมาชิก
                </Link>
              </>
            ) : (
              // กรณีล็อกอินแล้ว - แสดงปุ่มออกจากระบบอย่างเดียว
              <>
                {/* Welcome Message */}
                <span className="text-white fw-medium me-2 d-none d-md-inline">
                  <span className="me-2">👤</span>
                  ยินดีต้อนรับ!
                </span>

                {/* ปุ่มออกจากระบบ */}
                <button 
                  onClick={handleLogout}
                  className="btn text-white fw-semibold px-4 py-2 border-0 rounded-pill d-flex align-items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(231, 76, 60, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.4)';
                  }}
                  title="คลิกเพื่อออกจากระบบทันที"
                >
                  <span>🚪</span>
                  <span>ออกจากระบบ</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}