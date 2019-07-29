import * as React from 'react';

declare const MDBRating: React.FunctionComponent<{
  containerClassName?: string;
  data?: { icon?: string; tooltip?: string; choosed?: boolean; [rest: string]: any; };
  fillClassName?: string;
  fillColors?: boolean | string[];
  iconClassName?: string;
  iconFaces?: boolean;
  iconSize?: string;
  iconRegular?: boolean;
  tag?: string;
  getValue?: () => void;
  [rest: string]: any;
}>;

export default MDBRating;
