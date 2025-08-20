'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function User() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // ✅ เช็ค token
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // ✅ ดึงข้อมูล Users
    async function getUsers() {
      try {
        const res = await fetch('https://backend-nextjs-virid.vercel.app/api', {
          headers: {
            Authorization: `Bearer ${token}`, // เผื่อ API ต้องใช้ JWT
          },
        });
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000); // auto refresh
    return () => clearInterval(interval);
  }, [router]);

  // ✅ ลบ User
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    if (!confirm('คุณแน่ใจหรือไม่ว่าจะลบผู้ใช้นี้?')) return;

    try {
      const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`, // เผื่อ API ต้องการ Auth
        },
      });
      if (!res.ok) throw new Error('Failed to delete user');
      const result = await res.json();
      console.log('Deleted:', result);
      setItems((prev) => prev.filter((user) => user.id !== id)); // ลบออกจาก state เลย
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // ✅ แสดง Loading
  if (loading) {
    return <div className="text-center mt-5"><h1>Loading...</h1></div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header fw-bold">Users List</div>
        <div className="card-body">
          {items.length === 0 ? (
            <p className="text-center">ไม่มีข้อมูลผู้ใช้</p>
          ) : (
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Fullname</th>
                  <th>Lastname</th>
                  <th>Username</th>
                  <th>Address</th>
                  <th>Sex</th>
                  <th>Birthday</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.fullname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                    <td>{item.address}</td>
                    <td>{item.sex}</td>
                    <td>{item.birthday}</td>
                    <td>
                      <Link
                        href={`/admin/users/edit/${item.id}`}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
