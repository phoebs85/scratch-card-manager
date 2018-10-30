import React from 'react'
import throttle from 'lodash.throttle'
// Components
import ScratchCardSC from './scratch-card-sc'
import ScratchCardContentSC from './scratch-card-content-sc'
import CanvasWrapperSC from './canvas-wrapper-sc'
import {getOffset} from '../utils'

// TODO: disable context menu

// accepts only one child as prop
// if children content of this component overflow, it will be hidden
class ScratchCard extends React.Component {
  constructor(props) {
    super(props)
    this.ctx = null
    this.offset = null
    this.state = {
      foregroundRendered: false,
      percentScratched: 0,
      finished: false
    }
    this.updatePercentScratched.bind(this)
  }
  renderForeground() {
    const {width, height} = this.refs.canvas
    if (this.props.imgURL) {
      const image = new Image()
      image.src = this.props.imgURL
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0, width, height)
        this.setState({foregroundRendered: true})
      }
    } else {
      this.ctx.fillStyle = 'silver'
      this.ctx.fillRect(0, 0, width, height)
      this.setState({foregroundRendered: true})
    }
  }

  scratching = throttle((event) => {
    event.preventDefault()
    const radius = 20
    const mouseX = event.clientX - this.offset.left
    const mouseY = event.clientY - this.offset.top
    const {brush = 'circle'} = this.props
    if (brush === 'spray') {
    } else {
      this.ctx.clearRect(
        mouseX - radius / 2,
        mouseY - radius / 2,
        radius,
        radius
      )
    }
    this.updatePercentScratched()
  }, 40)

  updatePercentScratched() {
    let counter = 0
    const {width, height} = this.refs.canvas
    // Sub-rectangle ratio, determines how much outer space within the image
    // is being ignored for percentage cleared calculations
    const {subRectRatio = 1, percentToFinish = 50} = this.props
    const imageData = this.ctx.getImageData(
      Math.round(((1 - subRectRatio) / 2) * width),
      Math.round(((1 - subRectRatio) / 2) * height),
      Math.round(subRectRatio * width),
      Math.round(subRectRatio * height)
    )
    const imageDataLength = imageData.data.length
    for (let i = 0; i < imageDataLength; i += 4) {
      // increment when pixel is completely clear
      if (
        imageData.data[i] === 0 &&
        imageData.data[i + 1] === 0 &&
        imageData.data[i + 2] === 0 &&
        imageData.data[i + 3] === 0
      ) {
        counter++
      }
    }
    const newPercentScratched =
      Math.round(
        (counter / (subRectRatio * subRectRatio * width * height)) * 10000
      ) / 100
    this.setState({
      percentScratched: newPercentScratched,
      finished: newPercentScratched >= percentToFinish
    })
  }

  initMouseEventListeners() {
    const canvas = this.refs.canvas
    const scratching = this.scratching
    this.offset = getOffset(canvas)
    canvas.addEventListener('mousedown', (event) => {
      event.preventDefault()
      canvas.addEventListener('mousemove', scratching)
      document.body.addEventListener('mouseup', function cancelScratch() {
        canvas.removeEventListener('mousemove', scratching)
        document.body.removeEventListener('mouseup', cancelScratch)
      })
    })
  }
  initTouchEventListeners() {
    const canvas = this.refs.canvas
    const scratching = this.scratching
    this.offset = getOffset(canvas)
    canvas.addEventListener('touchstart', (event) => {
      event.preventDefault()
      canvas.addEventListener('touchmove', scratching)
      document.body.addEventListener('touchend', function cancelScratch() {
        canvas.removeEventListener('touchmove', scratching)
        document.body.removeEventListener('touchend', cancelScratch)
      })
    })
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d')
    this.renderForeground()
    this.initMouseEventListeners()
    this.initTouchEventListeners()
    window.addEventListener(
      'resize',
      throttle(() => {
        this.offset = getOffset(this.refs.canvas)
      }, 100)
    )

    window.addEventListener(
      'scroll',
      throttle(() => {
        this.offset = getOffset(this.refs.canvas)
      }, 16)
    )
  }

  render() {
    const {
      children,
      height,
      width,
      subRectRatio,
      percentToFinish,
      demo
    } = this.props
    return (
      <div>
        {demo && (
          <div>
            <h3>
              Status:{' '}
              <strong>
                {this.state.finished ? 'Complete!' : 'Ongoing...'}
              </strong>
            </h3>
            <div>Sub-Rectangle Ratio: {subRectRatio || 1} </div>
            <div>Percent To Finish: {percentToFinish || 50}%</div>
            <div>{this.state.percentScratched}% Clear</div>
          </div>
        )}

        <ScratchCardSC width={`${width}px`} height={`${height}px`}>
          {this.state.foregroundRendered && (
            <ScratchCardContentSC
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {React.Children.only(children)}
            </ScratchCardContentSC>
          )}
          <CanvasWrapperSC>
            <canvas
              onContextMenu={(event) => event.preventDefault()}
              ref="canvas"
              width={`${width}px`}
              height={`${height}px`}
            />
          </CanvasWrapperSC>
        </ScratchCardSC>
      </div>
    )
  }
}

export default ScratchCard
