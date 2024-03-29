import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import 'normalize.css';

import { hot } from 'react-hot-loader/root';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { containers as NotificationContainers } from 'services/notification';
import { I18nProvider } from 'services/i18n';
import { IAppData, IModule, IJssDependencies } from 'shared/types/app';
import { BaseStyles, JssProvider, SheetsRegistry } from 'shared/styles';
import { getTheme } from 'shared/styles/theme';

import createRoutes from './routes';

interface IAppProps {
  jssDeps: IJssDependencies;
  disableStylesGeneration?: boolean;
}

function ClientApp({ modules, store, jssDeps, disableStylesGeneration }: IAppData & IAppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration)}
      </BrowserRouter>
    </Provider>
  );
}

export const App = hot(ClientApp);

interface IServerAppProps {
  jssDeps: IJssDependencies;
  registry?: SheetsRegistry;
  disableStylesGeneration?: boolean;
}

export function ServerApp(props: IAppData & IServerAppProps & StaticRouter['props']) {
  const { modules, store, registry, jssDeps, disableStylesGeneration, ...routerProps } = props;
  return (
    <Provider store={store}>
      <StaticRouter {...routerProps}>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration, registry)}
      </StaticRouter>
    </Provider>
  );
}

const theme = getTheme();

function renderSharedPart(
  modules: IModule[], jssDeps: IJssDependencies,
  disableStylesGeneration?: boolean,
  registry?: SheetsRegistry,
) {
  const { generateClassName, jss } = jssDeps;

  return (
    <JssProvider
      jss={jss}
      registry={registry}
      generateClassName={generateClassName}
      disableStylesGeneration={disableStylesGeneration}
    >
      <MuiThemeProvider theme={theme} disableStylesGeneration={disableStylesGeneration}>
        <I18nProvider>
          <BaseStyles>
            {createRoutes(modules)}
          </BaseStyles>
        </I18nProvider>
        <NotificationContainers.Notification />
      </MuiThemeProvider>
    </JssProvider>
  );
}
