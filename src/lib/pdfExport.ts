
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
  
  const opt = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Remove print buttons and other UI elements before export
  const printElements = element.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });
  
  html2pdf().from(element).set(opt).save().then(() => {
    // Restore display of print elements
    printElements.forEach(el => {
      (el as HTMLElement).style.display = '';
    });
    
    toast({
      title: "Success",
      description: "Your resume has been downloaded as PDF",
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

  // Hide print elements
  const printElements = element.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;

  // Use html2canvas to convert the element to a canvas
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      // Convert canvas to data URL
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      // Create a download link
      const link = document.createElement('a');
      link.download = fileName;
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Restore print elements
      printElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
      
      toast({
        title: "Success",
        description: "Your resume has been downloaded as JPEG",
      });
    });
  }).catch(error => {
    console.error('Error exporting to JPEG:', error);
    toast({
      title: "Error",
      description: "Failed to export as JPEG. Please try again.",
      variant: "destructive",
    });
    
    // Restore print elements
    printElements.forEach(el => {
      (el as HTMLElement).style.display = '';
    });
  });
};
