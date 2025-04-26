
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { layout } from "lucide-react";

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("2bhk");
  
  return (
    <section id="floor-plans" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 text-gold">
            {React.createElement(layout, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Floor Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Smartly Designed Spaces
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Our floor plans are meticulously designed to maximize space, light, and comfort, providing the perfect canvas for your lifestyle.
          </p>
        </div>

        <Tabs defaultValue="2bhk" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-ivory">
              <TabsTrigger 
                value="2bhk" 
                className="text-lg px-8 py-3 data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                2 BHK
              </TabsTrigger>
              <TabsTrigger 
                value="3bhk" 
                className="text-lg px-8 py-3 data-[state=active]:bg-gold data-[state=active]:text-white"
              >
                3 BHK
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="2bhk" className="mt-0">
            <div className="bg-ivory p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Floor Plan Image */}
                <div className="flex items-center justify-center">
                  <div className="border-8 border-white shadow-lg">
                    <img 
                      src="https://source.unsplash.com/random/800x600/?floor-plan" 
                      alt="2 BHK Floor Plan" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Floor Plan Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-playfair font-bold text-deepblue">2 BHK Premium</h3>
                  <div className="divider"></div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Total Area</span>
                      <span className="text-deepblue font-semibold">1250 sq.ft.</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Bedrooms</span>
                      <span className="text-deepblue font-semibold">2</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Bathrooms</span>
                      <span className="text-deepblue font-semibold">2</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Balconies</span>
                      <span className="text-deepblue font-semibold">2</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-charcoal font-medium">Starting Price</span>
                      <span className="text-gold font-semibold">₹ 85 Lakhs*</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-gold hover:bg-gold-dark text-white rounded-none px-6">
                      Download Plan
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 rounded-none px-6">
                      Book Site Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="3bhk" className="mt-0">
            <div className="bg-ivory p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Floor Plan Image */}
                <div className="flex items-center justify-center">
                  <div className="border-8 border-white shadow-lg">
                    <img 
                      src="https://source.unsplash.com/random/800x600/?apartment-plan" 
                      alt="3 BHK Floor Plan" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Floor Plan Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  <h3 className="text-3xl font-playfair font-bold text-deepblue">3 BHK Luxury</h3>
                  <div className="divider"></div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Total Area</span>
                      <span className="text-deepblue font-semibold">1750 sq.ft.</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Bedrooms</span>
                      <span className="text-deepblue font-semibold">3</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Bathrooms</span>
                      <span className="text-deepblue font-semibold">3</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-charcoal font-medium">Balconies</span>
                      <span className="text-deepblue font-semibold">3</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-charcoal font-medium">Starting Price</span>
                      <span className="text-gold font-semibold">₹ 1.25 Cr*</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-gold hover:bg-gold-dark text-white rounded-none px-6">
                      Download Plan
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 rounded-none px-6">
                      Book Site Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlans;
