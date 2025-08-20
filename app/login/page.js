'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

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
    setForm((s) => ({ ...s, [key]: e.target.value }));
    setErrors((s) => ({ ...s, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.username.trim()) next.username = "กรุณากรอกชื่อผู้ใช้";
    if (!form.password) next.password = "กรุณากรอกรหัสผ่าน";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoginSuccess(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', form.username);
          window.dispatchEvent(new CustomEvent('loginStatusChanged', { 
            detail: { isLoggedIn: true, username: form.username } 
          }));
        }

        setTimeout(() => {
          router.push('/');
        }, 1200);

      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // 🎨 Style
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
    maxWidth: '26rem',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 80px rgba(210, 105, 30, 0.2)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #D2691E, #CD853F, #DEB887)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 3s ease infinite',
    textAlign: 'center',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: 'rgba(229, 231, 235, 0.85)',
    textAlign: 'center',
    fontSize: '1rem',
    marginBottom: '2rem'
  };

  const inputGroupStyle = { marginBottom: '1.5rem' };
  const labelStyle = { display: 'block', color: '#e5e7eb', marginBottom: '0.5rem', fontSize: '0.9rem' };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '0.9rem 1.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: hasError ? '2px solid rgba(248, 113, 113, 0.6)' : '2px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s',
  });

  const passwordContainerStyle = { position: 'relative', display: 'flex', alignItems: 'center' };
  const showPasswordButtonStyle = {
    position: 'absolute',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#D2691E',
    fontSize: '0.85rem',
    cursor: 'pointer'
  };

  const errorStyle = { color: '#fca5a5', fontSize: '0.8rem', marginTop: '0.4rem' };

  const submitButtonStyle = {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #D2691E, #CD853F)',
    border: 'none',
    borderRadius: '1rem',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    opacity: isLoading ? 0.7 : 1,
    marginTop: '1rem'
  };

  const successMessageStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderRadius: '1rem',
    textAlign: 'center',
    color: '#6ee7b7'
  };

  return (
    <div style={containerStyle}>
      {/* Floating background */}
      <div style={backgroundParticleStyle('22rem', '#D2691E', `${20 + mousePosition.x * 0.08}%`, `${15 + mousePosition.y * 0.08}%`, 'float 7s infinite')} />
      <div style={backgroundParticleStyle('18rem', '#CD853F', `${70 + mousePosition.x * 0.06}%`, `${75 + mousePosition.y * 0.06}%`, 'float 9s infinite reverse')} />

      <div style={formContainerStyle}>
        <h1 style={titleStyle}>ShoesHub</h1>
        <p style={subtitleStyle}>เข้าสู่ระบบด้วยชื่อผู้ใช้</p>

        {/* Username */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={form.username}
            onChange={onChange("username")}
            placeholder="username"
            style={inputStyle(errors.username)}
          />
          {errors.username && <p style={errorStyle}>{errors.username}</p>}
        </div>

        {/* Password */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>รหัสผ่าน</label>
          <div style={passwordContainerStyle}>
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChange("password")}
              placeholder="••••••"
              style={{...inputStyle(errors.password), paddingRight: '4rem'}}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={showPasswordButtonStyle}>
              {showPassword ? "ซ่อน" : "แสดง"}
            </button>
          </div>
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        {/* Submit */}
        <button type="button" onClick={handleSubmit} disabled={isLoading} style={submitButtonStyle}>
          {isLoading ? "⏳ กำลังเข้าสู่ระบบ..." : "👟 เข้าสู่ระบบ"}
        </button>

        {/* Success */}
        {loginSuccess && <div style={successMessageStyle}>🎉 เข้าสู่ระบบสำเร็จ!</div>}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          input::placeholder {
            color: rgba(156, 163, 175, 0.7);
          }
          body { margin:0; padding:0; }
        `
      }} />
    </div>
  );
}
