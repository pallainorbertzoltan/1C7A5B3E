import Link from "next/link";

const subjects = [
  { name: "Magyar nyelv és irodalom", slug: "magyar" },
  { name: "Matematika", slug: "matematika" },
  { name: "Történelem", slug: "tortenelem" },
  { name: "Angol nyelv", slug: "angol" },
  { name: "Digitális kultúra", slug: "digitalis-kultura" },
];

export default function CoursesPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tantárgyak</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((s) => (
          <div
            key={s.slug}
            className="border rounded-lg p-4 text-center shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{s.name}</h2>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              Bővebben
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
