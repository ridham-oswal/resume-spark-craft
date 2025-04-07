
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
  
  // Clone the element to avoid modifying the visible DOM
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Reset any transform and scaling applied in preview
  clonedElement.style.transform = 'none';
  clonedElement.style.transformOrigin = 'center';
  clonedElement.style.width = '210mm';
  clonedElement.style.height = 'auto';
  clonedElement.style.maxWidth = 'none';
  clonedElement.style.margin = '0';
  clonedElement.style.padding = '0';
  
  // Add the cloned element temporarily to the document body but hide it
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  document.body.appendChild(clonedElement);
  
  // Ensure all content fits properly within the template
  const templateContainers = clonedElement.querySelectorAll('.resume-template-container');
  templateContainers.forEach(container => {
    (container as HTMLElement).style.minHeight = '297mm';
    (container as HTMLElement).style.width = '100%';
    (container as HTMLElement).style.display = 'block';
  });
  
  // Hide any UI elements within the resume that shouldn't be exported
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });
  
  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.pdf`;
  
  const opt = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 1.0 },
    html2canvas: { 
      scale: 2, 
      useCORS: true,
      logging: true,
      windowWidth: 794, // A4 width in pixels at 96 DPI
      windowHeight: 1123, // A4 height in pixels at 96 DPI
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true
    }
  };
  
  html2pdf()
    .from(clonedElement)
    .set(opt)
    .save()
    .then(() => {
      // Remove the cloned element from the DOM
      if (document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      
      toast({
        title: "Success",
        description: "Your resume has been downloaded as PDF",
      });
    })
    .catch(error => {
      console.error("PDF export error:", error);
      
      // Remove the cloned element from the DOM
      if (document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      
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
  
  // Create a clone of the element to avoid modifying the visible DOM
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Reset any transform and scaling applied in preview
  clonedElement.style.transform = 'none';
  clonedElement.style.transformOrigin = 'center';
  clonedElement.style.width = '210mm';
  clonedElement.style.height = 'auto';
  clonedElement.style.maxWidth = 'none';
  clonedElement.style.margin = '0';
  clonedElement.style.padding = '0';
  
  // Ensure fixed aspect ratio and proper layout
  clonedElement.style.aspectRatio = '1/1.414'; // A4 aspect ratio
  
  // Add the cloned element temporarily to the document body but hide it
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  document.body.appendChild(clonedElement);
  
  // Ensure all content fits properly within the template
  const templateContainers = clonedElement.querySelectorAll('.resume-template-container');
  templateContainers.forEach(container => {
    (container as HTMLElement).style.minHeight = '297mm';
    (container as HTMLElement).style.width = '100%';
    (container as HTMLElement).style.display = 'block';
  });
  
  // Hide any UI elements within the resume that shouldn't be exported
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;

  // Use html2canvas to convert the element to a canvas with improved settings
  import('html2canvas').then((html2canvas) => {
    html2canvas.default(clonedElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true, 
      backgroundColor: '#ffffff',
      windowWidth: 794, // A4 width in pixels at 96 DPI
      windowHeight: 1123, // A4 height in pixels at 96 DPI
      onclone: (doc, elem) => {
        // Additional modifications to the cloned document if needed
        const clonedResume = elem.querySelector('.resume-page');
        if (clonedResume) {
          (clonedResume as HTMLElement).style.height = '297mm';
          (clonedResume as HTMLElement).style.width = '210mm';
          (clonedResume as HTMLElement).style.overflow = 'hidden';
        }
      }
    }).then(canvas => {
      // Convert canvas to data URL with maximum quality
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // Create a download link
      const link = document.createElement('a');
      link.download = fileName;
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      if (document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      
      toast({
        title: "Success",
        description: "Your resume has been downloaded as JPEG",
      });
    }).catch(error => {
      console.error('Error exporting to JPEG:', error);
      
      // Clean up
      if (document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      
      toast({
        title: "Error",
        description: "Failed to export as JPEG. Please try again.",
        variant: "destructive",
      });
    });
  }).catch(error => {
    console.error('Error loading html2canvas:', error);
    
    // Clean up
    if (document.body.contains(clonedElement)) {
      document.body.removeChild(clonedElement);
    }
    
    toast({
      title: "Error",
      description: "Failed to load export library. Please try again.",
      variant: "destructive",
    });
  });
};
