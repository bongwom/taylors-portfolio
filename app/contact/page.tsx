export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-6">
        Feel free to reach out for collaborations, job opportunities, or just to say hello!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Send Email
      </a>
    </section>
  );
}
