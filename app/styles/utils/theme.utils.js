import { css } from 'styled-components';

const sizes = {
  mobile: 767,
  tablet: 1023,
  desktop: 1279,
  desktopXL: 3000,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
  return acc;
}, []);