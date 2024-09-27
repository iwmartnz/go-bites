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

export const Menu = ({
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
        d='M4.75 2a.75.75 0 0 0-1.5 0v5.381c0 .534 0 .955.119 1.348.105.346.277.667.506.947.261.317.611.55 1.056.846l.078.052 1.241.827V22a.75.75 0 0 0 1.5 0V11.401l1.241-.827.078-.052c.445-.296.795-.529 1.055-.846.23-.28.402-.601.507-.947.12-.393.12-.814.119-1.348V2a.75.75 0 0 0-1.5 0v5.287c0 .673-.008.853-.054 1.006a1.25 1.25 0 0 1-.23.43c-.101.123-.247.23-.807.603l-.409.273V2a.75.75 0 1 0-1.5 0v7.599l-.409-.273c-.56-.373-.706-.48-.807-.603a1.25 1.25 0 0 1-.23-.43c-.046-.153-.054-.333-.054-1.006V2Zm13 0a.75.75 0 0 0-1.5 0v11.34c-.816.192-1.58.681-2.172 1.323-.78.845-1.328 2.022-1.328 3.337 0 1.315.547 2.492 1.328 3.337.77.835 1.833 1.413 2.922 1.413 1.09 0 2.152-.578 2.922-1.413.78-.845 1.328-2.022 1.328-3.337 0-1.315-.547-2.492-1.328-3.337-.592-.642-1.356-1.131-2.172-1.324V2Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M7 2v9m0 11V11m0 0L5.425 9.95c-.521-.347-.782-.521-.97-.75a2 2 0 0 1-.369-.69C4 8.228 4 7.915 4 7.288V2m3 9 1.575-1.05c.521-.347.782-.521.97-.75a2 2 0 0 0 .369-.69C10 8.228 10 7.915 10 7.288V2m7 0v12m0 0c-1.657 0-3.5 1.79-3.5 4s1.843 4 3.5 4 3.5-1.79 3.5-4-1.843-4-3.5-4Z'
      />
    )}
  </Svg>
);

export const Orders = ({
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
        d='M3.98 1.795c1.07-.545 2.47-.545 5.27-.545h5.5c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.545 1.07.545 2.47.545 5.27v5.5c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-1.07.545-2.47.545-5.27.545h-5.5c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185c-.545-1.07-.545-2.47-.545-5.27v-5.5c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.98 1.795ZM6.5 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Zm-3.5 4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Zm-3.5 4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M10 17h8m-8-5h8m-8-5h8M7 7a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0H6m1 5a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0H6m1 5a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0H6m4 5h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14v-4c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 2 16.8 2 14 2h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 4.73C2 5.8 2 7.2 2 10v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22Z'
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

export const PlusSquare = ({
  variant = 'outline',
  size = 24,
  color,
  ...props
}: IconProps) => (
  <Svg width={size} height={size} fill='none' viewBox='0 0 24 24' {...props}>
    {variant === 'filled' ? (
      <Path
        fill={color}
        fillRule='evenodd'
        d='M4.526 1.904C5.81 1.25 7.49 1.25 10.85 1.25h2.3c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622c.654 1.284.654 2.964.654 6.324v2.3c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622c-1.284.654-2.964.654-6.324.654h-2.3c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C1.25 18.19 1.25 16.51 1.25 13.15v-2.3c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622ZM12.75 8a.75.75 0 0 0-1.5 0v3.25H8a.75.75 0 0 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0v-3.25H16a.75.75 0 0 0 0-1.5h-3.25V8Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M8 12h4m0 0h4m-4 0V8m0 4v4m-.4 6h.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C22 17.44 22 15.76 22 12.4v-.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C17.44 2 15.76 2 12.4 2h-.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C2 6.56 2 8.24 2 11.6v.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C6.56 22 8.24 22 11.6 22Z'
      />
    )}
  </Svg>
);

export const Edit = ({
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
        d='M13.424 5.515 5.68 13.259c-.509.51-.764.764-.966 1.055a4 4 0 0 0-.443.827c-.129.33-.2.683-.34 1.389l-.604 3.014c-.094.472-.141.708-.072.876a.6.6 0 0 0 .325.325c.169.07.405.023.877-.072l3.014-.603c.706-.14 1.059-.211 1.388-.34.293-.115.57-.264.828-.444.29-.202.545-.457 1.054-.966l7.744-7.744a6.75 6.75 0 0 1-5.06-5.061Zm6.411 3.71.963-.963c.792-.792 1.188-1.188 1.336-1.644a2 2 0 0 0 0-1.237c-.148-.456-.544-.852-1.336-1.644l-.535-.535c-.792-.792-1.188-1.188-1.645-1.337a2 2 0 0 0-1.236 0c-.457.149-.853.545-1.645 1.337l-.962.962c.024.515.068.875.154 1.195A5.25 5.25 0 0 0 18.64 9.07c.32.086.68.13 1.194.154Z'
        clipRule='evenodd'
      />
    ) : (
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 5a4 4 0 0 0 4 4M4 20l.62-3.1c.141-.706.212-1.06.341-1.389.115-.292.263-.57.443-.827.202-.29.457-.545.966-1.054L16 4c.545-.545.818-.818 1.112-.964a2 2 0 0 1 1.776 0c.294.146.567.419 1.112.964v0c.545.545.818.818.964 1.112a2 2 0 0 1 0 1.776c-.146.294-.419.567-.964 1.112l-9.63 9.63c-.51.51-.764.764-1.054.966-.257.18-.535.328-.827.443-.33.13-.683.2-1.39.341L4 20Z'
      />
    )}
  </Svg>
);
