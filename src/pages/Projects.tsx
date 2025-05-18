
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Project data with modifications
const projectsData = {
  past: [
    {
      id: 2,
      name: "Nilharsh Dwarka",
      location: "Ravet",
      status: "Completed",
      completion: "",
      description: "",
      image: "/lovable-uploads/4b8402de-76ee-45d4-b909-ba8ea2eaa17b.png",
      features: []
    },
    {
      id: 3,
      name: "Essentia",
      location: "Ravet",
      status: "Completed",
      completion: "",
      description: "",
      image: "/lovable-uploads/c77fc28f-decf-4b7d-bb86-a20f26c79cba.png",
      features: []
    }
  ]
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    // Scroll to top when viewing details
    window.scrollTo(0, 0);
  };
  
  const handleBackToProjects = () => {
    setSelectedProject(null);
    // Small delay to allow state to update before scrolling
    setTimeout(() => window.scrollTo(0, 0), 100);
  };
  
  // Render project details when a project is selected
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-deepblue">
          <Navbar />
        </div>
        
        <div className="pt-24 pb-16">
          {/* Project Details View */}
          <div className="container-custom">
            <Button 
              onClick={handleBackToProjects} 
              variant="outline" 
              className="mb-6"
            >
              ← Back to Projects
            </Button>
            
            <div className="bg-white shadow-lg">
              <div className="aspect-video w-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-4xl font-playfair font-bold text-deepblue">{selectedProject.name}</h1>
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                      {selectedProject.status}
                    </span>
                  </div>
                  <p className="text-xl text-charcoal">{selectedProject.location}</p>
                </div>
                
                {selectedProject.description && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-playfair font-bold text-deepblue mb-3">About the Project</h2>
                    <p className="text-lg">{selectedProject.description}</p>
                  </div>
                )}
                
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.features.map((feature, idx) => (
                      <span key={idx} className="bg-ivory px-3 py-1 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Default projects listing view - only past projects
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-deepblue">
        <Navbar />
      </div>
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-deepblue py-16 text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our portfolio of premium residential developments designed with luxury and comfort in mind.
            </p>
          </div>
        </div>
        
        {/* Past Projects - Full width display */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-deepblue mb-2">Projects</h2>
              <div className="divider"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {projectsData.past.map(project => (
                <div key={project.id} className="bg-white shadow-lg transition-shadow">
                  <div className="w-full">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-playfair font-bold text-deepblue">{project.name}</h3>
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-sm font-medium rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-charcoal mb-4">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
