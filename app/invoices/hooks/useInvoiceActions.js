import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const useInvoiceActions = () => {
  const invoiceRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleDownloadPDF = async () => {
    toast.dismiss();
    toast.loading("Preparing PDF...");

    const pdf = new jsPDF("portrait");

    if (!invoiceRef.current) {
      toast.dismiss();
      toast.error("Invoice reference is not available.");
      return;
    }

    try {
      await addPageContent(pdf, invoiceRef);
      pdf.save("invoice.pdf");
      toast.dismiss();
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.log("Error downloading PDF:", error.message);
      toast.error("Error downloading PDF: " + error.message);
    }
  };

  const addPageContent = async (pdf, ref) => {
    const margin = 10; // Margin for PDF
    const canvas = await html2canvas(ref.current, {
      scale: 2, // Increases the resolution
      useCORS: true, // For handling CORS issues, if any
    });

    const imgData = canvas.toDataURL("image/png");

    // Add image to PDF
    const imgWidth = 190; // Width of the image in PDF
    const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add image in chunks if it is larger than a single page
    while (heightLeft >= 0) {
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      position -= pageHeight; // Position for next page
      if (heightLeft >= 0) {
        pdf.addPage(); // Add new page if needed
      }
    }
  };

  const handleSendInvoice = () => {
    // Implement Send Invoice logic (e.g., via email)
    toast.dismiss();
    toast.success("Invoice Sent");
  };

  const handleMoreOptions = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDuplicateInvoice = () => {
    toast.dismiss();
    toast.success("Invoice Duplicated");
  };

  const handleGetShareableLink = () => {
    toast.dismiss();
    toast.success("Link Shared");
  };

 

  return {
    invoiceRef,
    dropdownOpen,
    handleDownloadPDF,
    handleSendInvoice,
    handleMoreOptions,
    handleDuplicateInvoice,
    handleGetShareableLink,
  
  };
};

export default useInvoiceActions;
