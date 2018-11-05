import React from 'react'
import Section from './section'
import FlexItem from './flex/flex-item'
export const backgroundElementMapper = {
  0: (width, height) => (
    <img width={width} height={height} src="/laughing.gif" alt="scratch card" />
  ),
  400: (width, height) => (
    <img
      width={width}
      height={height}
      src="https://jennamolby.com/wp-content/uploads/2016/08/400.png"
      alt="scratch card"
    />
  ),
  500: (width, height) => (
    <img
      width={width}
      height={height}
      src="https://jennamolby.com/wp-content/uploads/2016/08/500.png"
      alt="scratch card"
    />
  ),
  default: (width, height, val) => (
    <Section display="flex" width={width} height={height} textAlign="center">
      <FlexItem>{val}</FlexItem>
      <FlexItem>points!</FlexItem>
    </Section>
  )
}
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

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
