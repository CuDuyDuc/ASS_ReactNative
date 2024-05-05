import React from 'react'
import { ButtonComponent, ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../component'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'

const EventScreen = () => {
  return (
    <ContainerComponent>
      <SectionComponent>
      <RowComponent justify='space-between' styles={{ marginTop: 75 }}>
          <RowComponent styles={{ flexDirection: 'column' }}>
            <TextComponent text='Giá' />
            <RowComponent>
              <TextComponent text='$' styles={{ marginRight: 10 }} size={24} font={FONTFAMILY.poppins_bold} color={COLORS.HEX_ORANGE} />
              <TextComponent text='200.5$' font={FONTFAMILY.poppins_bold} size={24} />
            </RowComponent>
          </RowComponent>
          <ButtonComponent styles={{ height: 56 }} text='Thêm Vào Giỏ Hàng' type='orange' />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default EventScreen;