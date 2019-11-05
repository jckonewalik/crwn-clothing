import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleStyled,
  SubTitleStyled,
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        <TitleStyled>{title.toUpperCase()}</TitleStyled>
        <SubTitleStyled>SHOP NOW</SubTitleStyled>
      </ContentContainer>
    </MenuItemContainer>
  )
}
export default withRouter(MenuItem)
