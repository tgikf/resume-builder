import { Button } from '@mui/material';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const generatePdf = async () => {
  //workaround to ensure SVGs in the sidebar have the correct color
  const svgChildren = document.querySelectorAll('#sideBar svg *');
  svgChildren.forEach((path) => path.setAttribute('fill', '#e3e4e4'));

  const element = document.getElementById('resumeRoot');
  if (element) {
    const group = await drawDOM(element, {
      paperSize: 'A4',
      scale: 0.75,
    });

    const pdf = await exportPDF(group, {
      author: 'Resume export by tgikf',
      creator: 'Resume export by tgikf',
      producer: 'Resume export by tgikf',
      subject: 'Resume export by tgikf',
      title: 'Resume export by tgikf',
    });
    const res = await fetch(pdf);
    const blob = await res.blob();

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const GeneratePdfButton = () => (
  //@ts-ignore
  <Button variant="outlined" startIcon={<DownloadForOfflineIcon />} onClick={generatePdf} color="onPrimary">
    Download
  </Button>
);

export default GeneratePdfButton