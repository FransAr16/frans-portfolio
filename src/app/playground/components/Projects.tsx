"use client";

import { useEffect, useState } from "react";
import { CldImage } from 'next-cloudinary';
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  category: string;
  image_url: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch projects");
        }

        setProjects(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-black">Loading projects...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          {/* <Image
            src={project.image_url}
            alt={project.title}
            width={800}
            height={800}
            className="w-full h-48 object-cover rounded-lg"
          /> */}
          <CldImage
            src="https://res.cloudinary.com/dzv6ccnjm/image/upload/v1739130648/project_11_yzh4ov.png"
            width={1920}
            height={1080}
            alt="image-work"
            crop={{
              type: "auto",
              source: true,
            }}
          />
          <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
          <p className="text-gray-400">{project.category}</p>
        </div>
      ))}
    </div>
  );
}
