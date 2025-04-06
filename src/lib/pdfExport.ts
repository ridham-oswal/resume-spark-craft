
import { ResumeData, TemplateType } from './resumeData';
import html2pdf from 'html2pdf.js';
import { toast } from "@/components/ui/use-toast";

export const exportToPDF = (resumeData: ResumeData, templateType: TemplateType) => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    console.error('Resume preview element not found');
    toast({
      title: "Error",
      description: "Resume preview element not found. Please try again.",
      variant: "destructive",
    });
    return;
  }
  
  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.pdf`;
  
  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true) as HTMLElement;
  document.body.appendChild(clonedElement);
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  clonedElement.style.width = '210mm';
  
  // Remove print buttons and other UI elements before export
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });
  
  const opt = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 1.0 },
    html2canvas: { 
      scale: 2, 
      useCORS: true,
      logging: false,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().from(clonedElement).set(opt).save().then(() => {
    // Remove the cloned element
    document.body.removeChild(clonedElement);
    
    toast({
      title: "Success",
      description: "Your resume has been downloaded as PDF",
    });
  }).catch(error => {
    console.error('Error exporting to PDF:', error);
    document.body.removeChild(clonedElement);
    
    toast({
      title: "Error",
      description: "Failed to export as PDF. Please try again.",
      variant: "destructive",
    });
  });
};

export const exportToJPEG = (resumeData: ResumeData) => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    console.error('Resume preview element not found');
    toast({
      title: "Error",
      description: "Resume preview element not found. Please try again.",
      variant: "destructive",
    });
    return;
  }

  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true) as HTMLElement;
  document.body.appendChild(clonedElement);
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  clonedElement.style.width = '210mm';
  
  // Hide print elements
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;

  // Use html2canvas to convert the element to a canvas with better quality settings
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(clonedElement, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: false,
      allowTaint: true,
    }).then(canvas => {
      // Convert canvas to data URL with high quality
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // Create a download link
      const link = document.createElement('a');
      link.download = fileName;
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      document.body.removeChild(clonedElement);
      
      toast({
        title: "Success",
        description: "Your resume has been downloaded as JPEG",
      });
    }).catch(error => {
      console.error('Error during canvas creation:', error);
      document.body.removeChild(clonedElement);
      
      toast({
        title: "Error",
        description: "Failed to export as JPEG. Please try again.",
        variant: "destructive",
      });
    });
  }).catch(error => {
    console.error('Error importing html2canvas:', error);
    document.body.removeChild(clonedElement);
    
    toast({
      title: "Error",
      description: "Failed to export as JPEG. Please try again.",
      variant: "destructive",
    });
  });
};
