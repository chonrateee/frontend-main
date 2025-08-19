'use client';
import { useState } from "react";

export default function VansStore() {
  const vansShoes = [
    { 
      id: 1, 
      title: "Vans Old Skool", 
      price: 2600, 
     img: "/images/brands/vans/V1.jpg",
      rating: 4.7, 
      reviews: 2847,
      details: [
        "วัสดุ: ผ้าใบ Canvas และหนังกลับ suede",
        "พื้นรองเท้า: ยาง waffle sole grip ดีเยี่ยม",
        "น้ำหนัก: 340 กรัม",
        "เหมาะสำหรับ: skateboarding และ street style",
        "สีที่มีจำหน่าย: ดำ-ขาว, กรมท่า, แดง-ขาว, ขาว",
        "จุดเด่น: ดีไซน์ iconic side stripe ทนทาน สไตล์ skate แท้"
      ]
    },
    { 
      id: 2, 
      title: "Vans Slip-On Checkerboard", 
      price: 2300, 
     img: "/images/brands/vans/V2.jpg",
      rating: 4.5, 
      reviews: 1924,
      details: [
        "วัสดุ: ผ้าใบ Canvas ลายหมากรุกคลาสสิค",
        "พื้นรองเท้า: ยาง waffle sole แบบดั้งเดิม",
        "น้ำหนัก: 310 กรัม",
        "เหมาะสำหรับ: ใส่ประจำวัน casual ง่ายสะดวก",
        "สีที่มีจำหน่าย: ดำ-ขาว, น้ำเงิน-ขาว, แดง-ขาว",
        "จุดเด่น: ไม่มีเชือก ใส่ถอดง่าย ลายหมากรุกไม่เบื่อ"
      ]
    }
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header with Vans Branding */}
      <div className="bg-black text-white py-8 px-6" style={{background: 'linear-gradient(135deg, #000 0%, #333 100%)'}}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl">🛹</div>
            <h1 className="text-4xl font-bold tracking-tight">VANS</h1>
          </div>
          <p className="text-gray-300 text-lg">Off The Wall</p>
          <div className="mt-4 flex justify-center gap-6 text-sm flex-wrap">
            <span className="bg-white/10 px-3 py-1 rounded-full">✓ Free shipping สำหรับสมาชิก</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">✓ Skate culture แท้</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vansShoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 h-64 flex items-center justify-center">
                <img 
                  src={shoe.img} 
                  alt={shoe.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-20 h-20 bg-yellow-200 rounded-lg items-center justify-center hidden">
                  <span className="text-3xl">🛹</span>
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(shoe.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-50 transition-colors"
                >
                  <span className={`text-xl ${favorites.includes(shoe.id) ? 'text-red-500' : 'text-gray-400'}`}>
                    {favorites.includes(shoe.id) ? '❤️' : '🤍'}
                  </span>
                </button>
                
                {/* Featured Badge */}
                {shoe.id === 2 && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 group-hover:text-yellow-600 transition-colors">
                  {shoe.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {'★'.repeat(Math.floor(shoe.rating))}
                    {'☆'.repeat(5 - Math.floor(shoe.rating))}
                  </div>
                  <span className="text-gray-600">
                    {shoe.rating} ({shoe.reviews?.toLocaleString()} รีวิว)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold text-gray-900">
                      {shoe.price.toLocaleString()} ฿
                    </p>
                    {shoe.id === 1 && (
                      <p className="text-lg text-gray-500 line-through">2,900 ฿</p>
                    )}
                  </div>
                  {shoe.id === 1 && (
                    <p className="text-green-600 text-sm font-medium mt-1">ประหยัด 300 ฿</p>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  {shoe.details.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold text-lg">
                  ดูรายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}