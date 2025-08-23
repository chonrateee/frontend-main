'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function UserRegister() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    sex: ''
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
    const { firstname, fullname, lastname, username, password } = formData

    if (!firstname || !fullname || !lastname || !username || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูล',
        text: 'กรุณากรอกข้อมูลในช่องที่จำเป็นให้ครบถ้วน',
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

    if (password.length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'รหัสผ่านไม่ถูกต้อง',
        text: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร',
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
      title: 'กำลังบันทึกข้อมูล...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json()
      console.log('API Response:', result)

      if (res.ok) {
        Swal.close()
        await Swal.fire({
          icon: 'success',
          title: '✅ บันทึกข้อมูลเรียบร้อยแล้ว',
          text: `สร้างผู้ใช้ ${formData.username} สำเร็จ`,
          confirmButtonColor: '#8B1538',
          timer: 2000,
          showConfirmButton: false
        })
        
        // รีเซ็ตฟอร์ม
        setFormData({
          firstname: '',
          fullname: '',
          lastname: '',
          username: '',
          password: '',
          sex: ''
        })
        
        // กลับไปหน้ารายการผู้ใช้
        router.push('/admin/users')
      } else {
        Swal.fire({
          title: '❌ เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถบันทึกข้อมูลได้',
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
    <div className="register-container">
      {/* Background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="register-card">
        <div className="card-header">
          <div className="avatar">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"/>
            </svg>
          </div>
          <h1>เพิ่มผู้ใช้ใหม่</h1>
          <p>กรอกข้อมูลผู้ใช้ในระบบ</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="form-group">
              <label>คำนำหน้าชื่อ *</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
                <select 
                  name="firstname" 
                  value={formData.firstname}
                  onChange={handleChange} 
                  required
                >
                  <option value="">เลือกคำนำหน้า</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>เพศ</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z"/>
                  </svg>
                </div>
                <select 
                  name="sex" 
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <option value="">เลือกเพศ</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>ชื่อ *</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullname"
                  placeholder="กรอกชื่อ"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>นามสกุล *</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="กรอกนามสกุล"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>ชื่อผู้ใช้ *</label>
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
                />
              </div>
            </div>

            <div className="form-group">
              <label>รหัสผ่าน *</label>
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
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                กำลังบันทึก...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"/>
                </svg>
                บันทึกข้อมูล
              </>
            )}
          </button>
        </form>

        <div className="action-buttons">
          <Link href="/admin/users" className="action-btn secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
            </svg>
            กลับรายการผู้ใช้
          </Link>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 25%, #5C0B1E 50%, #7D2248 75%, #640D1B 100%);
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
          background: linear-gradient(135deg, rgba(165, 42, 42, 0.08) 0%, rgba(139, 21, 56, 0.12) 100%);
          border-radius: 50%;
          backdrop-filter: blur(2px);
        }

        .shape-1 {
          width: 180px;
          height: 180px;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 70%;
          right: 20%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 90px;
          height: 90px;
          top: 30%;
          right: 15%;
          animation: float 7s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.9;
          }
        }

        .register-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 248, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(139, 21, 56, 0.15);
          border-radius: 24px;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 
            0 25px 50px rgba(139, 21, 56, 0.25),
            0 0 0 1px rgba(139, 21, 56, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 1;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .avatar {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 50%, #7D2248 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 25px rgba(139, 21, 56, 0.3);
        }

        .card-header h1 {
          color: #5C0B1E;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .card-header p {
          color: #8B1538;
          font-size: 16px;
          margin: 0;
          font-weight: 500;
          opacity: 0.8;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #5C0B1E;
          font-size: 14px;
        }

        .input-container {
          position: relative;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 248, 248, 0.7) 100%);
          border: 2px solid rgba(139, 21, 56, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(139, 21, 56, 0.08);
        }

        .input-container:focus-within {
          border-color: #8B1538;
          box-shadow: 0 0 20px rgba(139, 21, 56, 0.2);
        }

        .input-icon {
          padding: 0 15px;
          color: #8B1538;
          opacity: 0.7;
        }

        .input-container input,
        .input-container select {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 14px 8px 14px 0;
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
          padding: 14px;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          border-radius: 50%;
        }

        .password-toggle:hover {
          opacity: 1;
          background: rgba(139, 21, 56, 0.1);
        }

        .submit-btn {
          background: linear-gradient(135deg, #8B1538 0%, #A0153E 25%, #7D2248 75%, #640D1B 100%);
          border: none;
          border-radius: 14px;
          padding: 16px 24px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.4s ease;
          margin-top: 20px;
          box-shadow: 0 8px 25px rgba(139, 21, 56, 0.4);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(139, 21, 56, 0.5);
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

        .action-buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        .action-btn {
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          border: 2px solid rgba(139, 21, 56, 0.2);
        }

        .action-btn.secondary {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(248, 248, 248, 0.5) 100%);
          color: #8B1538;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 21, 56, 0.15);
        }

        @media (max-width: 768px) {
          .register-card {
            padding: 30px 20px;
            margin: 10px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .card-header h1 {
            font-size: 24px;
          }

          .avatar {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
    </div>
  )
}