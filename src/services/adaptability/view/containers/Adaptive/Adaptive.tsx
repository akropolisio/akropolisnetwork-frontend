import * as React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Breakpoint, Breakpoints } from '@material-ui/core/styles/createBreakpoints';

import { IAppReduxState } from 'shared/types/app';

import * as selectors from './../../../redux/selectors';
import { StylesProps, provideStyles } from './Adaptive.style';

interface IOwnProps {
  from?: Breakpoint;
  to?: Breakpoint;
  className?: string;
  children: React.ReactNode;
}

interface IStateProps {
  hydrated: boolean;
}

type IProps = IStateProps & IOwnProps & StylesProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    hydrated: selectors.selectHydrated(state),
  };
}

function Adaptive(props: IProps) {
  const { classes, theme, from = '', to = '', className, hydrated, children } = props;

  const fromQuery = theme && from && up(from, theme.breakpoints).split(' ')[1];
  const toQuery = theme && to && down(to, theme.breakpoints).split(' ')[1];
  const query = [fromQuery, toQuery].filter(Boolean).join(' and ');
  const matches = useMediaQuery(query); // dont work with SSR, solution https://material-ui.com/layout/use-media-query/

  const adaptClasses = cn(classes.root, {
    [classes[`from${from.toUpperCase()}`]]: !!from,
    [classes[`to${to.toUpperCase()}`]]: !!to,
  });

  const finalClassName = cn(
    className,
    hydrated ? undefined : adaptClasses,
  );

  const wrappedChildren = <div className={finalClassName}>{children}</div>;

  return hydrated
    ? (matches && wrappedChildren || null)
    : wrappedChildren;
}

const unit = 'px';
const step = 5;

function up(key: Breakpoint, breakpoints: Breakpoints) {
  const value = typeof breakpoints.values[key] === 'number' ? breakpoints.values[key] : key;
  return `@media (min-width:${value}${unit})`;
}

function down(key: Breakpoint, breakpoints: Breakpoints): string {
  const endIndex = breakpoints.keys.indexOf(key);
  const upperbound = breakpoints.values[breakpoints.keys[endIndex]];

  const value = typeof upperbound === 'number' && endIndex >= 0 ? upperbound : key;

  if (typeof value === 'number') {
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  return value;
}

export default (
  connect(mapState)(
    provideStyles(Adaptive),
  )
);
