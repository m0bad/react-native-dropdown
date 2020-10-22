/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react'
import { Dimensions } from 'react-native'
import proptypes from 'prop-types'
import styled from 'styled-components'
import DropdownModal from './DropdownModal'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const PressableField = ({
  dataArray,
  buttonTitle,
  onSelect,
  dropDownImage,
  imageSize,
  fieldWidth,
  fieldHeight,
  placeholder,
  placeholderColor,
  textColor,
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selected, setSelected] = useState()
  return (
    <>
      <DropdownModal
        items={dataArray}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        buttonTitle={buttonTitle}
        onSelect={onSelect}
        setSelected={setSelected}
      />
      <Field
        fieldWidth={fieldWidth}
        fieldHeight={fieldHeight}
        onPress={() => {
          setShowDropdown(true)
        }}
      >
        <TextConatoner>
          {selected ? (
            <Text color={textColor}>{selected?.key}</Text>
          ) : (
            <PlaceholderText color={placeholderColor}>
              {placeholder}
            </PlaceholderText>
          )}
        </TextConatoner>
        {dropDownImage && (
          <ImageContainer imageSize={imageSize} source={dropDownImage} />
        )}
      </Field>
    </>
  )
}

PressableField.propTypes = {
  dataArray: proptypes.array,
  buttonTitle: proptypes.string,
  dropDownImage: proptypes.string,
  placeholder: proptypes.string,
  placeholderColor: proptypes.string,
  textColor: proptypes.string,
  imageSize: proptypes.number,
  fieldWidth: proptypes.number,
  fieldHeight: proptypes.number,
}

export default PressableField

const Field = styled.TouchableOpacity`
  width: ${p => (p.fieldWidth ? p.fieldWidth : screenWidth * 0.9)}px;
  height: ${p => (p.fieldHeight ? p.fieldHeight : screenWidth * 0.1)}px;
  border-radius: 10px;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  flex-direction: row;
`

const TextConatoner = styled.View`
  width: 75%;
  align-items: flex-start;
  justify-content: center;
`

const Text = styled.Text`
  text-align: center;
  font-size: ${18}px;
  color: ${({ color }) => color || 'black'};
`

const PlaceholderText = styled.Text`
  text-align: center;
  font-size: ${18}px;
  color: ${({ color }) => color || 'grey'};
`

const ImageContainer = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${p => (p.imageSize ? p.imageSize : screenWidth * 0.06)}px;
  height: ${p => (p.imageSize ? p.imageSize : screenWidth * 0.06)}px;
`
