import React from 'react';
import { string } from 'prop-types';

const Smilies = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="133" height="78" viewBox="0 0 133 78">
    <defs>
      <path id="a" d="M12.853 24.866H0V0h25.706v24.866H12.853z" />
      <path id="c" d="M12.853 24.866H0V0h25.706v24.866H12.853z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx="39" cy="39" r="39" fill="#EFC638" />
      <circle cx="94" cy="39" r="39" fill="#2FBCF7" style={{ mixBlendMode: 'multiply' }} />
      <g transform="translate(27 20)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path fill="#000" d="M.128 16.876a1.62 1.62 0 0 1 .896-2.131c.208-.085.423-.125.636-.125.65 0 1.268.378 1.533 1.006 1.536 3.633 5.34 5.98 9.693 5.98 4.254 0 8.037-2.348 9.637-5.984a1.67 1.67 0 0 1 2.182-.85 1.62 1.62 0 0 1 .864 2.144c-2.126 4.83-7.105 7.95-12.683 7.95-5.698 0-10.706-3.136-12.758-7.99M.74 4.729C.741 2.122 2.901 0 5.555 0s4.814 2.121 4.814 4.729a1.37 1.37 0 0 1-1.383 1.359 1.37 1.37 0 0 1-1.383-1.36c0-1.108-.919-2.01-2.048-2.01-1.13 0-2.048.902-2.048 2.01a1.37 1.37 0 0 1-1.383 1.36 1.371 1.371 0 0 1-1.383-1.36m15.336.015c0-2.607 2.16-4.728 4.815-4.728 2.653 0 4.812 2.12 4.812 4.728a1.37 1.37 0 0 1-1.383 1.36 1.37 1.37 0 0 1-1.383-1.36c0-1.109-.918-2.01-2.046-2.01-1.13 0-2.049.901-2.049 2.01a1.37 1.37 0 0 1-1.383 1.36 1.371 1.371 0 0 1-1.383-1.36" mask="url(#b)" />
      </g>
      <g transform="translate(79 20)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <path fill="#000" d="M.128 16.876a1.62 1.62 0 0 1 .896-2.131c.208-.085.423-.125.636-.125.65 0 1.268.378 1.533 1.006 1.536 3.633 5.34 5.98 9.693 5.98 4.254 0 8.037-2.348 9.637-5.984a1.67 1.67 0 0 1 2.182-.85 1.62 1.62 0 0 1 .864 2.144c-2.126 4.83-7.105 7.95-12.683 7.95-5.698 0-10.706-3.136-12.758-7.99M.74 4.729C.741 2.122 2.901 0 5.555 0s4.814 2.121 4.814 4.729a1.37 1.37 0 0 1-1.383 1.359 1.37 1.37 0 0 1-1.383-1.36c0-1.108-.919-2.01-2.048-2.01-1.13 0-2.048.902-2.048 2.01a1.37 1.37 0 0 1-1.383 1.36 1.371 1.371 0 0 1-1.383-1.36m15.336.015c0-2.607 2.16-4.728 4.815-4.728 2.653 0 4.812 2.12 4.812 4.728a1.37 1.37 0 0 1-1.383 1.36 1.37 1.37 0 0 1-1.383-1.36c0-1.109-.918-2.01-2.046-2.01-1.13 0-2.049.901-2.049 2.01a1.37 1.37 0 0 1-1.383 1.36 1.371 1.371 0 0 1-1.383-1.36" mask="url(#d)" />
      </g>
    </g>
  </svg>
);

Smilies.propTypes = {
  className: string,
};

export default Smilies;
