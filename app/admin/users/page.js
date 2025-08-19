'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  // 👉 ฟังก์ชันลบ user
  async function handleDelete(id) {
    if (!confirm("คุณต้องการลบ User นี้ใช่หรือไม่?")) return;

    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.error("Failed to delete user");
        return;
      }

      // ลบออกจาก state ทันที (ไม่ต้องรอ refresh)
      setItems((prev) => prev.filter((item) => item.id !== id));
      alert("ลบเรียบร้อยแล้ว ✅");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <>
      <br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Fullname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-1'>Edit</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.fullname}</td>
                      <td>{item.lastname}</td>
                      <td>
                        <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">Edit</Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-pill btn-danger"
                          type="button"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash"></i> Del
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}
