import build from 'build-route-tree';

const rawTree = {
  home: null,
  profile: null,
};

const routes = build(rawTree);

export default routes;
