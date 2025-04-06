
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileImage, Printer } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { exportToPDF, exportToJPEG } from "@/lib/pdfExport";
import { useToast } from "@/components/ui/use-toast";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface DownloadOptionsProps {
  resumeData: ResumeData;
  selectedTemplate: TemplateType;
}

const DownloadOptions = ({ resumeData, selectedTemplate }: DownloadOptionsProps) => {
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleDownloadPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      exportToPDF(resumeData, selectedTemplate);
      setIsExporting(false);
    }, 100);
  };
  
  const handleDownloadJPEG = () => {
    setIsExporting(true);
    setTimeout(() => {
      exportToJPEG(resumeData);
      setIsExporting(false);
    }, 100);
  };
  
  const handlePrint = () => {
    window.print();
    toast({
      title: "Print dialog opened",
      description: "Use your browser's print function to print your resume",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className="gap-2" 
          disabled={isExporting}
        >
          <Download className="h-4 w-4" />
          {isExporting ? "Processing..." : "Download"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleDownloadPDF} className="gap-2" disabled={isExporting}>
          <FileText className="h-4 w-4" />
          <span>PDF Format</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownloadJPEG} className="gap-2" disabled={isExporting}>
          <FileImage className="h-4 w-4" />
          <span>JPEG Format</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlePrint} className="gap-2">
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadOptions;
