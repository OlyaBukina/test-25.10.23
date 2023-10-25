import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const downloadTabs = async () => {
      const res = await fetch(new Request(`/test-25.10.23/data/tabs.json`));
      const json = await res.json();
      const sortedTabs = json.toSorted((a, b) => a.order - b.order);
      setTabs(sortedTabs);
    };
    downloadTabs();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout tabs={tabs} />}>
        {!!tabs.length && (
          <>
            <Route index element={<Navigate to={tabs[0].id} />} />
            {tabs.map(({ id, path }) => {
              const Page = lazy(() => import(`./${path}`));
              return <Route key={id} path={id} element={<Page />} />;
            })}
            <Route path="*" element={<Navigate to={tabs[0].id} />} />
          </>
        )}
      </Route>
    </Routes>
  );
};
