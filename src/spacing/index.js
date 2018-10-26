import styled from 'styled-components'

const unit = 8

const layout = {
  subUnit: `${unit / 2}px`,
  negSubUnit: `-${unit / 2}px`,
  unit: `${unit}px`,
  tapSize: `${unit * 5}px`,
  desktopWidthMax: '1600px',
  sidebarWidth: '204px',
  inputHeight: '34px'
}

const spacing = {
  '-sm': layout.negSubUnit,
  '-md': `-${unit * 1.5}px`,
  '-lg': `-${unit * 2}px`,
  '-xlg': `-${unit * 3}px`,
  sm: layout.subUnit,
  md: `${unit * 1.5}px`,
  lg: `${unit * 2}px`,
  xlg: `${unit * 3}px`
}

const setSpacingValue = (unit, direction) => {
  const value = direction || unit

  return value ? spacing[value] || value : 0
}

const calcSpacingValues = (
  spacingUnit,
  topDirection,
  rightDirection,
  bottomDirection,
  leftDirection
) => {
  const top = setSpacingValue(spacingUnit, topDirection)
  const right = setSpacingValue(spacingUnit, rightDirection)
  const bottom = setSpacingValue(spacingUnit, bottomDirection)
  const left = setSpacingValue(spacingUnit, leftDirection)

  return `${top} ${right} ${bottom} ${left}`
}

const marginSpacing = (props) =>
  calcSpacingValues(
    props.margin,
    props.marginTop,
    props.marginRight,
    props.marginBottom,
    props.marginLeft
  )

const paddingSpacing = (props) =>
  calcSpacingValues(
    props.padding,
    props.paddingTop,
    props.paddingRight,
    props.paddingBottom,
    props.paddingLeft
  )

const Spacing = styled.div`
  margin: ${marginSpacing};
  padding: ${paddingSpacing};
`

export default Spacing
