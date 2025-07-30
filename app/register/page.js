'use client';

import { useMemo, useState, useEffect } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    accept: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const onChange = (key) => (e) => {
    const value = key === "accept" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((s) => ({ ...s, [key]: "" }));
  };

  const passwordScore = useMemo(() => {
    const p = form.password || "";
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return Math.min(score, 4);
  }, [form.password]);

  const strengthText = ["อ่อนมาก", "อ่อน", "ปานกลาง", "ดี", "แข็งแรง"][passwordScore];
  const strengthWidth = ["5%", "25%", "50%", "75%", "100%"][passwordScore];
  const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a"];

  const validate = () => {
    const next = {};
    if (!form.username.trim()) next.username = "กรุณากรอกชื่อผู้ใช้";
    else if (form.username.trim().length < 3) next.username = "อย่างน้อย 3 ตัวอักษร";

    if (!form.email.trim()) next.email = "กรุณากรอกอีเมล";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "รูปแบบอีเมลไม่ถูกต้อง";

    if (!form.password) next.password = "กรุณากรอกรหัスผ่าน";
    else if (form.password.length < 8) next.password = "อย่างน้อย 8 ตัวอักษร";

    if (!form.confirm) next.confirm = "กรุณายืนยันรหัสผ่าน";
    else if (form.confirm !== form.password) next.confirm = "รหัสผ่านไม่ตรงกัน";

    if (!form.accept) next.accept = "กรุณายอมรับเงื่อนไขการใช้งาน";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      setIsLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
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
    maxWidth: '28rem',
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
    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
    animation: 'pulse 2s infinite'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)',
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
    color: '#a855f7',
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

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.875rem',
    color: '#9ca3af',
    marginBottom: '1.5rem'
  };

  const checkboxStyle = {
    width: '1rem',
    height: '1rem',
    marginTop: '0.125rem',
    accentColor: '#8b5cf6'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6)',
    border: 'none',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
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

  const footerStyle = {
    marginTop: '2rem',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.875rem'
  };

  const linkStyle = {
    color: '#a855f7',
    textDecoration: 'underline',
    fontWeight: '500',
    transition: 'color 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      {/* Animated background particles */}
      <div
        style={backgroundParticleStyle(
          '24rem',
          '#8b5cf6',
          `${20 + mousePosition.x * 0.1}%`,
          `${10 + mousePosition.y * 0.1}%`,
          'float 6s ease-in-out infinite'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '20rem',
          '#3b82f6',
          `${70 + mousePosition.x * 0.05}%`,
          `${80 + mousePosition.y * 0.05}%`,
          'float 8s ease-in-out infinite reverse'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '16rem',
          '#ec4899',
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
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M2,18H7.25L8.25,15H15.75L16.75,18H22L20,8H18L16.25,12H7.75L6,8H4L2,18M9,10H15L15.25,11H8.75L9,10Z" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <h1 style={titleStyle}>สมัครสมาชิก</h1>
        <p style={subtitleStyle}>สร้างบัญชีเพื่อเข้าถึงโลกแห่งรองเท้าสุดเท่</p>

        {/* Username */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={form.username}
            onChange={onChange("username")}
            placeholder="เช่น nongname123"
            autoComplete="username"
            style={inputStyle(errors.username)}
            minLength={3}
            required
          />
          <p style={errorStyle}>
            {errors.username || "อย่างน้อย 3 ตัวอักษร (a–z, 0–9, _)"}
          </p>
        </div>

        {/* Email */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>อีเมล</label>
          <input
            type="email"
            value={form.email}
            onChange={onChange("email")}
            placeholder="example@email.com"
            autoComplete="email"
            style={inputStyle(errors.email)}
            required
          />
          <p style={errorStyle}>
            {errors.email || "ใช้อีเมลที่สามารถยืนยันตัวตนได้"}
          </p>
        </div>

        {/* Password */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>รหัสผ่าน</label>
          <div style={passwordContainerStyle}>
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChange("password")}
              placeholder="อย่างน้อย 8 ตัวอักษร"
              autoComplete="new-password"
              style={{...inputStyle(errors.password), paddingRight: '3rem'}}
              minLength={8}
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
          
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>ยืนยันรหัสผ่าน</label>
          <div style={passwordContainerStyle}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={form.confirm}
              onChange={onChange("confirm")}
              placeholder="พิมพ์รหัสผ่านอีกครั้ง"
              autoComplete="new-password"
              style={{...inputStyle(errors.confirm), paddingRight: '3rem'}}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={showPasswordButtonStyle}
            >
              {showConfirmPassword ? "ซ่อน" : "แสดง"}
            </button>
          </div>
          {errors.confirm && <p style={errorStyle}>{errors.confirm}</p>}
        </div>

        {/* Accept Terms */}
        <div style={checkboxContainerStyle}>
          <input
            type="checkbox"
            checked={form.accept}
            onChange={onChange("accept")}
            style={checkboxStyle}
            required
          />
          <label style={{cursor: 'pointer'}}>
            ฉันยอมรับ{" "}
            <a href="/terms" style={linkStyle}>
              เงื่อนไขการใช้งาน
            </a>
          </label>
        </div>
        {errors.accept && <p style={errorStyle}>{errors.accept}</p>}

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          style={submitButtonStyle}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 35px rgba(139, 92, 246, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.3)';
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
            'สมัครสมาชิก'
          )}
        </button>

        {/* Success Message */}
        {submitted && (
          <div style={successMessageStyle}>
            🎉 ส่งข้อมูลเรียบร้อย! สามารถเชื่อมต่อ API ได้ตามต้องการ
          </div>
        )}

        {/* Footer */}
        <div style={footerStyle}>
          มีบัญชีอยู่แล้ว?{" "}
          <a href="/login" style={linkStyle}>
            เข้าสู่ระบบ
          </a>
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
          
          input:focus {
            border-color: rgba(168, 85, 247, 0.5) !important;
            box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.2) !important;
            transform: scale(1.02);
          }
          
          input::placeholder {
            color: rgba(156, 163, 175, 0.8);
          }
          
          button:active {
            transform: scale(0.95) !important;
          }
        `
      }} />
    </div>
  );
}