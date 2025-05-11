
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919730057272"; // WhatsApp number with country code (India)

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi%20Sonai%20Clara,%20I'm%20interested%20in%20your%20premium%20residences.%20Please%20provide%20more%20information.`, '_blank');
  };

  return (
    <div className="fixed right-6 bottom-24 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/bc091176-a48e-42de-9ef3-72929b909d4d.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="font-medium text-gray-800">Chat With Us</h3>
              </div>
              <button 
                onClick={toggleChat}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Have questions about Sonai Clara? Chat with our team directly on WhatsApp!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
            >
              <img 
                src="/lovable-uploads/bc091176-a48e-42de-9ef3-72929b909d4d.png" 
                alt="WhatsApp" 
                className="w-5 h-5"
              />
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <img 
            src="/lovable-uploads/bc091176-a48e-42de-9ef3-72929b909d4d.png" 
            alt="WhatsApp" 
            className="w-7 h-7"
          />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
