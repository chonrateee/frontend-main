export default function Home() {
  return (
    <>
      <main style={{
        display: 'flex', // ใช้ Flexbox
        justifyContent: 'center', // จัดแนวเนื้อหากลางแนวนอน
        alignItems: 'center', // จัดแนวเนื้อหากลางแนวตั้ง
        height: '100vh', // ให้ main ครอบคลุมความสูงของหน้าจอ
        fontFamily: 'Arial, sans-serif', // เปลี่ยนฟอนต์
        textAlign: 'center', // จัดข้อความให้กลาง
        padding: '0 20px', // ให้มีระยะห่างขอบข้างเล็กน้อย
      }}>
        <h1 style={{
          fontSize: '4rem', // ปรับขนาดตัวอักษรให้ใหญ่
          fontWeight: 'bold', // ให้ตัวหนา
          color: '#333', // เปลี่ยนสีตัวอักษร
          letterSpacing: '1px', // เพิ่มระยะห่างระหว่างตัวอักษร
        }}>
          ยินดีต้อนรับ
        </h1>
      </main>
    </>
  );
}
