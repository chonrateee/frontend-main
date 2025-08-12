'use client';
import Link from 'next/link';

export default function Navbar() {
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
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold px-4 py-2 mx-1 rounded-pill"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
                👟 หมวดหมู่รองเท้า
              </a>
              <ul 
                className="dropdown-menu shadow-lg border-0" 
                style={{
                  background: 'rgba(44, 62, 80, 0.95)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '15px',
                  marginTop: '12px',
                  position: 'absolute',
                  zIndex: 1050,
                  border: '1px solid rgba(236, 240, 241, 0.2)'
                }}
              >
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white" 
                    href="/shoes/sneakers"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    👟 รองเท้าผ้าใบ
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white" 
                    href="/shoes/formal"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    👔 รองเท้าหนัง
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white" 
                    href="/shoes/sports"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    ⚽ รองเท้ากีฬา
                  </a>
                </li>
                <li><hr className="dropdown-divider mx-2" style={{ opacity: 0.3, borderColor: 'rgba(236, 240, 241, 0.3)' }} /></li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white" 
                    href="/shoes/boots"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    🥾 รองเท้าบูท
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1 text-white" 
                    href="/shoes/sandals"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    👡 รองเท้าแตะ
                  </a>
                </li>
              </ul>
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

          {/* Search Form */}
          <form className="d-flex me-3" role="search">
            <div className="input-group" style={{ minWidth: '250px' }}>
              <input
                className="form-control border-0 pe-5"
                type="search"
                placeholder="🔍 ค้นหารองเท้า..."
                aria-label="Search"
                style={{
                  background: 'rgba(236, 240, 241, 0.9)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '25px 0 0 25px',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.1)',
                  fontSize: '14px'
                }}
              />
              <button 
                className="btn text-white fw-semibold border-0" 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                  borderRadius: '0 25px 25px 0',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 6px 15px rgba(52, 152, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.3)';
                }}
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="d-flex gap-2 align-items-center">
            <Link 
              href="/cart" 
              className="btn text-white fw-semibold px-3 py-2 border-0 rounded-pill position-relative"
              style={{
                background: 'rgba(52, 73, 94, 0.8)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(52, 73, 94, 1)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(52, 73, 94, 0.8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
            >
              🛒 ตะกร้า
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '10px' }}
              >
                3
              </span>
            </Link>
            
            <Link 
              href="/login" 
              className="btn text-white fw-semibold px-4 py-2 border-2 rounded-pill"
              style={{
                borderColor: 'rgba(236, 240, 241, 0.8)',
                background: 'rgba(236, 240, 241, 0.1)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
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
          </div>
        </div>
      </div>
    </nav>
  );
}