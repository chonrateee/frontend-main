'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: 'Nike',
      logo: '✔️',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center',
      description: 'Just Do It - แบรนด์กีฬาชั้นนำระดับโลก',
      products: 156,
      category: 'sports',
      colors: ['#000000', '#ff6b35'],
      founded: '1964',
      country: 'USA',
      specialties: ['รองเท้าวิ่ง', 'บาสเกตบอล', 'ฟุตบอล'],
      popularModels: ['Air Max', 'Air Jordan', 'React'],
      priceRange: '2,500 - 8,000 บาท'
    },
    {
      id: 2,
      name: 'Adidas',
      logo: '⚡',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop&crop=center',
      description: 'Impossible is Nothing - นวัตกรรมและประสิทธิภาพ',
      products: 134,
      category: 'sports',
      colors: ['#000000', '#ffffff'],
      founded: '1949',
      country: 'Germany',
      specialties: ['ฟุตบอล', 'วิ่ง', 'ไลฟ์สไตล์'],
      popularModels: ['Ultraboost', 'Stan Smith', 'Gazelle'],
      priceRange: '2,200 - 7,500 บาท'
    },
    {
      id: 3,
      name: 'Converse',
      logo: '⭐',
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop&crop=center',
      description: 'รองเท้าผ้าใบคลาสสิกที่เหนือกาลเวลา',
      products: 89,
      category: 'casual',
      colors: ['#e31e24', '#ffffff'],
      founded: '1908',
      country: 'USA',
      specialties: ['Chuck Taylor', 'แฟชั่น', 'คลาสสิก'],
      popularModels: ['Chuck 70', 'All Star', 'One Star'],
      priceRange: '1,800 - 4,500 บาท'
    },
    {
      id: 4,
      name: 'Vans',
      logo: '🔥',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop&crop=center',
      description: 'Off The Wall - วัฒนธรรมสเก็ตบอร์ดและแฟชั่น',
      products: 95,
      category: 'lifestyle',
      colors: ['#000000', '#ff6b00'],
      founded: '1966',
      country: 'USA',
      specialties: ['สเก็ตบอร์ด', 'ไลฟ์สไตล์', 'สตรีท'],
      popularModels: ['Old Skool', 'Authentic', 'Slip-On'],
      priceRange: '1,900 - 4,200 บาท'
    }
  ];

  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: '🎯' },
    { id: 'sports', name: 'กีฬา', icon: '⚽' },
    { id: 'casual', name: 'ลำลอง', icon: '👟' },
    { id: 'lifestyle', name: 'ไลฟ์สไตล์', icon: '🎨' }
  ];

  const filteredBrands = selectedCategory === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {/* Hero Section */}
      <div className="container-fluid py-5" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4" style={{
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            letterSpacing: '2px'
          }}>
            🏷️ แบรนด์ยอดนิยม
          </h1>
          <p className="lead mb-4" style={{ fontSize: '1.3rem', opacity: '0.9' }}>
            เลือกซื้อรองเท้าจากแบรนด์ชั้นนำทั่วโลก พร้อมรับประกันคุณภาพ
          </p>
          <div className="row text-center">
            <div className="col-md-3">
              <h3 className="fw-bold">4+</h3>
              <p>แบรนด์ดัง</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">474+</h3>
              <p>รุ่นรองเท้า</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">3+</h3>
              <p>ประเทศทั่วโลก</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">100%</h3>
              <p>ของแท้</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-lg border-0" style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px'
            }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">🎯 กรองตามหมวดหมู่</h5>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`btn rounded-pill px-4 py-2 fw-semibold ${
                        selectedCategory === category.id ? '' : ''
                      }`}
                      style={{
                        background: selectedCategory === category.id 
                          ? 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'
                          : 'rgba(52, 152, 219, 0.1)',
                        color: selectedCategory === category.id ? 'white' : '#3498db',
                        border: selectedCategory === category.id ? 'none' : '2px solid #3498db20',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="row">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="col-lg-6 col-xl-6 mb-5">
              <div 
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: '25px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  transform: hoveredBrand === brand.id ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
                  background: hoveredBrand === brand.id 
                    ? `linear-gradient(135deg, ${brand.colors[0]} 0%, ${brand.colors[1]} 100%)`
                    : 'rgba(255,255,255,0.95)',
                  color: hoveredBrand === brand.id ? 'white' : '#2c3e50'
                }}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                {/* Brand Image */}
                <div className="position-relative" style={{ height: '200px' }}>
                  <img
                    src={brand.image}
                    alt={`${brand.name} รองเท้า`}
                    className="w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredBrand === brand.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                    loading="lazy"
                  />
                  <div className={`position-absolute top-0 start-0 w-100 h-100`} style={{
                    background: hoveredBrand === brand.id 
                      ? `linear-gradient(45deg, ${brand.colors[0]}40, ${brand.colors[1]}40)`
                      : 'rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}></div>
                  
                  {/* Brand Logo Overlay */}
                  <div className="position-absolute" style={{
                    bottom: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '50px',
                    background: `linear-gradient(135deg, ${brand.colors[0]}, ${brand.colors[1]})`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    border: '4px solid white'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{brand.logo}</span>
                  </div>
                </div>

                {/* Brand Header */}
                <div className="card-header border-0 p-4 pt-5" style={{
                  background: 'transparent'
                }}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-center w-100">
                      <h4 className="fw-bold mb-1">{brand.name}</h4>
                      <small style={{
                        opacity: hoveredBrand === brand.id ? '0.9' : '0.7'
                      }}>
                        {brand.country} • {brand.founded}
                      </small>
                    </div>
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge rounded-pill px-3 py-2" style={{
                        background: hoveredBrand === brand.id 
                          ? 'rgba(255,255,255,0.2)' 
                          : 'rgba(52, 152, 219, 0.1)',
                        color: hoveredBrand === brand.id ? 'white' : '#3498db',
                        fontSize: '0.9rem'
                      }}>
                        {brand.products} รุ่น
                      </span>
                    </div>
                  </div>
                </div>

                {/* Brand Body */}
                <div className="card-body px-4 pb-4">
                  <p className="mb-3 text-center" style={{
                    opacity: hoveredBrand === brand.id ? '0.9' : '0.7',
                    lineHeight: '1.6'
                  }}>
                    {brand.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">🎯 ความเชี่ยวชาญ</h6>
                    <div className="d-flex flex-wrap gap-1 justify-content-center">
                      {brand.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="badge rounded-pill px-2 py-1"
                          style={{
                            background: hoveredBrand === brand.id 
                              ? 'rgba(255,255,255,0.15)' 
                              : 'rgba(52, 152, 219, 0.1)',
                            color: hoveredBrand === brand.id ? 'white' : '#3498db',
                            fontSize: '0.75rem'
                          }}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Popular Models */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-2">🔥 รุ่นยอดนิยม</h6>
                    <div className="d-flex flex-wrap gap-1 justify-content-center">
                      {brand.popularModels.map((model, index) => (
                        <span 
                          key={index}
                          className="badge rounded-pill px-2 py-1"
                          style={{
                            background: hoveredBrand === brand.id 
                              ? 'rgba(255,255,255,0.15)' 
                              : 'rgba(231, 76, 60, 0.1)',
                            color: hoveredBrand === brand.id ? 'white' : '#e74c3c',
                            fontSize: '0.75rem'
                          }}
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-4 text-center">
                    <h6 className="fw-bold mb-1">💰 ช่วงราคา</h6>
                    <p className="mb-0" style={{
                      opacity: hoveredBrand === brand.id ? '0.9' : '0.7',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      {brand.priceRange}
                    </p>
                  </div>

                  {/* Action Button */}
                  <Link 
                    href={`/brands/${brand.name.toLowerCase()}`}
                    className="btn w-100 fw-bold"
                    style={{
                      background: hoveredBrand === brand.id 
                        ? 'rgba(255,255,255,0.2)'
                        : `linear-gradient(135deg, ${brand.colors[0]} 0%, ${brand.colors[1]} 100%)`,
                      color: 'white',
                      border: hoveredBrand === brand.id ? '2px solid rgba(255,255,255,0.3)' : 'none',
                      borderRadius: '15px',
                      padding: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    ดูสินค้า {brand.name} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Comparison Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-lg border-0" style={{
              background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
              borderRadius: '20px',
              color: 'white'
            }}>
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4 text-center">📊 เปรียบเทียบแบรนด์</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-hover">
                    <thead>
                      <tr>
                        <th>แบรนด์</th>
                        <th>จำนวนรุ่น</th>
                        <th>ช่วงราคา</th>
                        <th>หมวดหมู่หลัก</th>
                        <th>ก่อตั้ง</th>
                      </tr>
                    </thead>
                    <tbody>
                      {brands.map(brand => (
                        <tr key={brand.id}>
                          <td>
                            <strong>{brand.logo} {brand.name}</strong>
                          </td>
                          <td>{brand.products} รุ่น</td>
                          <td>{brand.priceRange}</td>
                          <td>
                            <span className="badge bg-primary rounded-pill">
                              {categories.find(c => c.id === brand.category)?.name}
                            </span>
                          </td>
                          <td>{brand.founded}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container-fluid py-5" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-3">🤝 พาร์ทเนอร์อย่างเป็นทางการ</h3>
          <p className="mb-4">เราเป็นตัวแทนจำหน่ายอย่างเป็นทางการของทุกแบรนด์ รับประกันของแท้ 100%</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/warranty" className="btn btn-light btn-lg px-4 py-3 rounded-pill fw-bold">
              🛡️ นโยบายรับประกัน
            </Link>
            <Link href="/authentic" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
              ✅ การตรวจสอบของแท้
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
              📞 ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}