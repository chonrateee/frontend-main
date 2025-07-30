'use client';

import { useState, useEffect, useMemo } from 'react';

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Add floating animation effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const passwordScore = useMemo(() => {
    const p = password || "";
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return Math.min(score, 4);
  }, [password]);

  const strengthText = ["อ่อนมาก", "อ่อน", "ปานกลาง", "ดี", "แข็งแรง"][passwordScore];
  const strengthWidth = ["5%", "25%", "50%", "75%", "100%"][passwordScore];
  const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a"];

  const validate = () => {
    const next = {};
    if (!firstname) next.firstname = "กรุณาเลือกคำนำหน้าชื่อ";
    if (!fullname.trim()) next.fullname = "กรุณากรอกชื่อ";
    if (!lastname.trim()) next.lastname = "กรุณากรอกนามสกุล";
    if (!username.trim()) next.username = "กรุณากรอกชื่อผู้ใช้";
    else if (username.trim().length < 3) next.username = "อย่างน้อย 3 ตัวอักษร";
    if (!email.trim()) next.email = "กรุณากรอกอีเมล";
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!phone.trim()) next.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (!/^[0-9]{10}$/.test(phone.replace(/-/g, ''))) next.phone = "เบอร์โทรศัพท์ไม่ถูกต้อง";
    if (!shoeSize) next.shoeSize = "กรุณาเลือกไซส์รองเท้า";
    if (!password) next.password = "กรุณากรอกรหัสผ่าน";
    else if (password.length < 6) next.password = "อย่างน้อย 6 ตัวอักษร";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            firstname, 
            fullname, 
            lastname, 
            username, 
            password,
            email,
            phone,
            shoeSize
          }),
        });
        const result = await res.json();
        console.log(result);
        
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitted(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    }
  };

  const clearError = (field) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #654321 30%, #8B4513 70%, #1a1a1a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const backgroundParticleStyle = (size, color, left, top, animation) => ({
    position: 'absolute',
    width: size,
    height: size,
    background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
    borderRadius: '50%',
    filter: 'blur(40px)',
    left: left,
    top: top,
    animation: animation,
    pointerEvents: 'none'
  });

  const formContainerStyle = {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '32rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease'
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    position: 'relative'
  };

  const logoStyle = {
    width: '4rem',
    height: '4rem',
    background: 'linear-gradient(135deg, #D2691E, #CD853F)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(210, 105, 30, 0.5)',
    animation: 'pulse 2s infinite'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #D2691E, #CD853F, #DEB887)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: 'rgba(209, 213, 219, 0.8)',
    textAlign: 'center',
    fontSize: '0.875rem',
    marginBottom: '2rem'
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    color: '#d1d5db',
    fontWeight: '500',
    fontSize: '0.875rem',
    marginBottom: '0.5rem'
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: hasError ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: hasError ? '0 0 0 1px rgba(239, 68, 68, 0.5)' : 'none'
  });

  const selectStyle = (hasError) => ({
    ...inputStyle(hasError),
    cursor: 'pointer'
  });

  const passwordContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  const showPasswordButtonStyle = {
    position: 'absolute',
    right: '0.75rem',
    background: 'none',
    border: 'none',
    color: '#D2691E',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  };

  const strengthIndicatorStyle = {
    marginTop: '0.75rem'
  };

  const strengthBarContainerStyle = {
    width: '100%',
    height: '0.5rem',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderRadius: '0.25rem',
    overflow: 'hidden',
    marginTop: '0.5rem'
  };

  const strengthBarStyle = {
    height: '100%',
    backgroundColor: strengthColors[passwordScore],
    width: strengthWidth,
    transition: 'all 0.5s ease',
    borderRadius: '0.25rem'
  };

  const errorStyle = {
    color: '#f87171',
    fontSize: '0.75rem',
    marginTop: '0.25rem'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #D2691E, #CD853F, #D2691E)',
    border: 'none',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(210, 105, 30, 0.3)',
    opacity: isLoading ? 0.5 : 1,
    position: 'relative',
    overflow: 'hidden'
  };

  const successMessageStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    borderRadius: '1rem',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
    color: '#4ade80',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  // Shoe sizes
  const shoeSizes = [
    { value: '35', label: 'US 5 / EU 35' },
    { value: '36', label: 'US 5.5 / EU 36' },
    { value: '37', label: 'US 6 / EU 37' },
    { value: '38', label: 'US 6.5 / EU 38' },
    { value: '39', label: 'US 7 / EU 39' },
    { value: '40', label: 'US 7.5 / EU 40' },
    { value: '41', label: 'US 8 / EU 41' },
    { value: '42', label: 'US 8.5 / EU 42' },
    { value: '43', label: 'US 9 / EU 43' },
    { value: '44', label: 'US 9.5 / EU 44' },
    { value: '45', label: 'US 10 / EU 45' },
    { value: '46', label: 'US 10.5 / EU 46' },
    { value: '47', label: 'US 11 / EU 47' },
    { value: '48', label: 'US 12 / EU 48' }
  ];

  return (
    <div style={containerStyle}>
      {/* Animated background particles */}
      <div
        style={backgroundParticleStyle(
          '24rem',
          '#D2691E',
          `${20 + mousePosition.x * 0.1}%`,
          `${10 + mousePosition.y * 0.1}%`,
          'float 6s ease-in-out infinite'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '20rem',
          '#CD853F',
          `${70 + mousePosition.x * 0.05}%`,
          `${80 + mousePosition.y * 0.05}%`,
          'float 8s ease-in-out infinite reverse'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '16rem',
          '#DEB887',
          `${60 + mousePosition.x * 0.03}%`,
          `${60 + mousePosition.y * 0.03}%`,
          'float 10s ease-in-out infinite'
        )}
      />

      {/* Form container */}
      <div style={formContainerStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <div style={logoStyle}>
            <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
              <path d="M2.5 13C2.22 13 2 13.22 2 13.5V17.5C2 17.78 2.22 18 2.5 18H21.5C21.78 18 22 17.78 22 17.5V13.5C22 13.22 21.78 13 21.5 13H15L14 11H16.5C16.78 11 17 10.78 17 10.5S16.78 10 16.5 10H14.41L13.41 9H16.5C16.78 9 17 8.78 17 8.5S16.78 8 16.5 8H12.91L11.91 7H16.5C16.78 7 17 6.78 17 6.5S16.78 6 16.5 6H11.41L10.29 4.71C10.11 4.43 9.75 4.35 9.47 4.53L2.71 8.29C2.43 8.47 2.35 8.83 2.53 9.11L3.59 10.73C3.77 11.01 4.13 11.09 4.41 10.91L5 10.56V13H2.5ZM4 9.44L9.56 6.56L11.09 8.5H4.41L4 9.44ZM21 14V17H3V14H5V15.5C5 15.78 5.22 16 5.5 16S6 15.78 6 15.5V14H18V15.5C18 15.78 18.22 16 18.5 16S19 15.78 19 15.5V14H21Z"/>
              <circle cx="7" cy="15.5" r="0.5" fill="white"/>
              <circle cx="17" cy="15.5" r="0.5" fill="white"/>
              <path d="M12 11.5C12 12.33 11.33 13 10.5 13S9 12.33 9 11.5 9.67 10 10.5 10 12 10.67 12 11.5Z" fill="rgba(255,255,255,0.7)"/>
            </svg>
          </div>
        </div>

        {/* Header */}
        <h1 style={titleStyle}>ShoesHub</h1>
        <p style={subtitleStyle}>สมัครสมาชิกเพื่อช้อปรองเท้าแบรนด์ดัง</p>

        <div>
          {/* Title Prefix */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>คำนำหน้าชื่อ</label>
            <select
              name="firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                clearError('firstname');
              }}
              style={selectStyle(errors.firstname)}
              required
            >
              <option value="">เลือกคำนำหน้าชื่อ</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
            {errors.firstname && <p style={errorStyle}>{errors.firstname}</p>}
          </div>

          {/* First Name */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>ชื่อ</label>
            <input
              type="text"
              placeholder="กรอกชื่อของคุณ"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
                clearError('fullname');
              }}
              style={inputStyle(errors.fullname)}
              required
            />
            {errors.fullname && <p style={errorStyle}>{errors.fullname}</p>}
          </div>

          {/* Last Name */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>นามสกุล</label>
            <input
              type="text"
              placeholder="กรอกนามสกุลของคุณ"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                clearError('lastname');
              }}
              style={inputStyle(errors.lastname)}
              required
            />
            {errors.lastname && <p style={errorStyle}>{errors.lastname}</p>}
          </div>

          {/* Email */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>อีเมล</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError('email');
              }}
              style={inputStyle(errors.email)}
              required
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>เบอร์โทรศัพท์</label>
            <input
              type="tel"
              placeholder="0xx-xxx-xxxx"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearError('phone');
              }}
              style={inputStyle(errors.phone)}
              required
            />
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>

          {/* Shoe Size */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>ไซส์รองเท้าที่ใส่</label>
            <select
              name="shoeSize"
              value={shoeSize}
              onChange={(e) => {
                setShoeSize(e.target.value);
                clearError('shoeSize');
              }}
              style={selectStyle(errors.shoeSize)}
              required
            >
              <option value="">เลือกไซส์รองเท้า</option>
              {shoeSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>
            {errors.shoeSize && <p style={errorStyle}>{errors.shoeSize}</p>}
          </div>

          {/* Username */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>ชื่อผู้ใช้</label>
            <input
              type="text"
              placeholder="เช่น shoemaster123"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                clearError('username');
              }}
              style={inputStyle(errors.username)}
              minLength={3}
              required
            />
            <p style={errorStyle}>
              {errors.username || "อย่างน้อย 3 ตัวอักษร (a–z, 0–9, _)"}
            </p>
          </div>

          {/* Password */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>รหัสผ่าน</label>
            <div style={passwordContainerStyle}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="อย่างน้อย 6 ตัวอักษร"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearError('password');
                }}
                style={{...inputStyle(errors.password), paddingRight: '3rem'}}
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={showPasswordButtonStyle}
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>
            
            {/* Password strength indicator */}
            {password && (
              <div style={strengthIndicatorStyle}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', marginBottom: '0.5rem'}}>
                  <span style={{color: '#9ca3af'}}>ความแข็งแรง</span>
                  <span style={{
                    color: passwordScore === 0 ? '#f87171' :
                           passwordScore === 1 ? '#fb923c' :
                           passwordScore === 2 ? '#fbbf24' :
                           passwordScore === 3 ? '#4ade80' : '#22c55e',
                    fontWeight: '500'
                  }}>
                    {strengthText}
                  </span>
                </div>
                <div style={strengthBarContainerStyle}>
                  <div style={strengthBarStyle} />
                </div>
              </div>
            )}
            
            {errors.password && <p style={errorStyle}>{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
            style={submitButtonStyle}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 15px 35px rgba(210, 105, 30, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 25px rgba(210, 105, 30, 0.3)';
              }
            }}
          >
            {isLoading ? (
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                <div style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                กำลังประมวลผล...
              </div>
            ) : (
              '👟 เริ่มช้อปรองเท้า'
            )}
          </button>

          {/* Success Message */}
          {submitted && (
            <div style={successMessageStyle}>
              🎉 ยินดีต้อนรับสู่ ShoesHub! พร้อมช้อปรองเท้าแบรนด์ดังแล้ว
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          input:focus, select:focus {
            border-color: rgba(210, 105, 30, 0.5) !important;
            box-shadow: 0 0 0 2px rgba(210, 105, 30, 0.2) !important;
            transform: scale(1.02);
          }
          
          input::placeholder {
            color: rgba(156, 163, 175, 0.8);
          }
          
          select option {
            background-color: #1f2937;
            color: white;
          }
          
          button:active {
            transform: scale(0.95) !important;
          }
        `
      }} />
    </div>
  );
}