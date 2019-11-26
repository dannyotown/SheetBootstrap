<<<<<<< HEAD
import * as React from "react";
import { classNameType, iconSize } from "../../types";

export interface InputTypes extends classNameType {
  background?: boolean;
  children?: React.ReactNode;
  checked?: boolean;
  containerClass?: string;
  disabled?: boolean;
  error?: string;
  filled?: boolean;
  gap?: boolean;
  group?: boolean;
  hint?: string;
  icon?: string;
  iconBrand?: boolean;
  iconClass?: string;
  iconLight?: boolean;
  iconRegular?: boolean;
  id?: string;
  iconSize?: iconSize;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | ((ref: React.RefObject<HTMLInputElement>) => void)
    | null;
  outline?: boolean;
  label?: string | boolean;
  labelClass?: string;
  labelId?: string;
  noTag?: boolean;
  size?: "sm" | "lg";
  success?: string;
  tag?: string;
  type?: string;
  validate?: boolean;
  value?: number | string;
  valueDefault?: number | string;
  getValue?: (value: number | string) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
  onIconMouseEnter?: (e: React.SyntheticEvent<MouseEvent>) => void;
  onIconMouseLeave?: (e: React.SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}

declare class MDBInput extends React.Component<InputTypes, any> {}
=======
import * as React from 'react';

declare class MDBInput extends React.Component<
  {
    background?: boolean;
    className?: string;
    children?: React.ReactNode;
    checked?: boolean;
    containerClass?: string;
    disabled?: boolean;
    error?: string;
    filled?: boolean;
    gap?: boolean;
    group?: boolean;
    hint?: string;
    icon?: string;
    iconBrand?: boolean;
    iconClass?: string;
    iconLight?: boolean;
    iconRegular?: boolean;
    iconSize?:
      | 'lg'
      | '1x'
      | '2x'
      | '3x'
      | '4x'
      | '5x'
      | '6x'
      | '7x'
      | '8x'
      | '9x'
      | '10x';
    id?: string;
    inputRef?:
      | React.RefObject<HTMLInputElement>
      | ((ref: React.RefObject<HTMLInputElement>) => void)
      | null;
    outline?: boolean;
    label?: string | boolean;
    labelClass?: string;
    labelId?: string;
    noTag?: boolean;
    size?: 'sm' | 'lg';
    success?: string;
    tag?: string;
    type?: string;
    validate?: boolean;
    value?: number | string;
    valueDefault?: number | string;
    getValue?: (value: number | string) => void;
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
    onIconClick?: (e: React.SyntheticEvent<MouseEvent>) => void;
    onIconMouseEnter?: (e: React.SyntheticEvent<MouseEvent>) => void;
    onIconMouseLeave?: (e: React.SyntheticEvent<MouseEvent>) => void;
    [rest: string]: any;
  },
  any
> {}
>>>>>>> 9bef67a379cd26a30ac22a5aa48192e14bd08a87

export default MDBInput;
