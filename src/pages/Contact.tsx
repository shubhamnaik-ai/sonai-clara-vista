
import React, { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Wrapped Button component for motion
const MotionButton = motion(Button);

const Contact = () => {
  const { toast } = useToast();
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including your message.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    // Updated iframe implementation for map with updated coordinates
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.681175640716!2d73.73941123493767!3d18.650473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzAxLjciTiA3M8KwNDQnMjEuOSJF!5e0!3m2!1sen!2sus!4v1715067134562!5m2!1sen!2sus";
    iframe.setAttribute('allowFullScreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerPolicy', 'no-referrer-when-downgrade');

    mapRef.current.innerHTML = '';
    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-playfair font-bold text-deepblue mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              We're here to help with any questions about our properties. Reach out and we'll respond as soon as we can.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div 
              className="bg-ivory p-8 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-playfair font-semibold text-deepblue mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">
                      First Name*
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">
                      Last Name*
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                    Your Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="pt-4">
                  <MotionButton
                    type="submit"
                    className="bg-[#1b727b] hover:bg-[#155a61] text-white w-full py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </MotionButton>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information and Map */}
            <motion.div 
              className="bg-white p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-playfair font-semibold text-deepblue mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-deepblue">Our Location</h4>
                    <p className="text-charcoal-light mt-1">Ravet, Pimpri-Chinchwad, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-deepblue">Phone</h4>
                    <p className="text-charcoal-light mt-1">+91 9730057272</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-deepblue">Email</h4>
                    <p className="text-charcoal-light mt-1">info@sonairealty.com</p>
                    <p className="text-charcoal-light">sales@sonairealty.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-deepblue">Working Hours</h4>
                    <p className="text-charcoal-light mt-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-charcoal-light">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Map Section - Inside Contact Information */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-deepblue mb-3">Find Us</h4>
                <div className="relative h-[300px] rounded-lg overflow-hidden" ref={mapRef}>
                  {/* Map will be loaded here */}
                </div>
                <div className="mt-2">
                  <a 
                    href="https://maps.google.com/?q=18.650473,73.739411" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-ivory hover:bg-gold transition-colors p-2 rounded text-charcoal hover:text-white"
                  >
                    <span>Get Directions</span>
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
