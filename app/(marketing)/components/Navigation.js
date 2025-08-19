'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ isLoggedIn: propIsLoggedIn, onLogout }) {
  // State สำหรับจัดการสถานะล็อกอิน
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  
  // Check login status on component mount and listen for changes
  useEffect(() => {
    // Check localStorage for login status
    const checkLoginStatus = () => {
      if (typeof window !== 'undefined') {
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loginStatus);
      }
    };

    // Initial check
    checkLoginStatus();

    // Listen for custom login event
    const handleLoginStatusChange = (event) => {
      setIsLoggedIn(event.detail.isLoggedIn);
    };

    // Listen for storage changes (for cross-tab sync)
    const handleStorageChange = (event) => {
      if (event.key === 'isLoggedIn') {
        setIsLoggedIn(event.newValue === 'true');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('loginStatusChanged', handleLoginStatusChange);
      window.addEventListener('storage', handleStorageChange);
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('loginStatusChanged', handleLoginStatusChange);
        window.removeEventListener('storage', handleStorageChange);
      }
    };
  }, []);

  // Use prop value if provided, otherwise use internal state
  const loggedIn = propIsLoggedIn !== undefined ? propIsLoggedIn : isLoggedIn;
  
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        
        // Dispatch logout event
        window.dispatchEvent(new CustomEvent('loginStatusChanged', { 
          detail: { isLoggedIn: false } 
        }));
      }
      
      setIsLoggedIn(false);
    }
    
    // รีไดเร็กต์ไปหน้าหลัก
    router.push('/');
  };

  // ฟังก์ชันสำหรับทดสอบ (จะลบออกในการใช้งานจริง)
  const handleTestLogin = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', 'test@example.com');
      
      window.dispatchEvent(new CustomEvent('loginStatusChanged', { 
        detail: { isLoggedIn: true, email: 'test@example.com' } 
      }));
    }
    setIsLoggedIn(true);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-lg" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
      backdropFilter: 'blur(15px)',
      borderBottom: '2px solid rgba(236, 240, 241, 0.1)',
      overflow: 'visible',
      minHeight: '70px'
    }}>
      <div className="container-fluid px-4">
        {/* Brand */}
        <Link 
          className="navbar-brand fw-bold fs-2 text-white" 
          href="/"
          style={{
            textShadow: '0 3px 6px rgba(0,0,0,0.4)',
            letterSpacing: '1.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          👟 ShoeMart
        </Link>
        
        {/* Mobile toggle button */}
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(236, 240, 241, 0.2)',
            borderRadius: '12px'
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill position-relative" 
                aria-current="page" 
                href="/"
                style={{
                  transition: 'all 0.3s ease',
                  background: 'rgba(236, 240, 241, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(236, 240, 241, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(52, 152, 219, 0.3)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 6px 15px rgba(52, 152, 219, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(236, 240, 241, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🏠 หน้าแรก
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill" 
                href="/brands"
                style={{
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(236, 240, 241, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(52, 152, 219, 0.3)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 6px 15px rgba(52, 152, 219, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🏷️ แบรนด์
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-4 py-2 mx-1 rounded-pill" 
                href="/sale"
                style={{
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(236, 240, 241, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(231, 76, 60, 0.3)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 6px 15px rgba(231, 76, 60, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🔥 โปรโมชั่น
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="d-flex gap-2 align-items-center">
            {!loggedIn ? (
              // เมื่อยังไม่ได้ Login
              <>
                <Link 
                  href="/login"
                  className="btn text-white fw-semibold px-4 py-2 border-2 rounded-pill"
                  style={{
                    borderColor: 'rgba(236, 240, 241, 0.8)',
                    background: 'rgba(236, 240, 241, 0.1)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(236, 240, 241, 0.25)';
                    e.target.style.borderColor = '#ecf0f1';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 15px rgba(236, 240, 241, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(236, 240, 241, 0.1)';
                    e.target.style.borderColor = 'rgba(236, 240, 241, 0.8)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
                  }}
                >
                  🔐 เข้าสู่ระบบ
                </Link>
                
                {/* ปุ่มทดสอบสำหรับ Demo */}
                <button 
                  onClick={handleTestLogin}
                  className="btn text-white fw-semibold px-3 py-1 border-1 rounded-pill"
                  style={{
                    borderColor: 'rgba(52, 152, 219, 0.8)',
                    background: 'rgba(52, 152, 219, 0.2)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    fontSize: '12px'
                  }}
                  title="ทดสอบล็อกอิน (Demo)"
                >
                  🧪 Test Login
                </button>
                
                <Link 
                  href="/register" 
                  className="btn text-white fw-bold px-4 py-2 border-0 rounded-pill"
                  style={{
                    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(231, 76, 60, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #c0392b 0%, #a93226 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 20px rgba(231, 76, 60, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 10px rgba(231, 76, 60, 0.3)';
                  }}
                >
                  ✨ สมัครสมาชิก
                </Link>
              </>
            ) : (
              // เมื่อ Login แล้ว - แสดงเฉพาะ Admin
              <>
                <Link 
                  href="/admin/users" 
                  className="btn text-white fw-semibold px-4 py-2 border-0 rounded-pill"
                  style={{
                    background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(243, 156, 18, 0.3)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 20px rgba(243, 156, 18, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 4px 10px rgba(243, 156, 18, 0.3)';
                  }}
                >
                  👑 Admin
                </Link>
                
                <button 
                  onClick={handleLogout}
                  className="btn text-white fw-semibold px-4 py-2 border-2 rounded-pill"
                  style={{
                    borderColor: 'rgba(236, 240, 241, 0.8)',
                    background: 'rgba(236, 240, 241, 0.1)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(231, 76, 60, 0.2)';
                    e.target.style.borderColor = '#e74c3c';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 15px rgba(231, 76, 60, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(236, 240, 241, 0.1)';
                    e.target.style.borderColor = 'rgba(236, 240, 241, 0.8)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
                  }}
                >
                  🚪 ออกจากระบบ
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}