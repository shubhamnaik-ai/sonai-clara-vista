
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      name: "Sonai Vista",
      location: "Hinjewadi, Pune",
      status: "Completed",
      completion: "Jan 2023",
      description: "Luxury 1 & 2 BHK apartments with garden views",
      image: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
      features: ["Swimming Pool", "Gymnasium", "Kids Play Area", "Club House"]
    },
    {
      id: 3,
      name: "Sonai Heights",
      location: "Wakad, Pune",
      status: "Completed",
      completion: "Jul 2021",
      description: "Exclusive 3 & 4 BHK penthouses in prime location",
      image: "/lovable-uploads/704fe54f-500c-4e0d-8092-fbaf95de6743.png",
      features: ["Rooftop Infinity Pool", "Private Terraces", "Smart Home", "Tennis Court"]
    }
  ]
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      
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
        <section className="section-padding">
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
                        <span className="inline-block bg-gold/20 text-gold px-3 py-1 text-sm font-medium">
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
                          <span key={idx} className="bg-ivory px-3 py-1 text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="bg-gold hover:bg-gold-dark text-white px-6 py-2">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Projects */}
        <section className="section-padding bg-ivory-light">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-deepblue mb-2">Past Projects</h2>
              <div className="divider"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.past.map(project => (
                <div key={project.id} className="bg-white shadow hover:shadow-lg transition-shadow">
                  <div>
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-playfair font-bold text-deepblue">{project.name}</h3>
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-charcoal mb-3">{project.location}</p>
                      <p className="mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="bg-ivory px-2 py-0.5 text-xs">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="bg-ivory px-2 py-0.5 text-xs">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <button className="text-gold hover:underline font-medium">
                        View Details
                      </button>
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
