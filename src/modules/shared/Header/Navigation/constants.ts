import { IMenuItem } from 'shared/types/common';
import routes from 'modules/routes';

export const menuItems: IMenuItem[] = [
  {
    path: routes.home.getRoutePath(),
    title: 'Home',
  },
  {
    path: routes.profile.getRoutePath(),
    title: 'Profile',
  },
  {
    path: 'https://medium.com/akropolis',
    title: 'Blog',
    isExternal: true,
  },
];
