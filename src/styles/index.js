import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    max-height: 100vh;
    background: papayawhip;
  }
`;
