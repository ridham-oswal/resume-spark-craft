
import { ResumeData, TemplateType } from './resumeData';
import html2pdf from 'html2pdf.js';

export const exportToPDF = (resumeData: ResumeData, templateType: TemplateType) => {
  const element = document.getElementById('resume-preview');
  
  if (!element) {
    console.error('Resume preview element not found');
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
  });
};
