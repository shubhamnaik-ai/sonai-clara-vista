import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EnquiryForm from "@/components/EnquiryForm";
import { motion, AnimatePresence } from "framer-motion";

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("2bhk");
  const [currentLayout2BHK, setCurrentLayout2BHK] = useState(0);
  const [currentLayout3BHK, setCurrentLayout3BHK] = useState(0);
  
  // Updated floor layouts with correct areas and new images
  const layouts2BHK = [
    {
      url: "/lovable-uploads/ede45a26-8fe4-4bad-be36-794da04365c3.png",
      title: "2 BHK Layout Type A",
      area: "790 sq.ft."
    },
    {
      url: "/lovable-uploads/f8f43373-089a-4bba-ada5-e31fd2a08bdf.png",
      title: "2 BHK Layout Type B",
      area: "810 sq.ft."
    },
    {
      url: "/lovable-uploads/0e743d7c-cc6f-416f-8b5e-9c82f859168e.png",
      title: "2 BHK Layout",
      area: "810 sq.ft."
    }
  ];
  
  const layouts3BHK = [
    {
      url: "/lovable-uploads/2bed3469-7662-4636-9572-75d90004fc9e.png",
      title: "3 BHK Layout Type A",
      area: "1046 sq.ft."
    },
    {
      url: "/lovable-uploads/326c64b4-ace0-4ba2-bec0-9e6ab6073305.png",
      title: "3 BHK Layout Type B",
      area: "1064 sq.ft."
    },
    {
      url: "/lovable-uploads/ee2f2441-9f6a-4bbe-bfe3-767ec72ba495.png",
      title: "3 BHK Layout",
      area: "1064 sq.ft."
    }
  ];
  
  const nextLayout = (type) => {
    if (type === '2bhk') {
      setCurrentLayout2BHK((prev) => (prev + 1) % layouts2BHK.length);
    } else {
      setCurrentLayout3BHK((prev) => (prev + 1) % layouts3BHK.length);
    }
  };
  
  const prevLayout = (type) => {
    if (type === '2bhk') {
      setCurrentLayout2BHK((prev) => (prev - 1 + layouts2BHK.length) % layouts2BHK.length);
    } else {
      setCurrentLayout3BHK((prev) => (prev - 1 + layouts3BHK.length) % layouts3BHK.length);
    }
  };
  
  const isNewLayout = (layouts, currentIndex) => {
    // Check if current layout is one of the new 3D images
    const currentUrl = layouts[currentIndex].url;
    return currentUrl.includes('0e743d7c-cc6f-416f-8b5e-9c82f859168e') || 
           currentUrl.includes('ee2f2441-9f6a-4bbe-bfe3-767ec72ba495');
  };
  
  return (
    <motion.section 
      id="floor-plans" 
      className="section-padding bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-2 text-logo">
            {React.createElement(Layout, { size: 24 })}
            <span className="text-sm uppercase tracking-wider">Floor Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mt-4">
            Smartly Designed Spaces
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-charcoal-light text-lg">
            Our floor plans are meticulously designed to maximize space, light, and comfort, providing the perfect canvas for your lifestyle.
          </p>
        </motion.div>

        <Tabs defaultValue="2bhk" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-ivory">
              <TabsTrigger 
                value="2bhk" 
                className="text-lg px-8 py-3 data-[state=active]:bg-logo data-[state=active]:text-white"
              >
                2 BHK
              </TabsTrigger>
              <TabsTrigger 
                value="3bhk" 
                className="text-lg px-8 py-3 data-[state=active]:bg-logo data-[state=active]:text-white"
              >
                3 BHK
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="2bhk" className="mt-0">
            <div className="bg-ivory p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Floor Plan Image - Conditionally blurred */}
                <div className="flex flex-col items-center justify-center">
                  <div className="border-8 border-white shadow-lg relative w-full max-w-md mb-4">
                    <div className="aspect-w-4 aspect-h-3 w-full">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentLayout2BHK}
                          src={layouts2BHK[currentLayout2BHK].url} 
                          alt={layouts2BHK[currentLayout2BHK].title} 
                          className={`w-full h-full object-cover transition-all ${
                            isNewLayout(layouts2BHK, currentLayout2BHK) ? '' : 'blur-[3px]'
                          }`}
                          style={isNewLayout(layouts2BHK, currentLayout2BHK) ? {} : { filter: 'blur(3px)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>
                    {!isNewLayout(layouts2BHK, currentLayout2BHK) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-logo hover:bg-logo-dark text-white rounded-none px-8 py-2 font-medium">
                              View Image
                            </Button>
                          </DialogTrigger>
                          <EnquiryForm planType={layouts2BHK[currentLayout2BHK].title} />
                        </Dialog>
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between w-full max-w-md">
                    <Button 
                      variant="outline"
                      className="border-logo text-logo hover:bg-logo/10 rounded-full p-2 h-auto w-auto"
                      onClick={() => prevLayout('2bhk')}
                    >
                      <ChevronLeft size={24} />
                      <span className="sr-only">Previous Layout</span>
                    </Button>
                    
                    <p className="text-deepblue font-medium">
                      Layout {currentLayout2BHK + 1} of {layouts2BHK.length}
                    </p>
                    
                    <Button 
                      variant="outline"
                      className="border-logo text-logo hover:bg-logo/10 rounded-full p-2 h-auto w-auto"
                      onClick={() => nextLayout('2bhk')}
                    >
                      <ChevronRight size={24} />
                      <span className="sr-only">Next Layout</span>
                    </Button>
                  </div>
                </div>
                
                {/* Floor Plan Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLayout2BHK}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl font-playfair font-bold text-deepblue">
                        {layouts2BHK[currentLayout2BHK].title}
                      </h3>
                      <div className="divider"></div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-gray-200 pb-2">
                          <span className="text-charcoal font-medium">Total Area</span>
                          <span className="text-deepblue font-semibold">{layouts2BHK[currentLayout2BHK].area}</span>
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
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex space-x-4 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-logo hover:bg-logo-dark text-white rounded-none px-6">
                          Download Plan
                        </Button>
                      </DialogTrigger>
                      <EnquiryForm planType={layouts2BHK[currentLayout2BHK].title} downloadBrochure={true} />
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-logo text-logo hover:bg-logo/10 rounded-none px-6">
                          Book Site Visit
                        </Button>
                      </DialogTrigger>
                      <EnquiryForm planType={layouts2BHK[currentLayout2BHK].title} bookSiteVisit={true} />
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="3bhk" className="mt-0">
            <div className="bg-ivory p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Floor Plan Image - Conditionally blurred */}
                <div className="flex flex-col items-center justify-center">
                  <div className="border-8 border-white shadow-lg relative w-full max-w-md mb-4">
                    <div className="aspect-w-4 aspect-h-3 w-full">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentLayout3BHK}
                          src={layouts3BHK[currentLayout3BHK].url} 
                          alt={layouts3BHK[currentLayout3BHK].title} 
                          className={`w-full h-full object-cover transition-all ${
                            isNewLayout(layouts3BHK, currentLayout3BHK) ? '' : 'blur-[3px]'
                          }`}
                          style={isNewLayout(layouts3BHK, currentLayout3BHK) ? {} : { filter: 'blur(3px)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>
                    {!isNewLayout(layouts3BHK, currentLayout3BHK) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-logo hover:bg-logo-dark text-white rounded-none px-8 py-2 font-medium">
                              View Image
                            </Button>
                          </DialogTrigger>
                          <EnquiryForm planType={layouts3BHK[currentLayout3BHK].title} />
                        </Dialog>
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between w-full max-w-md">
                    <Button 
                      variant="outline"
                      className="border-logo text-logo hover:bg-logo/10 rounded-full p-2 h-auto w-auto"
                      onClick={() => prevLayout('3bhk')}
                    >
                      <ChevronLeft size={24} />
                      <span className="sr-only">Previous Layout</span>
                    </Button>
                    
                    <p className="text-deepblue font-medium">
                      Layout {currentLayout3BHK + 1} of {layouts3BHK.length}
                    </p>
                    
                    <Button 
                      variant="outline"
                      className="border-logo text-logo hover:bg-logo/10 rounded-full p-2 h-auto w-auto"
                      onClick={() => nextLayout('3bhk')}
                    >
                      <ChevronRight size={24} />
                      <span className="sr-only">Next Layout</span>
                    </Button>
                  </div>
                </div>
                
                {/* Floor Plan Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLayout3BHK}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl font-playfair font-bold text-deepblue">
                        {layouts3BHK[currentLayout3BHK].title}
                      </h3>
                      <div className="divider"></div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-gray-200 pb-2">
                          <span className="text-charcoal font-medium">Total Area</span>
                          <span className="text-deepblue font-semibold">{layouts3BHK[currentLayout3BHK].area}</span>
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
                          <span className="text-deepblue font-semibold">2</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex space-x-4 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-logo hover:bg-logo-dark text-white rounded-none px-6">
                          Download Plan
                        </Button>
                      </DialogTrigger>
                      <EnquiryForm planType={layouts3BHK[currentLayout3BHK].title} downloadBrochure={true} />
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-logo text-logo hover:bg-logo/10 rounded-none px-6">
                          Book Site Visit
                        </Button>
                      </DialogTrigger>
                      <EnquiryForm planType={layouts3BHK[currentLayout3BHK].title} bookSiteVisit={true} />
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default FloorPlans;
