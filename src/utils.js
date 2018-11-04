/**
 * Get the real offset
 * @param element
 * @returns {Object} offset
 */
export const getOffset = (element) => {
  let offset = {
    left: 0,
    top: 0
  }
  let clientRect = element.getBoundingClientRect()

  while (element) {
    offset.top += element.offsetTop
    offset.left += element.offsetLeft
    element = element.offsetParent
  }

  // Calculate the delta between offset values and clientRect values
  let deltaLeft = offset.left - clientRect.left
  let deltaTop = offset.top - clientRect.top

  return {
    left:
      deltaLeft < 0
        ? offset.left + Math.abs(deltaLeft)
        : offset.left - Math.abs(deltaLeft),
    top:
      deltaTop < 0
        ? offset.top + Math.abs(deltaTop)
        : offset.top - Math.abs(deltaTop)
  }
}
