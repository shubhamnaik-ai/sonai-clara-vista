
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Search } from "lucide-react";

type FloorPlanProps = {
  plans: {
    title: string;
    image: string;
    description?: string;
  }[];
};

const FloorPlanSection = ({ plans }: FloorPlanProps) => {
  const [activeTab, setActiveTab] = useState(plans[0].title.replace(/\s+/g, '-').toLowerCase());
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenImage = (imageUrl: string) => {
    setSelectedPlan(imageUrl);
  };

  const handleCloseImage = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="my-14">
      <h2 className="text-2xl font-playfair font-bold text-deepblue mb-6 text-center">FLOOR PLANS</h2>
      
      <Tabs 
        defaultValue={plans[0].title.replace(/\s+/g, '-').toLowerCase()} 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <div className="flex justify-center mb-8">
          <TabsList className="bg-ivory">
            {plans.map((plan) => (
              <TabsTrigger
                key={plan.title}
                value={plan.title.replace(/\s+/g, '-').toLowerCase()}
                className="text-lg px-6 py-3 data-[state=active]:bg-logo data-[state=active]:text-white"
              >
                {plan.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {plans.map((plan) => (
          <TabsContent 
            key={plan.title} 
            value={plan.title.replace(/\s+/g, '-').toLowerCase()}
            className="mt-0"
          >
            <div className="bg-ivory/50 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-4xl mx-auto mb-4 group cursor-pointer overflow-hidden border-8 border-white shadow-md" onClick={() => handleOpenImage(plan.image)}>
                  <AspectRatio ratio={16/9} className="bg-gray-100">
                    <img 
                      src={plan.image} 
                      alt={`${plan.title} Floor Plan`} 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full">
                        <Search className="h-6 w-6 text-logo" />
                      </div>
                    </div>
                  </AspectRatio>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-2xl mx-auto"
                >
                  <h3 className="text-xl font-semibold text-deepblue mb-2">
                    {plan.title}
                  </h3>
                  {plan.description && (
                    <p className="text-charcoal-light mb-4">{plan.description}</p>
                  )}
                </motion.div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Fullscreen Image Dialog */}
      <Dialog open={selectedPlan !== null} onOpenChange={handleCloseImage}>
        <DialogContent className="max-w-7xl p-0 bg-transparent border-none" onInteractOutside={(e) => e.preventDefault()}>
          <div className="relative flex items-center justify-center">
            <img 
              src={selectedPlan || ''} 
              alt="Floor Plan" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <Button 
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 h-8 w-8"
              onClick={handleCloseImage}
            >
              ✕
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloorPlanSection;
