import { getArticleAll } from "@/api/article";
import { Accordion, AccordionDetails, AccordionSummary, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";

function Detail() {
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openTrade, setOpenTrade] = useState(false);
  const [businessData, setBusinessData] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = new URLSearchParams(window.location.search);
  const stokeParam = query.get('stoke');

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick")
      return;
    setOpenBusiness(false);
    setOpenTrade(false);
  }

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await getArticleAll();
      if (data) {
        let result = data.filter(e => e.stockId.symbol === stokeParam);
        let business = result.filter(e => e.type === 1);
        let trade = result.filter(e => e.type === 2);
        setBusinessData(business);
        setTradeData(trade);
        setIsLoading(false);
      }
    }
    loadData();
  }, [])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-sreen h-[calc(100vh-66px)] bg-white flex justify-center items-center gap-16 px-16">
      <div className="w-1/2 text-center">
        <Accordion sx={{ border: '1px solid #198ADE', boxShadow: 'none' }}>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              width: '100%', height: '200px', textTransform: 'uppercase', color: '#198ADE', fontWeight: '600', textAlign: 'center',
              '& > .MuiAccordionSummary-content': {
                display: 'flex',
                justifyContent: 'center'
              }
            }}
          >
            Phân tích Cơ bản Doanh nghiệp
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex' }}>
            {businessData.map(e => (
              <div className="underline cursor-pointer" variant="outlined" onClick={() => (setDetail(e), setOpenBusiness(true))}>
                {e.title}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-1/2 text-center">
        <Accordion sx={{ border: '1px solid #198ADE', boxShadow: 'none' }}>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              width: '100%', height: '200px', textTransform: 'uppercase', color: '#198ADE', fontWeight: '600', textAlign: 'center',
              '& > .MuiAccordionSummary-content': {
                display: 'flex',
                justifyContent: 'center'
              }
            }}
          >
            Phân tích Kỹ thuật Giao dịch
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex' }}>
            {tradeData.map(e => (
              <div key={e.id} className="underline cursor-pointer" variant="outlined" onClick={() => (setDetail(e), setOpenBusiness(true))}>
                {e.title}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <Dialog
        open={openBusiness}
        sx={{
          '.MuiPaper-root': {
            maxWidth: 'calc(100vw - 100px)',
            maxHeight: 'calc(100vh - 100px)'
          }
        }}>
        <DialogTitle>
          <div>{detail.title}</div>
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </DialogTitle>
        <DialogActions>
          <Button sx={{ marginBottom: '8px', marginRight: '8px' }} variant="contained" onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openTrade}>
        <DialogTitle>
          <div>{detail.title}</div>
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </DialogTitle>
        <DialogActions>
          <Button sx={{ marginBottom: '8px', marginRight: '8px' }} variant="contained" onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Detail;