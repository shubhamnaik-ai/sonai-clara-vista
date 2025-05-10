
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projectsData = {
  current: [
    {
      id: 1,
      name: "Sonai Clara",
      location: "Ravet, Pune",
      status: "Under Construction",
      completion: "Dec 2025",
      description: "Premium 2 & 3 BHK residences with panoramic views",
      image: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
      features: ["5-Star Amenities", "22 Storeys", "Spacious Layouts", "Modern Architecture"]
    }
  ],
  past: [
    {
      id: 2,
      name: "Nilharsh Dwarka",
      location: "Pune",
      status: "Completed",
      completion: "Jan 2023",
      description: "Eco-friendly residential apartments with vertical gardens",
      image: "/lovable-uploads/4b8402de-76ee-45d4-b909-ba8ea2eaa17b.png",
      features: ["Green Architecture", "Vertical Gardens", "Sustainable Design", "Energy Efficient"]
    },
    {
      id: 3,
      name: "Essentia",
      location: "Pune",
      status: "Completed",
      completion: "Jul 2022",
      description: "Modern high-rise apartments with contemporary design",
      image: "/lovable-uploads/c77fc28f-decf-4b7d-bb86-a20f26c79cba.png",
      features: ["Sky Lounge", "Modern Facade", "Smart Home Features", "Scenic Views"]
    }
  ]
};

const ProjectDetailsDialog = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-logo hover:bg-logo-dark text-white px-6 py-2">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-white p-6">
        <DialogTitle className="text-2xl font-playfair text-deepblue mb-4">{project.name}</DialogTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-auto rounded-md"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-charcoal font-medium">{project.location}</p>
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-logo/20 text-logo"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-lg mb-4">{project.description}</p>
            <p className="font-medium mb-3">Estimated Completion: {project.completion}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button className="bg-deepblue hover:bg-deepblue/90 text-white">
                Request Brochure
              </Button>
              <Link to="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
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
        
        {/* Current Projects */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-deepblue mb-2">Current Projects</h2>
              <div className="divider"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {projectsData.current.map(project => (
                <div key={project.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-playfair font-bold text-deepblue">{project.name}</h3>
                        <span className="inline-block bg-logo/20 text-logo px-3 py-1 text-sm font-medium rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-charcoal mb-4">{project.location}</p>
                      <p className="text-lg mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <p className="font-medium">Estimated Completion: {project.completion}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="bg-ivory px-3 py-1 text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <ProjectDetailsDialog project={project} />
                        <Link to="/">
                          <Button variant="outline">Back to Home</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Projects */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-deepblue mb-2">Past Projects</h2>
              <div className="divider"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.past.map(project => (
                <div key={project.id} className="bg-white shadow hover:shadow-lg transition-shadow rounded-md overflow-hidden">
                  <div>
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-playfair font-bold text-deepblue">{project.name}</h3>
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-charcoal mb-3">{project.location}</p>
                      <p className="mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="bg-ivory px-2 py-0.5 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="bg-ivory px-2 py-0.5 text-xs rounded-full">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <ProjectDetailsDialog project={project} />
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
