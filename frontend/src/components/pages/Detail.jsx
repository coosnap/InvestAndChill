import { getArticleAll } from "@/api/article";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openTrade, setOpenTrade] = useState(false);

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
      const data = await getArticleAll();
      if (data) {
        let result = data.filter(e => e.stockId.symbol === stokeParam);
        console.log('result', result)
      }
    }
    loadData();
  }, [])

  return (
    <div className="max-w-sreen h-[calc(100vh-66px)] bg-white flex justify-center items-center gap-16 px-16">
      <div className="w-1/2 text-center">
        <Button sx={{ width: '100%', height: '200px' }} variant="outlined" onClick={() => setOpenBusiness(true)}>
          Phân tích Cơ bản Doanh nghiệp
        </Button>
      </div>
      <div className="w-1/2 text-center">
        <Button sx={{ width: '100%', height: '200px' }} variant="outlined" onClick={() => setOpenTrade(true)}>
          Phân tích Kỹ thuật Giao dịch
        </Button>
      </div>
      <Dialog open={openBusiness}>
        <DialogTitle>Phân tích Cơ bản Doanh nghiệp</DialogTitle>
        <DialogActions>
          <Button variant="contained" onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openTrade}>
        <DialogTitle>Phân tích Kỹ thuật Giao dịch</DialogTitle>
        <DialogActions>
          <Button variant="contained" onClick={() => handleClose()}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Detail;