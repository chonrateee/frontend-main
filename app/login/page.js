'use client';

import { useState, useEffect } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

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
    const value = key === "remember" ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((s) => ({ ...s, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    
    if (!form.email.trim()) next.email = "กรุณากรอกอีเมล";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "รูปแบบอีเมลไม่ถูกต้อง";

    if (!form.password) next.password = "กรุณากรอกรหัสผ่าน";
    else if (form.password.length < 6) next.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoginSuccess(true);
      setIsLoading(false);
    }
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
    background: `radial-gradient(circle, ${color}25 0%, transparent 70%)`,
    borderRadius: '50%',
    filter: 'blur(50px)',
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
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '2rem',
    padding: '2.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 100px rgba(210, 105, 30, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2.5rem',
    position: 'relative'
  };

  const logoStyle = {
    width: '5rem',
    height: '5rem',
    background: 'linear-gradient(135deg, #D2691E, #CD853F)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(210, 105, 30, 0.6), 0 0 60px rgba(205, 133, 63, 0.3)',
    animation: 'pulse 2s infinite, float 4s ease-in-out infinite',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #D2691E, #CD853F, #DEB887, #F4A460)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 3s ease infinite',
    textAlign: 'center',
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em'
  };

  const subtitleStyle = {
    color: 'rgba(229, 231, 235, 0.85)',
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '2.5rem',
    fontWeight: '300'
  };

  const inputGroupStyle = {
    marginBottom: '1.75rem',
    position: 'relative'
  };

  const labelStyle = {
    display: 'block',
    color: '#e5e7eb',
    fontWeight: '600',
    fontSize: '0.925rem',
    marginBottom: '0.75rem',
    letterSpacing: '0.02em'
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '1rem 1.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(15px)',
    border: hasError ? '2px solid rgba(248, 113, 113, 0.6)' : '2px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '1.25rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: hasError ? '0 0 0 3px rgba(248, 113, 113, 0.1)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
    fontWeight: '400'
  });

  const passwordContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  const showPasswordButtonStyle = {
    position: 'absolute',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#D2691E',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.5rem'
  };

  const errorStyle = {
    color: '#fca5a5',
    fontSize: '0.825rem',
    marginTop: '0.5rem',
    fontWeight: '500',
    animation: 'shake 0.5s ease-in-out'
  };

  const rememberContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    fontSize: '0.9rem'
  };

  const checkboxGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#d1d5db'
  };

  const checkboxStyle = {
    width: '1.1rem',
    height: '1.1rem',
    accentColor: '#D2691E',
    cursor: 'pointer'
  };

  const forgotLinkStyle = {
    color: '#D2691E',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    fontSize: '0.9rem'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '1rem 1.5rem',
    background: 'linear-gradient(135deg, #D2691E, #CD853F, #D2691E)',
    backgroundSize: '200% 200%',
    border: 'none',
    borderRadius: '1.25rem',
    color: 'white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(210, 105, 30, 0.4), 0 0 60px rgba(205, 133, 63, 0.2)',
    opacity: isLoading ? 0.7 : 1,
    position: 'relative',
    overflow: 'hidden',
    animation: 'gradientShift 3s ease infinite'
  };

  const successMessageStyle = {
    marginTop: '1.5rem',
    padding: '1.25rem',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '1.25rem',
    backdropFilter: 'blur(15px)',
    textAlign: 'center',
    color: '#6ee7b7',
    fontSize: '0.95rem',
    fontWeight: '600',
    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.2)'
  };

  const dividerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '2rem 0',
    color: '#9ca3af',
    fontSize: '0.875rem'
  };

  const dividerLineStyle = {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.3), transparent)'
  };

  const socialButtonsStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const socialButtonStyle = {
    flex: 1,
    padding: '0.75rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const footerStyle = {
    marginTop: '2.5rem',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '0.925rem'
  };

  const linkStyle = {
    color: '#D2691E',
    textDecoration: 'underline',
    fontWeight: '600',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      {/* Animated background particles */}
      <div
        style={backgroundParticleStyle(
          '28rem',
          '#D2691E',
          `${15 + mousePosition.x * 0.08}%`,
          `${5 + mousePosition.y * 0.08}%`,
          'float 7s ease-in-out infinite'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '24rem',
          '#CD853F',
          `${75 + mousePosition.x * 0.06}%`,
          `${85 + mousePosition.y * 0.06}%`,
          'float 9s ease-in-out infinite reverse'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '20rem',
          '#DEB887',
          `${50 + mousePosition.x * 0.04}%`,
          `${50 + mousePosition.y * 0.04}%`,
          'float 11s ease-in-out infinite'
        )}
      />
      <div
        style={backgroundParticleStyle(
          '16rem',
          '#F4A460',
          `${30 + mousePosition.x * 0.07}%`,
          `${70 + mousePosition.y * 0.07}%`,
          'float 8s ease-in-out infinite reverse'
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
        <p style={subtitleStyle}>ยินดีต้อนรับกลับสู่โลกแห่งรองเท้าสุดเท่</p>

        {/* Social Login Buttons */}
        <div style={socialButtonsStyle}>
          <button style={socialButtonStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button style={socialButtonStyle}>
            <svg width="20" height="20" fill="#1877f2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        {/* Divider */}
        <div style={dividerStyle}>
          <div style={dividerLineStyle} />
          <span style={{margin: '0 1rem'}}>หรือ</span>
          <div style={dividerLineStyle} />
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
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>รหัสผ่าน</label>
          <div style={passwordContainerStyle}>
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChange("password")}
              placeholder="รหัสผ่านของคุณ"
              autoComplete="current-password"
              style={{...inputStyle(errors.password), paddingRight: '4rem'}}
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
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        {/* Remember & Forgot */}
        <div style={rememberContainerStyle}>
          <div style={checkboxGroupStyle}>
            <input
              type="checkbox"
              checked={form.remember}
              onChange={onChange("remember")}
              style={checkboxStyle}
            />
            <label style={{cursor: 'pointer', userSelect: 'none'}}>
              จำรหัสผ่าน
            </label>
          </div>
          <a href="/forgot-password" style={forgotLinkStyle}>
            ลืมรหัสผ่าน?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          style={submitButtonStyle}
        >
          {isLoading ? (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem'}}>
              <div style={{
                width: '1.25rem',
                height: '1.25rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              กำลังเข้าสู่ระบบ...
            </div>
          ) : (
            '👟 เข้าสู่ ShoesHub'
          )}
        </button>

        {/* Success Message */}
        {loginSuccess && (
          <div style={successMessageStyle}>
            🎉 เข้าสู่ระบบสำเร็จ! พร้อมช้อปรองเท้าแล้ว
          </div>
        )}

        {/* Footer */}
        <div style={footerStyle}>
          ยังไม่มีบัญชี?{" "}
          <a href="/register" style={linkStyle}>
            สมัครสมาชิก
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(2deg); }
            66% { transform: translateY(8px) rotate(-2deg); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.05); }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          input::placeholder {
            color: rgba(156, 163, 175, 0.7);
          }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        `
      }} />
    </div>
  );
}