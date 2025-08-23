'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const { username, password } = formData

    if (!username || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูล',
        text: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
        confirmButtonColor: '#8B1538'
      })
      return false
    }

    if (username.length < 3) {
      Swal.fire({
        icon: 'warning',
        title: 'ชื่อผู้ใช้ไม่ถูกต้อง',
        text: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร',
        confirmButtonColor: '#8B1538'
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    Swal.fire({
      title: 'กำลังเข้าสู่ระบบ...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    try {
      // ตรวจสอบ API endpoint ก่อนใช้งานจริง
      // หรือใช้ mock data สำหรับการทดสอบ
      
      // Mock successful login for testing
      await new Promise(resolve => setTimeout(resolve, 1500)) // จำลองการรอ API
      
      // จำลองการตอบกลับที่สำเร็จ
      const result = {
        success: true,
        message: 'Login successful',
        user: { username: formData.username },
        token: 'mock-token-123'
      }
      
      // ใช้โค้ดนี้เมื่อมี API จริงแล้ว:
      // const res = await fetch('https://your-backend-url.com/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // const result = await res.json()
      
      console.log('API Response:', result)

      if (result.success) {
        Swal.close()
        await Swal.fire({
          icon: 'success',
          title: '🎉 เข้าสู่ระบบสำเร็จ',
          text: `ยินดีต้อนรับ ${formData.username}`,
          confirmButtonColor: '#8B1538',
          timer: 2000,
          showConfirmButton: false
        })
        
        // เก็บข้อมูลการเข้าสู่ระบบ (ถ้าต้องการ)
        // localStorage.setItem('token', result.token) // หรือใช้ cookies
        // localStorage.setItem('user', JSON.stringify(result.user))
        
        // ไปหน้า admin/users
        router.push('/admin/users')
      } else {
        Swal.fire({
          title: '❌ เข้าสู่ระบบไม่สำเร็จ',
          text: result.message || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          icon: 'error',
          confirmButtonColor: '#8B1538'
        })
      }
    } catch (error) {
      console.error('Network Error:', error)
      Swal.fire({
        icon: 'error',
        title: '❌ ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
        confirmButtonColor: '#8B1538'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      {/* Background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="login-card">
        <div className="card-header">
          <div className="avatar">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
          </div>
          <h1>เข้าสู่ระบบ</h1>
          <p>กรอกข้อมูลเพื่อเข้าใช้งานระบบ</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>ชื่อผู้ใช้</label>
            <div className="input-container">
              <div className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <input
                type="text"
                name="username"
                placeholder="กรอกชื่อผู้ใช้"
                value={formData.username}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>
          </div>

          <div className="form-group">
            <label>รหัสผ่าน</label>
            <div className="input-container">
              <div className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="กรอกรหัสผ่าน"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  {showPassword ? (
                    <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.09L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/>
                  ) : (
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span className="checkmark"></span>
              จดจำการเข้าสู่ระบบ
            </label>
            <Link href="/forgot-password" className="forgot-password">
              ลืมรหัสผ่าน?
            </Link>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                กำลังเข้าสู่ระบบ...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"/>
                </svg>
                เข้าสู่ระบบ
              </>
            )}
          </button>
        </form>

        <div className="divider">
          <span>หรือ</span>
        </div>

        <div className="action-buttons">
          <Link href="/register" className="action-btn secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"/>
            </svg>
            สมัครสมาชิกใหม่
          </Link>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 25%, #5C0B1E 50%, #7D2248 75%, #640D1B 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .bg-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(165, 42, 42, 0.1) 0%, rgba(139, 21, 56, 0.15) 100%);
          border-radius: 50%;
          backdrop-filter: blur(2px);
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 15%;
          left: 5%;
          animation: float 12s ease-in-out infinite;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 20%;
          right: 20%;
          animation: float 8s ease-in-out infinite;
        }

        .shape-4 {
          width: 80px;
          height: 80px;
          bottom: 30%;
          left: 15%;
          animation: float 9s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1;
          }
        }

        .login-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 248, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(139, 21, 56, 0.15);
          border-radius: 28px;
          padding: 50px 40px;
          width: 100%;
          max-width: 450px;
          box-shadow: 
            0 30px 60px rgba(139, 21, 56, 0.3),
            0 0 0 1px rgba(139, 21, 56, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 1;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .avatar {
          width: 90px;
          height: 90px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 50%, #7D2248 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 12px 30px rgba(139, 21, 56, 0.4);
        }

        .card-header h1 {
          color: #5C0B1E;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
        }

        .card-header p {
          color: #8B1538;
          font-size: 16px;
          margin: 0;
          font-weight: 500;
          opacity: 0.8;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-weight: 600;
          color: #5C0B1E;
          font-size: 15px;
        }

        .input-container {
          position: relative;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 248, 248, 0.7) 100%);
          border: 2px solid rgba(139, 21, 56, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(139, 21, 56, 0.1);
        }

        .input-container:focus-within {
          border-color: #8B1538;
          box-shadow: 0 0 25px rgba(139, 21, 56, 0.25);
          transform: translateY(-2px);
        }

        .input-icon {
          padding: 0 18px;
          color: #8B1538;
          opacity: 0.7;
        }

        .input-container input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 16px 8px 16px 0;
          color: #2D1B22;
          font-size: 16px;
          font-weight: 500;
        }

        .input-container input::placeholder {
          color: rgba(139, 21, 56, 0.5);
          font-weight: 400;
        }

        .password-toggle {
          background: none;
          border: none;
          color: #8B1538;
          padding: 16px 18px;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          border-radius: 50%;
        }

        .password-toggle:hover {
          opacity: 1;
          background: rgba(139, 21, 56, 0.1);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0;
        }

        .remember-me {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #5C0B1E;
          cursor: pointer;
          font-weight: 500;
        }

        .remember-me input[type="checkbox"] {
          display: none;
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(139, 21, 56, 0.3);
          border-radius: 4px;
          position: relative;
          transition: all 0.3s ease;
        }

        .remember-me input:checked + .checkmark {
          background: #8B1538;
          border-color: #8B1538;
        }

        .remember-me input:checked + .checkmark:after {
          content: "";
          position: absolute;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .forgot-password {
          color: #8B1538;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .forgot-password:hover {
          color: #640D1B;
          text-decoration: underline;
        }

        .submit-btn {
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 25%, #7D2248 75%, #640D1B 100%);
          border: none;
          border-radius: 16px;
          padding: 18px 24px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.4s ease;
          margin-top: 12px;
          box-shadow: 0 10px 30px rgba(139, 21, 56, 0.4);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(139, 21, 56, 0.5);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 32px 0 24px;
        }

        .divider:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(139, 21, 56, 0.2);
        }

        .divider span {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 248, 0.9) 100%);
          color: #8B1538;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 500;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
        }

        .action-btn {
          padding: 14px 24px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          border: 2px solid rgba(139, 21, 56, 0.2);
        }

        .action-btn.secondary {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 248, 248, 0.5) 100%);
          color: #8B1538;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 21, 56, 0.2);
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 40px 30px;
            margin: 20px 10px;
            border-radius: 24px;
          }

          .card-header h1 {
            font-size: 28px;
          }

          .avatar {
            width: 80px;
            height: 80px;
          }

          .form-options {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}