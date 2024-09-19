import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

type IconProps = SvgProps & {
  variant?: 'outline' | 'filled';
  size?: number;
  color?: string;
};

export const Home = ({
  variant = 'outline',
  size = 24,
  color,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} fill='none' {...props}>
    {variant === 'filled' ? (
      <>
        <G clipPath='url(#a)'>
          <Path
            fill={color}
            d='M17.997 3.837C15.857 2.125 14.787 1.27 13.6.94a6 6 0 0 0-3.2 0c-1.187.329-2.257 1.185-4.397 2.897l-1.15.92C3.53 5.816 2.868 6.345 2.393 7.002a6 6 0 0 0-.928 1.928c-.215.782-.215 1.63-.215 3.324v5.33a5.167 5.167 0 0 0 5.167 5.166A2.583 2.583 0 0 0 9 20.167V16a3 3 0 1 1 6 0v4.167a2.583 2.583 0 0 0 2.583 2.583 5.167 5.167 0 0 0 5.167-5.167v-5.33c0-1.694 0-2.541-.215-3.323a5.999 5.999 0 0 0-.927-1.928c-.476-.657-1.138-1.186-2.46-2.245l-1.15-.92Z'
          />
        </G>
        <Defs>
          <ClipPath id='a'>
            <Path fill='#fff' d='M0 0h24v24H0z' />
          </ClipPath>
        </Defs>
      </>
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M22 17v-5.155c0-1.412 0-2.118-.18-2.77a5.001 5.001 0 0 0-.772-1.606c-.397-.548-.948-.989-2.05-1.871l-2-1.6c-1.784-1.427-2.676-2.14-3.665-2.414a5 5 0 0 0-2.666 0c-.99.274-1.881.987-3.665 2.414l-2 1.6C3.9 6.48 3.35 6.921 2.952 7.468a5 5 0 0 0-.772 1.607C2 9.727 2 10.433 2 11.845V17a5 5 0 0 0 5 5 2 2 0 0 0 2-2v-4a3 3 0 0 1 6 0v4a2 2 0 0 0 2 2 5 5 0 0 0 5-5Z'
      />
    )}
  </Svg>
);

export const Search = ({
  variant = 'outline',
  size = 24,
  color,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} fill='none' {...props}>
    {variant === 'filled' ? (
      <Path
        fill={color}
        fillRule='evenodd'
        d='M11 1.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.722 9.722 0 0 0 6.894-2.856A9.722 9.722 0 0 0 20.75 11c0-5.385-4.365-9.75-9.75-9.75Zm8.53 17.22a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeWidth={2}
        d='m21 21-3.636-3.636m0 0A9 9 0 1 0 4.636 4.636a9 9 0 0 0 12.728 12.728Z'
      />
    )}
  </Svg>
);

export const User = ({
  variant = 'outline',
  size = 24,
  color,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24' {...props}>
    {variant === 'filled' ? (
      <Path
        fill={color}
        d='M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM8.95 13.25a5.7 5.7 0 0 0-5.7 5.7 3.8 3.8 0 0 0 3.8 3.8h9.9a3.8 3.8 0 0 0 3.8-3.8 5.7 5.7 0 0 0-5.7-5.7h-6.1Z'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 18.8A4.8 4.8 0 0 1 8.8 14h6.4a4.8 4.8 0 0 1 4.8 4.8v0a3.2 3.2 0 0 1-3.2 3.2H7.2A3.2 3.2 0 0 1 4 18.8v0ZM16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
      />
    )}
  </Svg>
);

export const Cart = ({
  variant = 'outline',
  size = 20,
  color,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24' {...props}>
    {variant === 'filled' ? (
      <Path
        fill={color}
        fillRule='evenodd'
        d='M1.5 1.75c.237 0 .32 0 .39.005a2.25 2.25 0 0 1 1.964 1.482c.023.066.047.145.112.373l.17.596 1.817 6.358.047.166c.43 1.504.705 2.47 1.282 3.205a4.75 4.75 0 0 0 1.94 1.462c.864.354 1.87.354 3.434.353h2.63c1.582 0 2.598 0 3.47-.36a4.749 4.749 0 0 0 1.948-1.487c.577-.746.844-1.727 1.26-3.254l.046-.168.06-.22.01-.036c.273-1 .49-1.8.607-2.45.12-.663.151-1.259-.016-1.829a3.75 3.75 0 0 0-1.635-2.14c-.506-.312-1.09-.438-1.76-.497-.658-.059-1.487-.059-2.524-.059H5.423l-.015-.052-.008-.026c-.054-.192-.092-.324-.135-.444A3.75 3.75 0 0 0 1.99.258C1.864.25 1.727.25 1.527.25H1.5V1 .25H1a.75.75 0 1 0 0 1.5h.5Zm8.5 15.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm8 0a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M1 1h.5v0c.226 0 .339 0 .44.007a3 3 0 0 1 2.62 1.976c.034.095.065.204.127.42l.17.597m0 0 1.817 6.358c.475 1.664.713 2.496 1.198 3.114a4 4 0 0 0 1.633 1.231c.727.297 1.592.297 3.322.297h2.285c1.75 0 2.626 0 3.359-.302a4 4 0 0 0 1.64-1.253c.484-.627.715-1.472 1.175-3.161l.06-.221c.563-2.061.844-3.092.605-3.906a3 3 0 0 0-1.308-1.713C19.92 4 18.853 4 16.716 4H4.857ZM12 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
      />
    )}
  </Svg>
);
