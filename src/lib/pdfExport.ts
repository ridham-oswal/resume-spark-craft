
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
  
  // Create a deep clone of the element to avoid modifying the original
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Ensure proper dimensions and styling
  clonedElement.style.width = '210mm';
  clonedElement.style.minHeight = '297mm';
  clonedElement.style.height = 'auto';
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  clonedElement.style.top = '0';
  clonedElement.style.padding = '0';
  clonedElement.style.margin = '0';
  clonedElement.style.fontSize = '10pt'; // Ensure consistent font size
  clonedElement.style.boxSizing = 'border-box';
  clonedElement.style.overflow = 'visible';
  clonedElement.style.transform = 'none'; // Remove any scaling
  
  // Make sure styles are applied
  Array.from(clonedElement.querySelectorAll('*')).forEach((el) => {
    const element = el as HTMLElement;
    element.style.fontSize = element.style.fontSize || 'inherit'; 
    element.style.lineHeight = element.style.lineHeight || '1.5';
    element.style.boxSizing = 'border-box';
    
    // Ensure backgrounds and colors are preserved
    if (window.getComputedStyle(element).backgroundColor !== 'rgba(0, 0, 0, 0)') {
      element.style.backgroundColor = window.getComputedStyle(element).backgroundColor;
    }
    if (window.getComputedStyle(element).color !== '') {
      element.style.color = window.getComputedStyle(element).color;
    }
  });
  
  // Remove print buttons and other UI elements before export
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });
  
  // Append to body to ensure styles are applied
  document.body.appendChild(clonedElement);
  
  // Ensure all images and fonts are loaded before generating PDF
  setTimeout(() => {
    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 3, 
        useCORS: true,
        logging: false,
        allowTaint: true,
        letterRendering: true,
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
      }
    };
    
    html2pdf()
      .from(clonedElement)
      .set(opt)
      .save()
      .then(() => {
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
  }, 1000); // Increased delay to ensure proper rendering
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

  // Create a deep clone of the element
  const clonedElement = element.cloneNode(true) as HTMLElement;
  
  // Configure proper dimensions and styling
  clonedElement.style.width = '210mm';
  clonedElement.style.minHeight = '297mm';
  clonedElement.style.height = 'auto';
  clonedElement.style.position = 'absolute';
  clonedElement.style.left = '-9999px';
  clonedElement.style.top = '0';
  clonedElement.style.padding = '0';
  clonedElement.style.margin = '0';
  clonedElement.style.fontSize = '10pt';
  clonedElement.style.boxSizing = 'border-box';
  clonedElement.style.transform = 'none'; // Remove any scaling
  
  // Apply computed styles to ensure proper rendering
  Array.from(clonedElement.querySelectorAll('*')).forEach((el) => {
    const element = el as HTMLElement;
    element.style.fontSize = element.style.fontSize || 'inherit';
    element.style.lineHeight = element.style.lineHeight || '1.5';
    element.style.boxSizing = 'border-box';
    
    // Ensure backgrounds and colors are preserved
    if (window.getComputedStyle(element).backgroundColor !== 'rgba(0, 0, 0, 0)') {
      element.style.backgroundColor = window.getComputedStyle(element).backgroundColor;
    }
    if (window.getComputedStyle(element).color !== '') {
      element.style.color = window.getComputedStyle(element).color;
    }
  });
  
  document.body.appendChild(clonedElement);
  
  // Hide print elements
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;

  // Allow time for styles to apply
  setTimeout(() => {
    // Use html2canvas to convert the element to a canvas with better quality settings
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(clonedElement, {
        scale: 4, // Higher scale for even better quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        onclone: (doc, ele) => {
          // Ensure all styles are properly applied in the cloned document
          const clonedResume = ele as HTMLElement;
          clonedResume.style.transform = 'none'; // Remove any zoom scaling
          clonedResume.style.width = '210mm';
        }
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
  }, 1000);
};
