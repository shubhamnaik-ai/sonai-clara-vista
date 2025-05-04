import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button, MotionButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-dark-gradient">
        <div className="subtle-pattern absolute inset-0 opacity-30 z-0"></div>
        
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-40">
          <Navbar />
        </div>
        
        {/* Page content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-16"
        >
          <section id="contact" className="bg-ivory py-16">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div 
                  className="flex items-center justify-center space-x-2 text-gold"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {React.createElement(Mail, { size: 24 })}
                  <span className="text-sm uppercase tracking-wider">Get In Touch</span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Contact Us
                </motion.h2>
                <motion.div 
                  className="divider mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <motion.p 
                  className="text-charcoal-light text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Have questions about Sonai Clara? Our team is here to help you find your dream home.
                </motion.p>
              </div>

              {/* Map View */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-white p-4 shadow-lg rounded-lg">
                  <h3 className="text-2xl font-playfair font-bold text-deepblue mb-4">Our Location</h3>
                  <div className="h-[400px] w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3517634810396!2d73.73627127559254!3d18.650536982301693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b4a15a0b15%3A0x9495986a56491ddc!2sRavet%2C%20Pimpri-Chinchwad%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1713142332397!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sonai Clara Location"
                      className="rounded-md"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div 
                  className="bg-white p-8 shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-playfair font-bold text-deepblue mb-6">Send us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-charcoal">
                          Full Name*
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          className="border-gray-300 focus:border-gold focus:ring-gold" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                          Phone Number*
                        </label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Your phone number" 
                          className="border-gray-300 focus:border-gold focus:ring-gold" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-charcoal">
                        Email Address*
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="border-gray-300 focus:border-gold focus:ring-gold" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm font-medium text-charcoal">
                        Interested In
                      </label>
                      <select 
                        id="interest"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                      >
                        <option value="">Select your interest</option>
                        <option value="2bhk">2 BHK Apartment</option>
                        <option value="3bhk">3 BHK Apartment</option>
                        <option value="site-visit">Site Visit</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-charcoal">
                        Your Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here" 
                        className="min-h-[120px] border-gray-300 focus:border-gold focus:ring-gold" 
                      />
                    </div>
                    
                    <MotionButton 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold-dark text-white py-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </MotionButton>
                  </form>
                </motion.div>
                
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-deepblue mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-gold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-deepblue">Site Address</h4>
                          <p className="text-charcoal-light mt-1">
                            Sr.No 76/1/1, 76/1/2, 76/1/3, 76/1/1/1/2/1/3<br />
                            Chandrabhaga Corner, Ravet, 412101
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-gold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-deepblue">Office Address</h4>
                          <p className="text-charcoal-light mt-1">
                            14, Brt Rd, Malakar Vasti, Ravet,<br />
                            Pimpri-Chinchwad, Maharashtra 412101
                          </p>
                          <a 
                            href="https://maps.google.com/?q=18.650203,73.739368" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gold hover:underline mt-2"
                          >
                            <span>Get Directions</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="text-gold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-deepblue">Phone</h4>
                          <p className="text-charcoal-light mt-1">
                            +91 12345 67890<br />
                            +91 98765 43210
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="text-gold" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-deepblue">Email</h4>
                          <p className="text-charcoal-light mt-1">
                            sales@sonairealty.com<br />
                            info@sonairealty.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-deepblue p-8 text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-6">Visit Us</h3>
                    <p className="mb-4">
                      Experience Sonai Clara firsthand by visiting our sales gallery and model apartment.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">10:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span className="font-medium">9:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                    
                    <MotionButton 
                      className="w-full bg-gold hover:bg-gold-dark text-white"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule a Visit
                    </MotionButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
        
        <Footer />
        
        {/* Back to top button with animation */}
        <motion.a 
          href="#contact" 
          className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 11 12 6 7 11" />
            <polyline points="17 18 12 13 7 18" />
          </svg>
        </motion.a>
      </div>
    </>
  );
};

export default Contact;
