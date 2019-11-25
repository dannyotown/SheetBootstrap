import * as React from "react";
import InputProps from "../../Input/InputTypes";

declare class MDBInput extends React.Component<
  //!Moje typy dla PRO werjsi
  [
    InputProps,
    {
      counter?: boolean | number;
      getCounter?: (value: number | string) => void;
    }
  ],
  any
> {}

export default MDBInput;
