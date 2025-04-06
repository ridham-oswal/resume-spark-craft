
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Clock, Layout, Check, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const features = [
    {
      icon: <Layout className="h-10 w-10 text-resume-blue" />,
      title: "Professional Templates",
      description: "Choose from multiple professionally designed templates that get noticed by employers"
    },
    {
      icon: <Clock className="h-10 w-10 text-resume-blue" />,
      title: "Quick & Easy",
      description: "Create your perfect resume in minutes with our user-friendly builder"
    },
    {
      icon: <Download className="h-10 w-10 text-resume-blue" />,
      title: "Easy Download",
      description: "Download your resume as a PDF that's ready to send to employers"
    }
  ];

  const testimonials = [
    {
      quote: "ResumeSpark helped me create a professional resume that landed me my dream job. The templates are modern and the interface is so intuitive!",
      author: "Alex Johnson",
      role: "Software Engineer"
    },
    {
      quote: "I was struggling with my resume format until I found ResumeSpark. Within 15 minutes, I had a polished resume that impressed recruiters.",
      author: "Sarah Miller",
      role: "Marketing Specialist"
    },
    {
      quote: "The templates are professionally designed and the builder made customizing my experience so easy. Highly recommend!",
      author: "Michael Chen",
      role: "Product Manager"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-resume-blue to-resume-blue-light text-white py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Create a Professional Resume in Minutes</h1>
            <p className="text-xl mb-8">Stand out with a beautifully designed resume that showcases your skills and experience. Easy to use, quick to create.</p>
            <Link to="/builder">
              <Button size="lg" className="text-resume-blue bg-white hover:bg-gray-100 font-semibold text-lg px-6 py-6 h-auto flex items-center gap-2">
                Create Your Resume <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-white/20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                alt="Resume Example" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How ResumeSpark Works</h2>
            <p className="text-xl text-resume-gray max-w-3xl mx-auto">Our simple three-step process makes resume creation quick and painless</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-blue-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-resume-gray">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Templates Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Resume Templates</h2>
            <p className="text-xl text-resume-gray max-w-3xl mx-auto">Choose from our collection of professionally designed templates</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-64 bg-gradient-to-br from-resume-blue to-resume-blue-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Classic</h3>
                <p className="text-resume-gray mb-4">A traditional layout perfect for most industries</p>
                <Link to="/builder">
                  <Button variant="outline" className="w-full">Use This Template</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern</h3>
                <p className="text-resume-gray mb-4">Contemporary design for creative professionals</p>
                <Link to="/builder">
                  <Button variant="outline" className="w-full">Use This Template</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Minimal</h3>
                <p className="text-resume-gray mb-4">Clean and simple design focusing on content</p>
                <Link to="/builder">
                  <Button variant="outline" className="w-full">Use This Template</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-resume-gray max-w-3xl mx-auto">Join thousands who have improved their job search with ResumeSpark</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4 text-resume-blue">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic text-resume-gray-dark">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-resume-gray text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-resume-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Professional Resume?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of job seekers who have successfully landed interviews with resumes created using ResumeSpark</p>
          <Link to="/builder">
            <Button size="lg" className="text-resume-blue bg-white hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-6 w-6" />
                <span className="text-xl font-bold">ResumeSpark</span>
              </div>
              <p className="text-gray-400 mb-6">Building better resumes for better careers</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resume Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} ResumeSpark. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.98-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.98-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
