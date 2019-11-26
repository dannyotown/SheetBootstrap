export type classNameType = { className?: string };
export type color =
  | "blue"
  | "red"
  | "teal"
  | "dark-grey"
  | "dark"
  | "blue-grey"
  | "amber"
  | "purple";

export type colorType = { color?: color };

export type colSizeTypes = {
  size?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto";
  xs?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  sm?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  md?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  lg?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  xl?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
};

export type gradient =
  | "amy-crisp"
  | "aqua"
  | "blue"
  | "cloudy-knoxville"
  | "deep-blue"
  | "dusty-grass"
  | "frozen-dreams"
  | "heavy-rain"
  | "juicy-peach"
  | "lady-lips"
  | "mean-fruit"
  | "morpheus-den"
  | "near-moon"
  | "night-fade"
  | "peach"
  | "purple"
  | "rainy-ashville"
  | "rare-wind"
  | "ripe-malinka"
  | "spring-warmth"
  | "sunny-morning"
  | "tempting-azure"
  | "warm-flame"
  | "winter-neva"
  | "young-passion";

export type gradientType = { gradient?: gradient };

export type iconSize =
  | "lg"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";
