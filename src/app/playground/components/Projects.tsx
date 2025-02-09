"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Project = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  video_url: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error("Error fetching projects:", error);
      else setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
          <p className="text-gray-400">{project.category}</p>
          {project.video_url && (
            <a
              href={project.video_url}
              target="_blank"
              className="text-blue-400 mt-2 block"
            >
              Watch Video
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
