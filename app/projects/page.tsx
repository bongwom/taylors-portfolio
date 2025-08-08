import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src="/project-afi.PNG" alt="Project 1" width={500} height={300} className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Project One</h2>
          <p className="mt-2 text-gray-700">Short description of the project.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src="/project-greenlandcare.PNG" alt="Project 2" width={500} height={300} className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-4">Project Two</h2>
          <p className="mt-2 text-gray-700">Short description of the project.</p>
        </div>
      </div>
    </section>
  );
}