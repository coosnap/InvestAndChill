import { getArticleAll } from '@/api/article';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../../common/Loader';

import './style.scss';

function Detail() {
  const [businessData, setBusinessData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = new URLSearchParams(window.location.search);
  const stokeParam = query.get('stoke');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await getArticleAll();
      if (data) {
        let result = data.filter((e) => e.stockId.symbol === stokeParam);
        let business = result.filter((e) => e.type === 1);
        setBusinessData(business);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-sreen h-[calc(100vh-66px)] bg-primary flex gap-14 px-16">
      <div className="flex-1 mt-12 max-w-[620px]">
        <Accordion sx={{ border: '1px solid #198ADE', boxShadow: 'none' }}>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              width: '100%',
              height: '100px',
              textTransform: 'uppercase',
              color: '#198ADE',
              fontWeight: '600',
              textAlign: 'center',
              '& > .MuiAccordionSummary-content': {
                display: 'flex',
                justifyContent: 'center',
              },
            }}
          >
            Phân tích Cơ bản Doanh nghiệp
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: 'flex', alignItems: 'self-start', flexDirection: 'column' }}
          >
            {businessData.map((e) => (
              <div
                key={e.id}
                className="w-full flex text-sm cursor-pointer"
                variant="outlined"
                onClick={() => (setDetail(e), setOpenBusiness(true))}
              >
                <div>
                  <StickyNote2Icon color="primary" />
                  <span className="ml-2">{e.title}</span>
                </div>
                <div className="flex-1 border-b border-dotted border-black mx-1 mb-2"></div>
                <div>{e.createDate.split(' ')[0]}</div>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-[724px] mx-auto max-h-[calc(100vh-150px)] box-border overflow-y-auto border mt-12 bg-second">
        <div className="p-6">
          <div className="flex justify-center mb-4 text-2xl font-bold">{detail.title}</div>
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
