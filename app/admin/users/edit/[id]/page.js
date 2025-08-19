'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    email: '',
    phone: '',
    shoeSize: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ!',
          text: 'คุณได้สมัครสมาชิกกับ ShoesHub เรียบร้อยแล้ว',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถสมัครสมาชิกได้',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดในการเชื่อมต่อ',
        text: 'กรุณาลองใหม่อีกครั้ง',
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="card glass-effect">
        <div className="card-header text-center">
          <h2 className="title">ShoesHub</h2>
          <p className="subtitle">สมัครสมาชิกเพื่อซื้อรองเท้าแบรนด์ดัง</p>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          {/* คำนำหน้า */}
          <div className="form-group">
            <label>คำนำหน้าชื่อ</label>
            <select
              name="firstname"
              className="form-control"
              value={formData.firstname}
              onChange={handleChange}
            >
              <option value="">เลือกคำนำหน้าชื่อ</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          {/* ชื่อ */}
          <div className="form-group">
            <label>ชื่อ</label>
            <input
              type="text"
              name="fullname"
              placeholder="กรอกชื่อของคุณ"
              value={formData.fullname}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* นามสกุล */}
          <div className="form-group">
            <label>นามสกุล</label>
            <input
              type="text"
              name="lastname"
              placeholder="กรอกนามสกุลของคุณ"
              value={formData.lastname}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* อีเมล */}
          <div className="form-group">
            <label>อีเมล</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div className="form-group">
            <label>เบอร์โทรศัพท์</label>
            <input
              type="tel"
              name="phone"
              placeholder="0xx-xxx-xxxx"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* ไซส์รองเท้า */}
          <div className="form-group">
            <label>ไซส์รองเท้าที่ใส่</label>
            <select
              name="shoeSize"
              className="form-control"
              value={formData.shoeSize}
              onChange={handleChange}
            >
             <option value="">เลือกไซส์รองเท้า</option>
    <option value="35">US 5 / EU 35</option>
    <option value="36">US 5.5 / EU 36</option>
    <option value="37">US 6 / EU 37</option>
    <option value="38">US 6.5 / EU 38</option>
    <option value="39">US 7 / EU 39</option>
    <option value="40">US 7.5 / EU 40</option>
    <option value="41">US 8 / EU 41</option>
    <option value="42">US 8.5 / EU 42</option>
    <option value="43">US 9 / EU 43</option>
    <option value="44">US 9.5 / EU 44</option>
    <option value="45">US 10 / EU 45</option>
    <option value="46">US 10.5 / EU 46</option>
    <option value="47">US 11 / EU 47</option>
    <option value="48">US 12 / EU 48</option>
            </select>
          </div>

          {/* ชื่อผู้ใช้ */}
          <div className="form-group">
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              name="username"
              placeholder="เช่น shoemaster123"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
            />
            <small className="hint">อย่างน้อย 3 ตัวอักษร (a-z, 0-9, _)</small>
          </div>

          {/* รหัสผ่าน */}
          <div className="form-group">
            <label>รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* ปุ่มบันทึก */}
          <div className="button-container">
            <button type="submit" className="btn-submit">สมัครสมาชิก</button>
          </div>
        </form>
      </div>

      {/* CSS inline */}
      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #a770ef, #cf8bf3, #fdb99b);
          font-family: 'Prompt', sans-serif;
        }
        .glass-effect {
          width: 420px;
          padding: 2rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          color: #fff;
        }
        .title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
        }
        .subtitle {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
        }
        .form-control {
          width: 100%;
          padding: 0.7rem;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        .form-control:focus, .form-control:active {
  background: rgba(255, 255, 255, 0.9);
  color: #000;
}

        .hint {
          font-size: 0.8rem;
          opacity: 0.7;
        }
        .btn-submit {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(135deg, #ff9966, #ff5e62);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-submit:hover {
          background: linear-gradient(135deg, #ff5e62, #ff9966);
        }
      `}</style>
    </div>
  );
}
