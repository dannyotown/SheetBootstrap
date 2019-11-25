import * as React from "react";
import Props from '../../Input/index.d' //!typy z Inputa free

declare class MDBInput extends React.Component< //!Moje typy dla PRO werjsi
  {
    counter?: boolean | number;
    getCounter?: (value: number | string) => void;
  },
  Props,
  any
> {}

export default MDBInput;
