import { getArticleAll } from '@/api/article';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../../common/Loader';

import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
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
      try {
        const data = await getArticleAll();
        if (data) {
          let result = data.filter((e) => e.stockId.symbol === stokeParam);
          let business = result.filter((e) => e.type === 1);
          setBusinessData(business);
          setIsLoading(false);
        } else {
          setBusinessData([]);
          setIsLoading(false);
        }
      } catch (error) {
        setBusinessData([]);
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
      <div className="mt-12 w-1/3 max-h-[calc(100vh-150px)] overflow-y-auto">
        <Accordion expanded={'1'} sx={{ border: '1px solid #198ADE', boxShadow: 'none' }}>
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
            <SimpleTreeView>
              <TreeItem itemId="Overview" label="A. Overview">
                <TreeItem itemId="BizModel1" label="1. Biz Model">
                  <TreeItem itemId="BizModela" label="a. Biz Model"></TreeItem>
                  <TreeItem itemId="MarketSize" label="b. Market Size n Position"></TreeItem>
                </TreeItem>
                <TreeItem itemId="IndustryView" label="2. Industry View">
                  <TreeItem itemId="Characteristic" label="a. Đặc tính"></TreeItem>
                  <TreeItem itemId="LevelOfCompetition" label="b. Mức độ cạnh tranh"></TreeItem>
                  <TreeItem itemId="WiningModel" label="c. Wining Model"></TreeItem>
                </TreeItem>
                <TreeItem itemId="CompetitiveAnalysis" label="3. Competitive Analysis">
                  <TreeItem itemId="ProvenAnalysis" label="a. Phân tích - Chứng minh"></TreeItem>
                  <TreeItem itemId="CompanyAdventure" label="b. Company Adventure"></TreeItem>
                  <TreeItem itemId="ViewFact" label="c. View Fact"></TreeItem>
                </TreeItem>
                <TreeItem itemId="ExpandScale" label="4. Expand Scale">
                  <TreeItem itemId="Knowhow" label="a. Tập trung lợi thế/knowhow sẵn có"></TreeItem>
                  <TreeItem itemId="Expand" label="b. Mở rộng chuỗi giá trị"></TreeItem>
                </TreeItem>
                <TreeItem itemId="GovernanceAnalysis" label="5. Governance Analysis"></TreeItem>
                <TreeItem itemId="EvaluateProspects" label="6. Đánh giá triển vọng"></TreeItem>
                <TreeItem itemId="Risk" label="7. Rủi ro"></TreeItem>
              </TreeItem>
              <TreeItem itemId="Business" label="B. Cập nhật Đánh giá DN"></TreeItem>
              <TreeItem itemId="Branch" label="C. Cập nhật Đánh giá Ngành"></TreeItem>
            </SimpleTreeView>
            {/* {businessData.map((e) => (
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
            ))} */}
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
