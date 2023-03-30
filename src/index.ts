export { FontIconProps, FontIcon, createIcon } from './app/icon';

// import {COMMONS} from './utils/utils';

// export class FontIcon {
//   name: string;
//   color: string;
//   size: string;

//   constructor(name: string, color: string = '', size: string = '') {
//     this.name = name;
//     this.color = color;
//     this.size = size;
//   }

//   get iconHtml(): string {
//     const iconColor = this.color ? ` ${this.color}` : '';
//     const iconSize = this.size ? ` ${this.size}` : '';

//     return `<i class="${COMMONS.PREFIX} ${COMMONS.PREFIX}-${this.name}${iconColor}${iconSize}"></i>`;
//   }
// }