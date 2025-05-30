import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-logo">
            {React.createElement(Mail, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Contact Us
          </h2>
          <div className="divider mx-auto bg-logo"></div>
          <p className="text-charcoal-light text-lg">
            Have questions about Sonai Clara? Our team is here to help you find your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-deepblue mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-charcoal">
                    First Name*
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="First name" 
                    className="border-gray-300 focus:border-logo focus:ring-logo" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-charcoal">
                    Last Name*
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Last name" 
                    className="border-gray-300 focus:border-logo focus:ring-logo" 
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
                  placeholder="Email address" 
                  className="border-gray-300 focus:border-logo focus:ring-logo" 
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
                  placeholder="Phone number" 
                  className="border-gray-300 focus:border-logo focus:ring-logo" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here (optional)" 
                  className="min-h-[120px] border-gray-300 focus:border-logo focus:ring-logo" 
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full bg-[#1b727b] hover:bg-[#155a61] text-white py-6">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-deepblue mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-logo" />
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
                  <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-logo" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-deepblue">Office Address</h4>
                    <p className="text-charcoal-light mt-1">
                      14, Brt Rd, Malakar Vasti, Ravet,<br />
                      Pimpri-Chinchwad, Maharashtra 412101
                    </p>
                    <a 
                      href="https://maps.google.com/?q=18.650473,73.739411" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-logo hover:underline mt-2"
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
                  <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-logo" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-deepblue">Phone</h4>
                    <p className="text-charcoal-light mt-1">
                      +91 9730057272<br />
                      +91 9730057272
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-logo/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-logo" />
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
              
              <Button className="w-full bg-logo hover:bg-logo-dark text-white">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
