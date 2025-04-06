
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, LogIn } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-resume-blue" />
            <span className="text-xl font-bold text-resume-blue">ResumeSpark</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-resume-gray hover:text-resume-blue transition-colors">
            Home
          </Link>
          <Link to="/templates" className="font-medium text-resume-gray hover:text-resume-blue transition-colors">
            Templates
          </Link>
          <Link to="/pricing" className="font-medium text-resume-gray hover:text-resume-blue transition-colors">
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/builder">
            <Button>
              Create Resume
            </Button>
          </Link>
          <Link to="/login" className="hidden md:inline-flex">
            <Button variant="outline" className="gap-2">
              <LogIn className="h-4 w-4" />
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
