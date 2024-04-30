import { Route, Routes } from 'react-router-dom';

import { Dashboard } from 'pages/Dashboard';
import Home from 'pages/Home';
import Login from 'pages/LogIn';
import { PublishArticle } from 'pages/PublishArticle';
import { NotFound } from './NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import {
  DASHBOARD,
  HOME,
  PUBLISH_ARTICLE,
  VIEW_ARTICLES
} from './Routes';
import { ViewArticles } from 'pages/ViewArticles';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route path={HOME} element={<Home/>} />
      <Route path={DASHBOARD} element={<ProtectedRoute element={Dashboard} />} />

      <Route path={PUBLISH_ARTICLE} element={<PublishArticle />} />
      <Route path={VIEW_ARTICLES} element={<ViewArticles />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterConfig;
