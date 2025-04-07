
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
  
  // Force display and layout to be block with proper dimensions
  clonedElement.style.width = '210mm';
  clonedElement.style.minHeight = '297mm';
  clonedElement.style.height = 'auto';
  clonedElement.style.position = 'fixed';
  clonedElement.style.left = '-9999px';
  clonedElement.style.top = '0';
  clonedElement.style.padding = '0';
  clonedElement.style.margin = '0';
  clonedElement.style.fontSize = '10pt'; // Ensure consistent font size
  clonedElement.style.boxSizing = 'border-box';
  clonedElement.style.overflow = 'visible';
  clonedElement.style.transform = 'none'; // Remove any scaling
  clonedElement.style.opacity = '1';
  clonedElement.style.visibility = 'visible';
  clonedElement.style.display = 'block';
  
  // Apply styles to all child elements to ensure they are visible
  const allElements = clonedElement.querySelectorAll('*');
  allElements.forEach((el) => {
    const element = el as HTMLElement;
    element.style.fontSize = element.style.fontSize || 'inherit'; 
    element.style.lineHeight = element.style.lineHeight || '1.5';
    element.style.boxSizing = 'border-box';
    element.style.display = window.getComputedStyle(element).display;
    element.style.visibility = 'visible';
    element.style.opacity = '1';
    
    // Preserve backgrounds and colors from computed styles
    element.style.color = window.getComputedStyle(element).color;
    element.style.backgroundColor = window.getComputedStyle(element).backgroundColor;
    
    // Ensure any flex or grid layouts are preserved
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.display === 'flex' || computedStyle.display === 'grid') {
      element.style.display = computedStyle.display;
    }
  });
  
  // Remove print buttons and other UI elements before export
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });
  
  // Append to body to ensure styles are applied
  document.body.appendChild(clonedElement);
  
  // CSS fixes for proper PDF rendering
  const style = document.createElement('style');
  style.innerHTML = `
    @media print {
      body * {
        visibility: hidden;
      }
      #resume-clone, #resume-clone * {
        visibility: visible;
      }
      #resume-clone {
        position: absolute;
        left: 0;
        top: 0;
        width: 210mm !important;
        height: auto !important;
      }
    }
  `;
  clonedElement.appendChild(style);
  clonedElement.id = 'resume-clone';

  // Let the DOM update before generating PDF
  setTimeout(() => {
    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 3, 
        useCORS: true,
        logging: true,
        allowTaint: true,
        letterRendering: true,
        foreignObjectRendering: true,
        removeContainer: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        hotfixes: ["px_scaling"]
      }
    };
    
    html2pdf()
      .from(clonedElement)
      .set(opt)
      .save()
      .then(() => {
        // Remove the cloned element after successful export
        if (document.body.contains(clonedElement)) {
          document.body.removeChild(clonedElement);
        }
        
        toast({
          title: "Success",
          description: "Your resume has been downloaded as PDF",
        });
      }).catch(error => {
        console.error('Error exporting to PDF:', error);
        if (document.body.contains(clonedElement)) {
          document.body.removeChild(clonedElement);
        }
        
        toast({
          title: "Error",
          description: "Failed to export as PDF. Please try again.",
          variant: "destructive",
        });
      });
  }, 1500); // Increased delay to ensure proper rendering
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
  clonedElement.style.position = 'fixed';
  clonedElement.style.left = '-9999px';
  clonedElement.style.top = '0';
  clonedElement.style.padding = '0';
  clonedElement.style.margin = '0';
  clonedElement.style.fontSize = '10pt';
  clonedElement.style.boxSizing = 'border-box';
  clonedElement.style.transform = 'none'; // Remove any scaling
  clonedElement.style.opacity = '1';
  clonedElement.style.visibility = 'visible';
  clonedElement.style.display = 'block';
  
  // Apply styles to all child elements to ensure they are visible
  const allElements = clonedElement.querySelectorAll('*');
  allElements.forEach((el) => {
    const element = el as HTMLElement;
    element.style.fontSize = element.style.fontSize || 'inherit'; 
    element.style.lineHeight = element.style.lineHeight || '1.5';
    element.style.boxSizing = 'border-box';
    element.style.display = window.getComputedStyle(element).display;
    element.style.visibility = 'visible';
    element.style.opacity = '1';
    
    // Preserve backgrounds and colors from computed styles
    element.style.color = window.getComputedStyle(element).color;
    element.style.backgroundColor = window.getComputedStyle(element).backgroundColor;
    
    // Ensure any flex or grid layouts are preserved
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.display === 'flex' || computedStyle.display === 'grid') {
      element.style.display = computedStyle.display;
    }
  });
  
  // Hide print elements
  const printElements = clonedElement.querySelectorAll('.no-print');
  printElements.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  clonedElement.id = 'resume-clone-jpg';
  document.body.appendChild(clonedElement);

  const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.jpg`;

  // Allow time for styles to apply
  setTimeout(() => {
    // Use html2canvas to convert the element to a canvas with better quality settings
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(clonedElement, {
        scale: 4, // Higher scale for even better quality
        useCORS: true,
        logging: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: 794, // A4 width in pixels at 96 DPI
        windowHeight: 1123, // A4 height in pixels at 96 DPI
        foreignObjectRendering: true,
        onclone: (doc, ele) => {
          // Ensure all styles are properly applied in the cloned document
          const clonedResume = ele as HTMLElement;
          clonedResume.style.transform = 'none';
          clonedResume.style.width = '210mm';
          clonedResume.style.margin = '0';
          clonedResume.style.padding = '0';
          clonedResume.style.backgroundColor = 'white';
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
        if (document.body.contains(clonedElement)) {
          document.body.removeChild(clonedElement);
        }
        
        toast({
          title: "Success",
          description: "Your resume has been downloaded as JPEG",
        });
      }).catch(error => {
        console.error('Error during canvas creation:', error);
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
      console.error('Error importing html2canvas:', error);
      if (document.body.contains(clonedElement)) {
        document.body.removeChild(clonedElement);
      }
      
      toast({
        title: "Error",
        description: "Failed to export as JPEG. Please try again.",
        variant: "destructive",
      });
    });
  }, 1500); // Increased delay to ensure proper rendering
};
