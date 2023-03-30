export interface FontIconProps {
  name: string;
  color?: string;
  size?: string;
}

export declare class FontIcon {
  constructor(props: FontIconProps);
  get iconHTML(): string;
}