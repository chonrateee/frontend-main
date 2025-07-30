'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container-fluid px-4">
        {/* Brand */}
        <Link 
          className="navbar-brand fw-bold fs-3 text-white" 
          href="/"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '1px'
          }}
        >
           Chonratee
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
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '10px'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-3 py-2 mx-1 rounded-pill position-relative" 
                aria-current="page" 
                href="/"
                style={{
                  transition: 'all 0.3s ease',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🏠 หน้าแรก
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold px-3 py-2 mx-1 rounded-pill"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                📋 เมนูเพิ่มเติม
              </a>
              <ul 
                className="dropdown-menu shadow-lg border-0" 
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  marginTop: '10px'
                }}
              >
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1" 
                    href="#"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'black';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    ⚡ Action
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1" 
                    href="#"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'black';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    🔧 Another action
                  </a>
                </li>
                <li><hr className="dropdown-divider mx-2" style={{ opacity: 0.3 }} /></li>
                <li>
                  <a 
                    className="dropdown-item py-2 px-3 rounded-3 mx-2 my-1" 
                    href="#"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'black';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    ✨ Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex me-3" role="search">
            <div className="input-group" style={{ minWidth: '200px' }}>
              <input
                className="form-control border-0 pe-5"
                type="search"
                placeholder="🔍 ค้นหา..."
                aria-label="Search"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '25px 0 0 25px',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <button 
                className="btn text-white fw-semibold border-0" 
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  borderRadius: '0 25px 25px 0',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                }}
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="d-flex gap-2 align-items-center">
            <Link 
              href="/" 
              className="btn text-white fw-semibold px-3 py-2 border-0 rounded-pill"
              style={{
                background: 'rgba(108, 117, 125, 0.8)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(108, 117, 125, 1)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(108, 117, 125, 0.8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              🏠 กลับหน้าหลัก
            </Link>
            
            <Link 
              href="/login" 
              className="btn text-white fw-semibold px-4 py-2 border-2 rounded-pill"
              style={{
                borderColor: 'rgba(255,255,255,0.8)',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.borderColor = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              🔐 Login
            </Link>
            
            <Link 
              href="/register" 
              className="btn text-white fw-bold px-4 py-2 border-0 rounded-pill"
              style={{
                background: 'linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #e76a00 0%, #d63384 100%)';
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              ✨ Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}