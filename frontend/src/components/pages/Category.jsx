import { getStockAll } from '@/api/stock';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import { Chip } from '@mui/material';

function ListCompany() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    let result = await getStockAll('category');
    setCategories(result);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center">
      <div className="container w-[90%]">
        <div className="pt-8 text-center">
          <h1 className="text-4xl font-semibold">Phân loại</h1>
        </div>
        <div className="flex vm:flex-col sm:flex-row">
          <div className="flex flex-col items-center sm:w-1/3 vm:w-full px-8 vm:px-2 py-8 gap-y-4">
            <Chip label="Large Company" color="primary" />
            {categories &&
              categories
                .filter((e) => e.sizeOfCompany === 1)
                .map((e) => (
                  <Link key={e.id} to={`/detail?stoke=${e.id}`} className="w-full">
                    <div className="flex justify-between max-w-1/3 px-4 py-4 border rounded-lg bg-white">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="34"
                            fill="none"
                            viewBox="0 0 25 24"
                            id="affinity-designer"
                          >
                            <rect
                              width="24"
                              height="24"
                              x=".463"
                              fill="url(#paint0_linear_302_4600)"
                              rx="8"
                            ></rect>
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              d="M13.87 4H11.2727L4 16.3636V19.6364C4 19.8372 4.16281 20 4.36364 20H11.1903L8.10538 14.1729L13.87 4ZM12.4247 20H19.6364C19.8372 20 20 19.8372 20 19.6364V14.7273H9.63323L12.4247 20ZM20 13.6364V4.36364C20 4.16281 19.8372 4 19.6364 4H15.1239L11.865 9.751L14.1315 13.6364H20ZM11.2427 10.8492L12.8685 13.6364H9.66331L11.2427 10.8492Z"
                              clipRule="evenodd"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_302_4600"
                                x1=".463"
                                x2="24.463"
                                y1="12"
                                y2="12"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#ED6D6B"></stop>
                                <stop offset="1" stopColor="#F0B076"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h6 className="font-semibold">{e.symbol}</h6>
                          <p className="max-w-[350px] overflow-hidden text-ellipsis text-nowrap">
                            {e.companyName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
          <div className="flex flex-col items-center sm:w-1/3 vm:w-full px-8 vm:px-2 vm:pt-0 sm:pt-8 py-8 gap-y-4">
            <Chip label="Mid Company" color="primary" />
            {categories &&
              categories
                .filter((e) => e.sizeOfCompany === 2)
                .map((e) => (
                  <Link key={e.id} to={`/detail?stoke=${e.id}`} className="w-full">
                    <div className="flex justify-between max-w-1/3 px-4 py-4 border rounded-lg bg-white">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="34"
                            fill="none"
                            viewBox="0 0 25 24"
                            id="affinity-designer"
                          >
                            <rect
                              width="24"
                              height="24"
                              x=".463"
                              fill="url(#paint0_linear_302_4600)"
                              rx="8"
                            ></rect>
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              d="M13.87 4H11.2727L4 16.3636V19.6364C4 19.8372 4.16281 20 4.36364 20H11.1903L8.10538 14.1729L13.87 4ZM12.4247 20H19.6364C19.8372 20 20 19.8372 20 19.6364V14.7273H9.63323L12.4247 20ZM20 13.6364V4.36364C20 4.16281 19.8372 4 19.6364 4H15.1239L11.865 9.751L14.1315 13.6364H20ZM11.2427 10.8492L12.8685 13.6364H9.66331L11.2427 10.8492Z"
                              clipRule="evenodd"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_302_4600"
                                x1=".463"
                                x2="24.463"
                                y1="12"
                                y2="12"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#ED6D6B"></stop>
                                <stop offset="1" stopColor="#F0B076"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h6 className="font-semibold">{e.symbol}</h6>
                          <p className="max-w-[350px] overflow-hidden text-ellipsis text-nowrap">
                            {e.companyName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
          <div className="flex flex-col items-center sm:w-1/3 vm:w-full px-8 vm:px-2 vm:pt-0 sm:pt-8 py-8 gap-y-4">
            <Chip label="Small Company" color="primary" />
            {categories &&
              categories
                .filter((e) => e.sizeOfCompany === 3)
                .map((e) => (
                  <Link key={e.id} to={`/detail?stoke=${e.id}`} className="w-full">
                    <div className="flex justify-between max-w-1/3 px-4 py-4 border rounded-lg bg-white">
                      <div className="flex items-center">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="34"
                            fill="none"
                            viewBox="0 0 25 24"
                            id="affinity-designer"
                          >
                            <rect
                              width="24"
                              height="24"
                              x=".463"
                              fill="url(#paint0_linear_302_4600)"
                              rx="8"
                            ></rect>
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              d="M13.87 4H11.2727L4 16.3636V19.6364C4 19.8372 4.16281 20 4.36364 20H11.1903L8.10538 14.1729L13.87 4ZM12.4247 20H19.6364C19.8372 20 20 19.8372 20 19.6364V14.7273H9.63323L12.4247 20ZM20 13.6364V4.36364C20 4.16281 19.8372 4 19.6364 4H15.1239L11.865 9.751L14.1315 13.6364H20ZM11.2427 10.8492L12.8685 13.6364H9.66331L11.2427 10.8492Z"
                              clipRule="evenodd"
                            ></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_302_4600"
                                x1=".463"
                                x2="24.463"
                                y1="12"
                                y2="12"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#ED6D6B"></stop>
                                <stop offset="1" stopColor="#F0B076"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h6 className="font-semibold">{e.symbol}</h6>
                          <p className="max-w-[350px] overflow-hidden text-ellipsis text-nowrap">
                            {e.companyName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCompany;
