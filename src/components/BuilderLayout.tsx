
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

interface BuilderLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const BuilderLayout = ({ children, footer }: BuilderLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </div>
        
        {children}
      </div>
      
      {footer || (
        <footer className="bg-white border-t py-8 no-print">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="text-lg font-semibold text-resume-blue">ResumeSpark</span>
                <span className="text-sm text-resume-gray">© {new Date().getFullYear()}</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Privacy</a>
                <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Terms</a>
                <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Help</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default BuilderLayout;
