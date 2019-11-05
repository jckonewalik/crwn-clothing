import styled, { css } from 'styled-components'

const textStyle = css`
  width: 23%;
`
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TextStyled = styled.span`
  ${textStyle}
`

export const QuantityStyled = styled.span`
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }

  ${textStyle}
`

export const RemoveButtonStyled = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
