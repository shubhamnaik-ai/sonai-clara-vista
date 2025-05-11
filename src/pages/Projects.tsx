
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Project data with specifications added
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
      features: ["5-Star Amenities", "22 Storeys", "Spacious Layouts", "Modern Architecture"],
      specifications: {
        structural: [
          "Earthquake resistant RCC frame structure",
          "AAC block work for external & internal walls",
          "External sand faced cement plaster",
          "Internal gypsum finish with emulsion paint"
        ],
        flooring: [
          "Branded Vitrified designer tile for flat",
          "Wooden finish tile for Balcony"
        ],
        doorsAndWindows: [
          "Video Door Phone",
          "Both side Laminated doors",
          "Terrace Doors – Sliding doors with mosquito mesh",
          "Sliding windows with mosquito net & MS safety grills",
          "Aluminum/UPVC Windows",
          "MS railings"
        ],
        kitchen: [
          "Modular Kitchen",
          "Kitchen Platform with Quartz & Dado up to 4' Height",
          "Provision of electric & water connection for washing machine & dishwasher in dry balcony",
          "Exhaust point in Kitchen"
        ],
        bathrooms: [
          "Bathroom: Dado tiles up to lintel level",
          "CP fittings of Jaquar or equivalent",
          "Designer Cp fittings",
          "Designer Sanitary ware",
          "Geyser point in Bath",
          "Exhaust point in Bath",
          "Concealed plumbing & concealed flush valve"
        ],
        electrification: [
          "Concealed fire resistant copper wiring with circuit breaker",
          "Branded Modular switches",
          "Provision for AC point in Living & Bedroom",
          "Provision for TV in master bedrooms & living room",
          "Electric point for inverter"
        ],
        paints: [
          "Tractor Emulsion – Internal paint",
          "Tractor Emulsion – Exterior paint"
        ],
        specialFeatures: [
          "Energy saving LED lighting for common areas",
          "Elegant entrance lobby",
          "Attractive entrance gate with security cabin",
          "CCTV in common area",
          "DG backup for common area",
          "Centralised dish connection",
          "Visitor's car parking area",
          "Electrical vehicle charging points in parking area (Chargeable)"
        ]
      }
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
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      selectedProject.status === "Completed" ? "bg-green-100 text-green-800" : "bg-logo/20 text-logo"
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <p className="text-xl text-charcoal">{selectedProject.location}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold text-deepblue mb-3">About the Project</h2>
                  <p className="text-lg">{selectedProject.description}</p>
                  
                  <div className="mt-4">
                    <p className="font-medium">Estimated Completion: {selectedProject.completion}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.features.map((feature, idx) => (
                      <span key={idx} className="bg-ivory px-3 py-1 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.specifications && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-playfair font-bold text-deepblue mb-6">SPECIFICATIONS</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* STRUCTURAL */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">STRUCTURAL</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.structural.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* FLOORING */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">FLOORING</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.flooring.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* DOORS & WINDOWS */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">DOORS & WINDOWS</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.doorsAndWindows.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* KITCHEN */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">KITCHEN</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.kitchen.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* BATHROOMS */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">BATHROOMS</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.bathrooms.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* ELECTRIFICATION */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">ELECTRIFICATION</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.electrification.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* PAINTS */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">PAINTS</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.paints.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* SPECIAL FEATURES */}
                      <div className="border p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-logo">SPECIAL FEATURES</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {selectedProject.specifications.specialFeatures.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-10 flex justify-center">
                  <Button className="bg-logo hover:bg-logo-dark text-white px-8 py-6">
                    Request Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Default projects listing view
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
                        <Button 
                          onClick={() => handleViewDetails(project)} 
                          className="bg-logo hover:bg-logo-dark text-white px-6 py-2"
                        >
                          View Details
                        </Button>
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
                      
                      <Button 
                        onClick={() => handleViewDetails(project)} 
                        className="bg-logo hover:bg-logo-dark text-white px-6 py-2"
                      >
                        View Details
                      </Button>
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
