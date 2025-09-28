import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Welcome 🚀
        </h1>
        <p className="text-gray-700 mb-4">
          This is a simple card styled with <span className="font-semibold">Tailwind CSS</span>.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}
