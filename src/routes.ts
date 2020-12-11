import * as pages from '@/pages';
export const ROUTE_HOMEPAGE = '/';
export const ROUTE_ARCHIVE = '/archive';

const ROUTES = [
  {
    component: pages.Homepage,
    path: ROUTE_HOMEPAGE
  },
  {
    component: pages.ArchivePage,
    path: ROUTE_ARCHIVE
  }
];

export default ROUTES;