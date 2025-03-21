import { searchArticle } from '@/api/article';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../../common/Loader';

import './style.scss';

function Detail() {
  const [businessDataFirst, setBusinessDataFirst] = useState([]);
  const [businessDataSecond, setBusinessDataSecond] = useState([]);
  const [businessDataThirs, setBusinessDataThirs] = useState([]);
  const [detail, setDetail] = useState([]);
  const [companyTitle, setCompanyTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = new URLSearchParams(window.location.search);
  const stokeParam = query.get('stoke');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        if (stokeParam) {
          const data = await searchArticle('', stokeParam);
          if (data) {
            let title = data[0].stockId.symbol + ' - ' + data[0].stockId.companyName;
            let resultFirst = data.filter((e) => e.label.length === 1);
            let resultSecond = data.filter((e) => e.label.length === 2);
            let resultThirs = data.filter((e) => e.label.length === 3);
            setCompanyTitle(title);
            setBusinessDataFirst(resultFirst);
            if (resultFirst?.[0]) {
              let temp = resultFirst[0];
              setDetail(temp);
            }
            setBusinessDataSecond(resultSecond);
            setBusinessDataThirs(resultThirs);
            setIsLoading(false);
          } else {
            setBusinessDataFirst([]);
            setBusinessDataSecond([]);
            setIsLoading(false);
          }
        } else {
          setBusinessDataFirst([]);
          setBusinessDataSecond([]);
          setIsLoading(false);
        }
      } catch (error) {
        setBusinessDataFirst([]);
        setBusinessDataSecond([]);
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center gap-4 bg-primary">
      <div className="flex flex-col flex-1 justify-between ml-4 mb-4">
        <div className="flex flex-col max-h-[600px] overflow-y-auto">
          <Typography
            sx={{
              width: '100%',
              marginBottom: '1rem',
              marginTop: '1rem',
              fontWeight: 'bold',
            }}
          >
            {companyTitle}
          </Typography>
          <div className="flex flex-col gap-2 bg-[#FFFAF0] p-4">
            <div>
              <div className="italic font-semibold mb-2">A. Phân tích cơ bản</div>
              {businessDataFirst &&
                businessDataFirst.map((e) => (
                  <div
                    key={e.id}
                    className={`flex justify-between pl-[1rem] cursor-pointer`}
                    onClick={() => setDetail(e)}
                  >
                    <div className="italic max-w-[300px] text-sm text-ellipsis overflow-hidden text-nowrap">
                      {e.title}
                    </div>
                    <div className="italic text-sm">{e.createDate.split(' ')[0]}</div>
                  </div>
                ))}
              {businessDataSecond &&
                businessDataSecond.map((e) => (
                  <div
                    key={e.id}
                    className={`flex justify-between pl-[2rem] cursor-pointer`}
                    onClick={() => setDetail(e)}
                  >
                    <div className="italic max-w-[300px] text-sm text-ellipsis overflow-hidden text-nowrap">
                      {e.title}
                    </div>
                    <div className="italic text-sm">{e.createDate.split(' ')[0]}</div>
                  </div>
                ))}
              <div className="flex flex-col gap-y-2">
                {businessDataThirs &&
                  businessDataThirs.map((e) => (
                    <div
                      key={e.id}
                      className={`flex justify-between pl-[3rem] cursor-pointer`}
                      onClick={() => setDetail(e)}
                    >
                      <div className="italic max-w-[300px] text-sm text-ellipsis overflow-hidden text-nowrap">
                        {e.title}
                      </div>
                      <div className="italic text-sm">{e.createDate.split(' ')[0]}</div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div className="italic font-semibold mb-2">B. Cập nhật đánh giá DN</div>
              {businessDataFirst.map(
                (e) =>
                  e.label === 'B' && (
                    <div
                      key={e.id}
                      className={`flex justify-between pl-[1rem] cursor-pointer`}
                      onClick={() => setDetail(e)}
                    >
                      <div className="italic max-w-[300px] text-sm text-ellipsis overflow-hidden text-nowrap">
                        {e.title}
                      </div>
                      <div className="italic text-sm">{e.createDate.split(' ')[0]}</div>
                    </div>
                  )
              )}
            </div>
            <div>
              <div className="italic font-semibold mb-2">C. Cập nhật đánh giá Ngành</div>
              {businessDataFirst.map(
                (e) =>
                  e.label === 'C' && (
                    <div
                      key={e.id}
                      className={`flex justify-between pl-[1rem] cursor-pointer`}
                      onClick={() => setDetail(e)}
                    >
                      <div className="italic max-w-[300px] text-sm text-ellipsis overflow-hidden text-nowrap">
                        {e.title}
                      </div>
                      <div className="italic text-sm">{e.createDate.split(' ')[0]}</div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div
          className="mt-4 rotate-180 text-end cursor-pointer"
          onClick={() => (window.location.href = '/category')}
        >
          <ExitToAppIcon fontSize="large" />
        </div>
      </div>
      <div className="relative min-w-[1000px] w-[1000px] h-[calc(100svh-60px)] select-none">
        <div className="bg-second p-6 h-full overflow-y-auto water-mark">
          <div className="flex justify-center mb-4 text-2xl font-bold">{detail.title}</div>
          <div dangerouslySetInnerHTML={{ __html: detail.content }} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
