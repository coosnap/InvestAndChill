import { useState } from 'react';

import './styles.scss';
import { useNavigate } from 'react-router-dom';
// import Loader from "../common/Loader";

const investData = [
  {
    id: '0',
    href: '/category',
    title: 'Câu chuyện đầu tư',
    image: '/tag-1.webp',
  },
  {
    id: '1',
    href: '/product',
    title: 'Sản phẩm dịch vụ',
    image: '/tag-4.webp',
  },
  {
    id: '2',
    href: '/question',
    title: 'Các câu hỏi thường gặp',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E91F1D" class="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>`,
  },
];

function Investment() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  const handleClickCard = (id, path) => {
    setIndex(id);
    if (id === index) navigate(path);
  };

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="container relative mx-auto h-[calc(100vh-66px)] bg-[#F5F9FC] pt-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#232A46]">Hạng mục</h1>
      </div>
      <div className="flex justify-center mt-4 border-t-2 border-gray-200">
        {investData.map((e, i) => {
          const indexLeft = mod(index - 1, investData.length);
          const indexRight = mod(index + 1, investData.length);

          let className = '';
          if (i === indexRight) {
            className = 'card card--right';
          } else if (i === indexLeft) {
            className = 'card card--active';
          } else {
            className = 'card card--left';
          }

          if (i === index) className = 'card';

          return (
            <article
              key={e.id}
              onClick={() => handleClickCard(e.id, e.href)}
              className={`${className} absolute top-12 right-0 left-0 bottom-0 m-auto w-[350px] h-[calc(100vh-280px)] max-w-sm flex items-center justify-center cursor-pointer max-h-[700px] bg-white px-7 py-4 rounded-box shadow-2xl`}
            >
              <div className="group relative flex flex-col items-center">
                {e?.icon ? (
                  <div>
                    <svg height="96" width="96" dangerouslySetInnerHTML={{ __html: e.icon }}></svg>
                  </div>
                ) : (
                  <img src={e?.image} alt="" />
                )}
                <div className="mt-5 text-center">
                  <p className="text-4xl font-semibold text-gray-900 group-hover:text-gray-600">
                    {e.title}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Investment;
