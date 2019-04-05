import styled from 'styled-components'

import {colors} from '../../constants'
import Button from '../button'

const PrimaryButton = styled(Button)`
  background: ${colors.messengerBlue};
  color: ${colors.white};

  &:focus {
    background: ${colors.messengerBlue};
    color: ${colors.white};
  }

  &:active {
    background: ${colors.darkBlue};
    color: ${colors.white};
  }
  &[disabled] {
    background: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
    color: ${colors.white};
  }
`
export default PrimaryButton