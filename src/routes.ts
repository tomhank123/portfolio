import ArchivePage from '@/containers/ArchivePage';
import Homepage from '@/containers/HomePage';
export const ROUTE_HOMEPAGE = '/';
export const ROUTE_ARCHIVE = '/archive';

const ROUTES = [
  {
    component: Homepage,
    path: ROUTE_HOMEPAGE,
  },
  {
    component: ArchivePage,
    path: ROUTE_ARCHIVE,
  },
];

export default ROUTES;
