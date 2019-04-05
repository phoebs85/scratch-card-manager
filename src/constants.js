export const unit = 8

export const neutrals = {
  neutral00: '#fff',
  neutral10: '#edf1f3',
  neutral15: '#dbdbdb',
  neutral20: '#d9dfe3',
  neutral25: '#8d9ba7',
  neutral30: '#727272',
  neutral40: '#3d464b',
  neutral50: '#000'
}

export const border = {
  color: neutrals.neutral15,
  radius: '4px',
  shorthand: `1px solid ${neutrals.neutral15}`
}

export const colors = {
  lightBlue: '#dbe9f9',
  messengerBlue: '#4990e2',
  darkBlue: '#3b75b7',
  darkGreen: '#336534',
  darkYellow: '#EEB902',
  white: '#fff',
}

export const fontSizes = {
  huge: `${unit * 3}px`, // 24px
  bigger: `${unit * 2.25}px`, // 18px
  big: `${unit * 2}px`, // 16px
  normal: `${unit * 1.75}px`, // 14px
  small: `${unit * 1.5}px`, // 12px
  smaller: `${unit * 1.25}px` // 10px
}

export const fontWeight = {
  normal: 300,
  semiBold: 400,
  bold: 500
}

export const layout = {
  subUnit: `${unit / 2}px`,
  unit: `${unit}px`,
  tapSize: `${unit * 5}px`,
  desktopWidthMax: '1600px',
  sidebarWidth: '204px',
  inputHeight: '34px'
}

export const spacing = {
  '-sm': layout.negSubUnit,
  '-md': `-${unit * 1.5}px`,
  '-lg': `-${unit * 2}px`,
  '-xlg': `-${unit * 3}px`,
  sm: layout.subUnit,
  md: `${unit * 1.5}px`,
  lg: `${unit * 2}px`,
  xlg: `${unit * 3}px`
}

export const typography = {
  fontFamily: "'Roboto', sans-serif",
  headerFontFamily: "'Times', serif"
}
