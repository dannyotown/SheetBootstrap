import * as React from "react";
import InputProps from '../../Input/InputTypes' //!typy z Inputa free

declare class MDBInput extends React.Component< //!Moje typy dla PRO werjsi
  InputProps,
  {
    counter?: boolean | number;
    getCounter?: (value: number | string) => void;
  },
  any
> {}

export default MDBInput;
