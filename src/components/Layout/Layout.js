import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Main } from './Layout.styled';

const Layout = ({ tabs }) => {
  return (
    <>
      <Header tabs={tabs} />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default Layout;
