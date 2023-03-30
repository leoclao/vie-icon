// import { ICON_NAME } from './../utils/icons';
import { ICON_NAME } from "../utils/icons";
import { COMMONS } from "../utils/utils";

// Interface
export interface FontIconProps {
  // name: keyof typeof ICON_NAME;
  // color?: string;
  // size?: string;
  name: string;
  color?: string;
  size?: string;
}

// Class icon
export class FontIcon {
  // private readonly _name: string;
  // private readonly _color: string;
  // private readonly _size: string;
  private readonly name: string;
  private readonly color?: string;
  private readonly size?: string;

  constructor(props: FontIconProps) {
    // this._name = ICON_NAME[props.name];
    // this._color = props.color || '';
    // this._size = props.size || '';
    this.name = props.name;
    this.color = props.color;
    this.size = props.size;
  }

  // public get iconHtml(): string {
  //   const iconColor = this._color ? ` ${this._color}` : ``;
  //   const iconSize = this._size ? ` ${this._size}` : ``;

  //   return `<i class="${COMMONS.PREFIX} ${this._name} ${iconColor}${iconSize}"></i>`;
  // }

  // DOM icon
  get iconHtml(): string {
    // const iconColor = this._color ? ` ${this._color}` : ``;
    // const iconSize = this._size ? ` ${this._size}` : ``;
    // const iconHtml = `<i class="${COMMONS.PREFIX} ${this._name} ${iconColor}${iconSize}"></i>`;
    const iconColor = this.color ? ` ${this.color}` : ``;
    const iconSize = this.size ? ` ${this.size}` : ``;
    const iconHtml = `<i class="${COMMONS.PREFIX} ${this.name} ${iconColor}${iconSize}"></i>`;

    return iconHtml;
  }

  static create(name: keyof typeof ICON_NAME, color?: string, size?: string): FontIcon {
    return new FontIcon({
      name: ICON_NAME[name],
      color: color,
      size: size,
    });
  }
};

// Create Icon
// export const createIcon = (name: keyof typeof ICON_NAME, color?: string, size?: string): FontIcon => {
//   return new FontIcon({name, color, size});
// };
