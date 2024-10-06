import { searchArticle } from '@/api/article';
import { Accordion, AccordionDetails, AccordionSummary, alpha, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../../common/Loader';

import { SimpleTreeView, TreeItem, treeItemClasses } from '@mui/x-tree-view';
import './style.scss';

function Detail() {
  const [businessDataFirst, setBusinessDataFirst] = useState([]);
  const [businessDataSecond, setBusinessDataSecond] = useState([]);
  const [businessDataThirs, setBusinessDataThirs] = useState([]);
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = new URLSearchParams(window.location.search);
  const stokeParam = query.get('stoke');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await searchArticle('', stokeParam);
        if (data) {
          let resultFirst = data.filter((e) => e.label.length === 1);
          let resultSecond = data.filter((e) => e.label.length === 2);
          let resultThirs = data.filter((e) => e.label.length === 3);
          setBusinessDataFirst(resultFirst);
          setBusinessDataSecond(resultSecond);
          setBusinessDataThirs(resultThirs);
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

  const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
      padding: theme.spacing(0.5, 1),
      margin: theme.spacing(0.2, 0),
    },
    [`& .${treeItemClasses.groupTransition}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
    },
  }));

  return (
    <div className="sm:min-h-[calc(100vh-150px)] vm:h-full vm:flex-col lg:flex-row bg-primary flex md:gap-14 vm:gap-6 sm:px-16 vm:px-4">
      <div className="lg:mt-12 vm:mt-8 xl:w-1/3 lg:w-1/2 sm:w-full vm:w-full vm:min-h-[440px] lg:mb-8 overflow-y-auto">
        <Accordion
          expanded={'1'}
          sx={{
            border: '1px solid #198ADE',
            boxShadow: 'none',
            '.css-rejl51-MuiSimpleTreeView-root': { maxHeight: '100%' },
          }}
        >
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
            <SimpleTreeView defaultExpandedItems={['Overview']}>
              <CustomTreeItem itemId="Overview" label="A. Overview">
                {businessDataFirst.map(
                  (e) =>
                    e.label === 'A' && (
                      <TreeItem
                        itemId={e.id}
                        label={e.title}
                        onClick={() => setDetail(e)}
                      ></TreeItem>
                    )
                )}
                <TreeItem itemId="BizModel1" label="1. Biz Model">
                  <TreeItem itemId="BizModela" label="a. Biz Model">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A1a' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="MarketSize" label="b. Market Size n Position">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A1b' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A1' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="IndustryView" label="2. Industry View">
                  <TreeItem itemId="Characteristic" label="a. Đặc tính">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A2a' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="LevelOfCompetition" label="b. Mức độ cạnh tranh">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A2b' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="WiningModel" label="c. Wining Model">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A2c' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A2' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="CompetitiveAnalysis" label="3. Competitive Analysis">
                  <TreeItem itemId="ProvenAnalysis" label="a. Phân tích - Chứng minh">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A3a' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="CompanyAdventure" label="b. Company Adventure">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A3b' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="ViewFact" label="c. View Fact">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A3c' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A3' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="ExpandScale" label="4. Expand Scale">
                  <TreeItem itemId="Knowhow" label="a. Tập trung lợi thế/knowhow sẵn có">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A4a' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  <TreeItem itemId="Expand" label="b. Mở rộng chuỗi giá trị">
                    {businessDataThirs.map(
                      (e) =>
                        e.label === 'A4b' && (
                          <TreeItem
                            itemId={e.id}
                            label={e.title}
                            onClick={() => setDetail(e)}
                          ></TreeItem>
                        )
                    )}
                  </TreeItem>
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A4' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="GovernanceAnalysis" label="5. Governance Analysis">
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A5' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="EvaluateProspects" label="6. Đánh giá triển vọng">
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A6' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
                <TreeItem itemId="Risk" label="7. Rủi ro">
                  {businessDataSecond.map(
                    (e) =>
                      e.label === 'A7' && (
                        <TreeItem
                          itemId={e.id}
                          label={e.title}
                          onClick={() => setDetail(e)}
                        ></TreeItem>
                      )
                  )}
                </TreeItem>
              </CustomTreeItem>
              <CustomTreeItem itemId="Business" label="B. Cập nhật Đánh giá DN">
                {businessDataFirst.map(
                  (e) =>
                    e.label === 'B' && (
                      <TreeItem
                        itemId={e.id}
                        label={e.title}
                        onClick={() => setDetail(e)}
                      ></TreeItem>
                    )
                )}
              </CustomTreeItem>
              <CustomTreeItem itemId="Branch" label="C. Cập nhật Đánh giá Ngành">
                {businessDataFirst.map(
                  (e) =>
                    e.label === 'C' && (
                      <TreeItem
                        itemId={e.id}
                        label={e.title}
                        onClick={() => setDetail(e)}
                      ></TreeItem>
                    )
                )}
              </CustomTreeItem>
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
      <div className="lg:w-[1014px] vm:w:full box-border sm:max-h-[calc(100vh-150px)] vm:h-full overflow-y-auto border vm:mt-0 vm:mb-8 lg:mt-10 bg-second">
        <div className="p-6">
          <h5 className="flex justify-center mb-4 text-2xl font-bold">{detail.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
