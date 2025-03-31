type CTAProps = {
  id?: string;
};

export default function CTA({ id }: CTAProps) {
  return (
    <div className="text-center mt-40" id={id}>
      <h2 className="text-4xl font-bold mb-4">Start Your First Jam Now</h2>
      <p className="text-lg mb-8">Join us and start creating music together.</p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition">
        🎵 Start Jamming
      </button>
    </div>
  );
}