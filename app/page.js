import Carousel from "./(marketing)/components/Carousel";
import Card from "./(marketing)/components/Card";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Carousel />

      {/* ปุ่มลิงก์ไปสมัครสมาชิก */}
      <div className="flex justify-center my-8">
        <Link
          href="/register"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          สมัครสมาชิก
        </Link>
      </div>

      <Card />
    </>
  );
}
