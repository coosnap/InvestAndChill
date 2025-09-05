import {RouteObject} from "react-router-dom";
import React, {Suspense} from "react";
import {App} from "./App";

import Login from './components/pages/login';
import AdminRoute from './components/router/admin-route';
import PrivateRoute from './components/router/private-route';
import PublicRoute from './components/router/public-route';

import {Charts} from './components/pages/chart';
import {Pattern} from './components/pages/chart/pattern';
import {Filter} from './components/pages/chart/filter';

const Detail = React.lazy(() => import('./components/pages/detail'));
const Investment = React.lazy(() => import('./components/pages/Investment'));
const Category = React.lazy(() => import('./components/pages/Category'));
const Footer = React.lazy(() => import('./components/common/Footer'));
const Admin = React.lazy(() => import('./components/admin/Admin').then(p => ({default: p.Admin})));
const Buy = React.lazy(() => import('./components/pages/Buy'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));
const Post = React.lazy(() => import('./components/pages/Post'));
const Product = React.lazy(() => import('./components/pages/Product'));
const Pricing = React.lazy(() => import('./pages/Pricing').then(p => ({default: p.Pricing})));
const Payment = React.lazy(() => import('./pages/Pricing/PricingDetail').then(p => ({default: p.PricingDetail})));
const Question = React.lazy(() => import('./components/pages/Question'));

export const routes = [
  {
    path: '*',
    element: (
      <PublicRoute>
        <Suspense>
          <NotFound/>
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Suspense>
              <Login/>
            </Suspense>
          </PublicRoute>),
      }, {
        path: '/data/chart', element: (<PublicRoute>
          <Suspense>
            <Charts/>
          </Suspense>
        </PublicRoute>),
      }, {
        path: '/data/pattern', element: (<PublicRoute>
          <Suspense>
            <Pattern/>
          </Suspense>
        </PublicRoute>),
      }, {
        path: '/data/filter', element: (<PublicRoute>
          <Suspense>
            <Filter/>
          </Suspense>
        </PublicRoute>),
      }, {
        path: '/post/:id', element: (<PublicRoute>
          <Suspense>
            <Post/>
          </Suspense>
        </PublicRoute>),
      }, {
        path: '/invest', element: (<PrivateRoute>
          <Suspense>
            <Investment/>
            <Footer/>
          </Suspense>
        </PrivateRoute>),
      }, {
        path: '/category', element: (<PrivateRoute>
          <Suspense>
            <Category/>
          </Suspense>
        </PrivateRoute>),
      },
      {
        path: '/product', element: (<PrivateRoute>
          <Suspense>
            <Product/>
          </Suspense>
        </PrivateRoute>),
      },
      {
        path: '/pricing', element: (<PrivateRoute>
          <Suspense>
            <Pricing/>
          </Suspense>
        </PrivateRoute>),
      },
      {
        path: '/question', element: (<PrivateRoute>
          <Suspense>
            <Question/>
          </Suspense>
        </PrivateRoute>),
      }, {
        path: '/detail', element: (<PrivateRoute>
          <Suspense>
            <Detail/>
          </Suspense>
        </PrivateRoute>),
      },
      {
        path: '/buy/:id', element: (<PrivateRoute>
          <Suspense>
            <Buy/>
          </Suspense>
        </PrivateRoute>),
      },{
        path: '/pricing/:id/payment', element: (<PrivateRoute>
          <Suspense>
            <Payment/>
          </Suspense>
        </PrivateRoute>),
      },
      {
        path: '/admin/:id', element: (<AdminRoute>
          <Suspense>
            <Admin/>
          </Suspense>
        </AdminRoute>),
      }, {
        path: '/admin', element: (<AdminRoute>
          <Suspense>
            <Admin/>
          </Suspense>
        </AdminRoute>),
      }
    ]
  }
]

/**
 * setup routes - sitemap
 */
export const temp_routes: RouteObject[] = [
  // not found
  {
    path: '*',
    element: <NotFound/>
  },
  // client screen
  {
    path: '/',
    children: [
      {index: true},
      {
        path: '/pricing',
        children: [
          {
            index: true, element: (<PrivateRoute>
              <Suspense>
                <Pricing/>
              </Suspense>
            </PrivateRoute>)
          }, // bang gia
          {path: '/:id/payment'}, // thanh toan don hang
          {path: '/callback'}, // xu ly sau khi thanh toan
        ]
      },
      {path: '/about'}, // ve cong ty
      {path: '/policy'}, // chinh sach
      {path: '/disclaimer'}, // dieu khoan loai tru
      {path: '/invest'}, // thay the cho homepage
      {path: '/filter'}, // bo lod
      {path: '/pattern'}, // du lieu mau
      {path: '/chart'}, // bieu do
      {
        path: '/category', // danh muc
        children: [
          {index: true},
          {path: '/:id'}, // chi tiet danh muc
        ]
      },
      {path: '/products'}, // thay the = pricing
    ]
  },
  // administrator screens
  {
    path: 'admin',
    element: <Admin/>,
    children: [
      {
        path: 'users',
        children: [
          {index: true},
          {path: ':id/edit'} // cap nhat thong tin
        ]
      },
      {
        path: 'stock',
        children: [
          {index: true},
          {path: ':id/edit'} // cap nhat thong tin
        ]
      },
      {
        path: 'articles',
        children: [
          {index: true},
          {path: 'new'}, // tao moi bai viet
          {path: ':id/edit'} // cap nhat bai viet
        ]
      },
      {
        path: 'pricing', // bang gia
      },
      // {path: 'products'}
    ]
  }
]
