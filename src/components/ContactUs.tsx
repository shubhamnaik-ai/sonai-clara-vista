
import React from "react";
import { mail, phone, mapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            {React.createElement(mail, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Contact Us
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Have questions about Sonai Clara? Our team is here to help you find your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg">
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
              
              <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-deepblue mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    {React.createElement(mapPin, { className: "text-gold" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-deepblue">Sales Office</h4>
                    <p className="text-charcoal-light mt-1">
                      Sonai Clara, Ravet, Pune,<br />
                      Maharashtra 412101, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    {React.createElement(phone, { className: "text-gold" })}
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
                    {React.createElement(mail, { className: "text-gold" })}
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
              
              <Button className="w-full bg-gold hover:bg-gold-dark text-white">
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
