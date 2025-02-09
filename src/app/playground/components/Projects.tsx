"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
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

  useEffect(() => {
    const fetchProjects = async () => {
      console.log("Fetching projects...");

      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        console.log("Fetched data:", data);
        setProjects(data);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-white">Loading projects...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <Image
            src={project.image_url}
            alt={project.title}
            width={800}
            height={800}
            className="w-20 h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
          <p className="text-gray-400">{project.category}</p>
        </div>
      ))}
    </div>
  );
}
