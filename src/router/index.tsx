import React, { FC, lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import App from '@views/App';
import Nav from '@views/Nav';
import Login from '@views/Login';

// 延迟加载回调
const SuspenseComponent = (Component: FC) => (props: any) => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Component {...props}></Component>
    </Suspense>
  );
};

// 组件懒加载

const Page404 = lazy(() => import('@views/404/index'));

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: App,
        routes: [
          {
            path: '/login',
            exact: true,
            component: SuspenseComponent(Login),
          },
          {
            path: '/nav',
            exact: true,
            component: SuspenseComponent(Nav),
          },
          // ...等其他页面
          {
            path: '/*',
            exact: true,
            component: SuspenseComponent(Page404),
          },
        ],
      },
    ],
  },
];
