import dynamic from 'next/dynamic';
import { registerIconLibrary } from '@shoelaceDist/utilities/icon-library';

export const SlButton = dynamic(() => import('@shoelaceDist/react/button'), {
  ssr: false,
});
export const SlButtonGroup = dynamic(
  () => import('@shoelaceDist/react/button-group'),
  {
    ssr: false,
  }
);
export const SlCard = dynamic(() => import('@shoelaceDist/react/card'), {
  ssr: false,
});
export const SlCopyButton = dynamic(
  () => import('@shoelaceDist/react/copy-button'),
  {
    ssr: false,
  }
);
export const SlDetails = dynamic(() => import('@shoelaceDist/react/details'), {
  ssr: false,
});
export const SlDialog = dynamic(() => import('@shoelaceDist/react/dialog'), {
  ssr: false,
});
export const SlDropdown = dynamic(
  () => import('@shoelaceDist/react/dropdown'),
  {
    ssr: false,
  }
);
export const SlIcon = dynamic(() => import('@shoelaceDist/react/icon'), {
  ssr: false,
});
export const SlIconButton = dynamic(
  () => import('@shoelaceDist/react/icon-button'),
  {
    ssr: false,
  }
);
export const SlInput = dynamic(() => import('@shoelaceDist/react/input'), {
  ssr: false,
});
export const SlMenu = dynamic(() => import('@shoelaceDist/react/menu'), {
  ssr: false,
});
export const SlMenuItem = dynamic(
  () => import('@shoelaceDist/react/menu-item'),
  {
    ssr: false,
  }
);
export const SlOption = dynamic(() => import('@shoelaceDist/react/option'), {
  ssr: false,
});
export const SlQrCode = dynamic(() => import('@shoelaceDist/react/qr-code'), {
  ssr: false,
});
export const SlRange = dynamic(() => import('@shoelaceDist/react/range'), {
  ssr: false,
});
export const SlSelect = dynamic(() => import('@shoelaceDist/react/select'), {
  ssr: false,
});
export const SlSpinner = dynamic(() => import('@shoelaceDist/react/spinner'), {
  ssr: false,
});
export const SlTab = dynamic(() => import('@shoelaceDist/react/tab'), {
  ssr: false,
});
export const SlTabGroup = dynamic(
  () => import('@shoelaceDist/react/tab-group'),
  {
    ssr: false,
  }
);
export const SlTabPanel = dynamic(
  () => import('@shoelaceDist/react/tab-panel'),
  {
    ssr: false,
  }
);
export const SlTooltip = dynamic(() => import('@shoelaceDist/react/tooltip'), {
  ssr: false,
});
export const SlTree = dynamic(() => import('@shoelaceDist/react/tree'), {
  ssr: false,
});
export const SlTreeItem = dynamic(
  () => import('@shoelaceDist/react/tree-item'),
  {
    ssr: false,
  }
);

export const RegisterCustomIconLibrary = () => {
  registerIconLibrary('md-icons', {
    resolver: (name) => `/icons/${name}.svg`,
    mutator: (svg) => svg.setAttribute('fill', 'currentColor'),
  });

  return <></>;
};
