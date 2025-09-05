import {useNavigate} from 'react-router-dom';


const investData = [
  {
    id: '1', url: '/data/filter', href: '/data/filter', title: 'Dữ liệu và bộ lọc', image: '/images/tag-0.png',
  },
  {
    id: '2', url: '/category', href: '/category', title: 'Câu chuyện đầu tư', image: '/images/tag-1.webp',
  },
  /*{
    id: '3', url: '/pricing', href: '/product', title: 'Sản phẩm dịch vụ', image: '/tag-4.webp',
  },*/
  // {
  //   id: '4',
  //   href: '/question',
  //   title: 'Các câu hỏi thường gặp',
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E91F1D" class="w-6 h-6">
  //   <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  // </svg>`,
  // },
];

function Investment() {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);

  const handleClickCard = (id, path) => {
    navigate(path);
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (<div className="investment-screen">
    <div className="flex justify-center mt-10">
      <h1
        className="flex items-center justify-center w-1/3 min-h-40 bg-[#156082] text-center text-white p-4 rounded-2xl border-2 border-[#052737] text-xl">
        Chúng tôi chọn tin điều gì?
      </h1>
    </div>
    <div className="flex justify-center items-center relative mx-auto min-h-[calc(100vh-166px)] bg-primary">
      <div className="flex justify-center gap-8">
        {investData.map((e) => {
          return (<div key={e.id}
                       onClick={() => handleClickCard(e.id, e.href)}
                       className={`w-1/4 flex items-center justify-center cursor-pointer bg-white px-7 vm:my-2 sm:py-4 rounded-box opacity-75`}
          >
            <div className="group relative flex flex-col items-center">
              {e?.icon ? (<div>
                <svg height="auto"
                     width="auto"
                     dangerouslySetInnerHTML={{__html: e.icon}}></svg>
              </div>) : (<img src={e?.image} alt=""/>)}
              <div className="mt-5 pb-8 text-center">
                <h6 className="uppercase font-semibold text-gray-900 group-hover:text-gray-600">
                  {e.title}
                </h6>
              </div>
            </div>
          </div>);
        })}
      </div>
    </div>
  </div>);
}

export default Investment;
