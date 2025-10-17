import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">EduNext – Érettségi Felkészítő Platform</h1>
      <p className="mb-6 text-gray-700">
        Készülj fel az érettségire lépésről lépésre! Fedezd fel a tantárgyakat és gyakorolj.
      </p>
      <Link
        href="/courses"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Fedezd fel a tantárgyakat
      </Link>
    </main>
  );
}
