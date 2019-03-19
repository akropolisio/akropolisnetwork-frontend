import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    width: 'unset',
  }),
};

export type StylesProps = WithStyles<typeof styles>;

// tslint:disable:max-line-length
function LogoWithNameIcon(props: GetProps<typeof SvgIcon> & StylesProps) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} classes={{ root: classes.root }} viewBox="0 0 204 48">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M76.036 16.222c0-.265.182-.53.484-.53h1.814c.242 0 .484.265.484.53v14.633c0 .265-.242.53-.484.53H76.52c-.242 0-.484-.199-.484-.53V16.222zM86.622 15.89c.063-.131.254-.198.38-.198h2.161c.254 0 .445.199.445.464a.517.517 0 0 1-.127.33l-5.21 6.092a.831.831 0 0 0 0 1.06l5.591 7.018c.127.199.127.53-.127.662-.064.067-.19.067-.318.067h-2.35c-.128 0-.318-.067-.382-.133l-5.781-7.416c-.318-.463-.318-1.059.063-1.456l5.655-6.49z" />
        <path fillRule="nonzero" d="M118.227 15.692c4.329 0 7.882 3.473 7.882 7.846 0 4.31-3.489 7.847-7.882 7.847-4.328 0-7.882-3.473-7.882-7.847 0-4.308 3.554-7.846 7.882-7.846zm0 12.863c2.778 0 5.04-2.251 5.04-5.017 0-2.765-2.262-5.016-5.04-5.016s-5.039 2.251-5.039 5.016v.065c.065 2.7 2.261 4.952 5.04 4.952zM154.39 15.692c4.33 0 7.883 3.473 7.883 7.846 0 4.31-3.489 7.847-7.882 7.847-4.329 0-7.882-3.473-7.882-7.847 0-4.308 3.489-7.846 7.882-7.846-.065 0 0 0 0 0zm0 12.863c2.779 0 5.04-2.251 5.04-5.017 0-2.765-2.261-5.016-5.04-5.016-2.777 0-5.038 2.251-5.038 5.016v.065c0 2.7 2.26 4.952 5.039 4.952z" />
        <path d="M167.836 16.09c0-.265.205-.398.41-.398h2.113c.273 0 .41.199.41.398v12.58h5.931c.273 0 .41.199.41.463v1.854c0 .265-.205.398-.41.398h-8.455a.387.387 0 0 1-.409-.398V16.09zM183.6 16.09c0-.265.19-.398.38-.398h2.022c.19 0 .38.199.38.398v14.897c0 .199-.19.398-.38.398h-2.023c-.253 0-.379-.199-.379-.398V16.09zM193.9 29.065l.787-1.35c.131-.257.46-.321.722-.193h.065c.131.065 1.902 1.35 3.345 1.35 1.05.065 1.902-.643 2.033-1.607v-.064c0-1.093-.984-1.865-2.82-2.636-2.099-.836-4.197-2.122-4.197-4.694 0-1.928 1.443-4.179 4.984-4.179a7.56 7.56 0 0 1 4.46 1.479c.196.193.262.514.13.707l-.852 1.222c-.131.257-.459.386-.787.257-.197-.129-1.902-1.222-3.082-1.222s-1.968.836-1.968 1.543c0 1.03.853 1.736 2.624 2.444 2.164.835 4.656 2.121 4.656 4.95 0 2.25-1.967 4.308-5.115 4.308a7.251 7.251 0 0 1-4.92-1.672c-.13-.128-.261-.257-.065-.643zM71.335 30.801l-6.803-14.85a.442.442 0 0 0-.392-.259h-.196c-.131 0-.328.065-.393.26L56.618 30.8c-.131.195 0 .454.13.519.066.065.131.065.197.065h1.962c.262 0 .589-.195.654-.454l1.112-2.4 1.112-2.464 2.159-4.863 2.093 4.54c.065.194.065.388-.131.518l-2.42 1.816c-.131.064-.131.194-.066.324.066.065.131.065.196.065h3.402c.196 0 .327.064.392.259l.981 2.14c.066.26.393.454.654.454h1.963c.196 0 .392-.195.392-.39 0 0 0-.064-.065-.129zM103.719 26.77h-2.443c-.135 0-.203.126-.203.189v.063l2.239 4.173c.068.126.203.19.407.19h2.442c.272 0 .475-.127.475-.38 0-.063 0-.19-.067-.253l-2.036-3.603c-.204-.19-.475-.38-.814-.38z" />
        <path fillRule="nonzero" d="M103.23 25.094c2.042-.595 3.472-2.45 3.404-4.568 0-2.715-2.247-4.834-5.039-4.834H94.99a.387.387 0 0 0-.408.398v14.897c0 .265.204.398.408.398h2.111c.204 0 .409-.199.409-.398v-5.694h2.587c1.022 0 2.111-.066 3.132-.199zm-5.652-6.687h3.745c1.226 0 2.247.993 2.315 2.185 0 1.258-1.021 2.251-2.315 2.317h-3.745v-4.502zM139.393 25.094c2.043-.595 3.473-2.45 3.405-4.568 0-2.715-2.247-4.834-5.04-4.834h-6.604a.387.387 0 0 0-.409.398v14.897c0 .265.205.398.409.398h2.11a.387.387 0 0 0 .41-.398v-5.694h2.587c1.09 0 2.11-.066 3.132-.199zm-5.652-6.687h3.746c1.225 0 2.247.993 2.315 2.185 0 1.258-1.022 2.251-2.315 2.317h-3.746v-4.502z" />
        <g fillRule="nonzero">
          <path d="M21.398 2.63c.729 0 1.524.197 2.186.592l15.039 8.614c1.325.789 2.186 2.17 2.186 3.748v17.293c0 1.512-.861 2.959-2.186 3.748l-15.039 8.548a4.193 4.193 0 0 1-2.186.591 4.369 4.369 0 0 1-2.186-.591L4.174 36.559c-1.325-.79-2.187-2.17-2.187-3.748V15.584c0-1.513.862-2.96 2.187-3.748l15.104-8.614a4.133 4.133 0 0 1 2.12-.592zm0-2.038c-1.126 0-2.186.263-3.18.855L3.18 10.126A6.26 6.26 0 0 0 0 15.584v17.293a6.26 6.26 0 0 0 3.18 5.457l15.038 8.614c.994.592 2.054.855 3.18.855 1.126 0 2.186-.263 3.18-.855l15.038-8.614a6.26 6.26 0 0 0 3.18-5.457V15.584a6.26 6.26 0 0 0-3.18-5.458l-15.038-8.68c-.994-.525-2.054-.854-3.18-.854z" />
          <path d="M21.398 10.06c.331 0 .596.066.861.263l10.865 6.181c.53.329.861.855.861 1.512v12.428a1.82 1.82 0 0 1-.86 1.512l-10.8 6.181c-.264.131-.53.263-.86.263-.332 0-.597-.066-.862-.263l-10.798-6.18c-.53-.33-.861-.856-.861-1.513V18.016c0-.591.33-1.183.86-1.512l10.733-6.18c.265-.198.596-.264.861-.264zm0-1.71c-.596 0-1.192.132-1.722.461l-10.799 6.18c-1.06.593-1.722 1.776-1.722 2.96v12.427c0 1.25.662 2.367 1.722 2.959l10.799 6.18c.53.33 1.126.461 1.722.461.596 0 1.193-.131 1.723-.46l10.798-6.181c1.06-.592 1.723-1.775 1.723-2.959V18.016c0-1.249-.663-2.367-1.723-2.958L23.121 8.877c-.53-.395-1.127-.526-1.723-.526z" />
          <path d="M21.398 17.688h.066l5.631 3.287-.066 6.51-5.697 3.156-5.631-3.288.066-6.51 5.565-3.155h.066zm0-1.578c-.331 0-.596.065-.861.263l-5.565 3.156c-.53.329-.861.855-.861 1.512v6.378c0 .592.331 1.184.861 1.513l5.565 3.156c.265.131.596.263.861.263.331 0 .596-.066.861-.263l5.565-3.156c.53-.33.861-.855.861-1.513v-6.378a1.82 1.82 0 0 0-.86-1.512l-5.566-3.156c-.265-.198-.53-.263-.86-.263z" />
        </g>
      </g>
    </SvgIcon>
  );
}

export default withStyles(styles)(LogoWithNameIcon);
