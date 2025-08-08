import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto text-center py-16 px-6">
      <Image
        src="/me.jpg"
        alt="My Photo"
        width={150}
        height={150}
        className="rounded-full mx-auto shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6">Hi, I'm Taylor</h1>
      <p className="mt-4 text-lg text-gray-700">
        A passionate web developer specializing in React and Next.js.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">View Projects</Link>
        <Link href="/contact" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">Contact Me</Link>
      </div>
    </section>
  );
}