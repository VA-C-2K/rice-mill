import { Button } from '@chakra-ui/react';
import React from 'react';

const CustomButton = (props) => {
    const { children , onClick , variant,size=["sm", "md"] ,id,w,h,style,isLoading,loadingText,leftIcon,bg="#609966",color="#EDF1D6",_hover={ bg: "#4a875d" }} = props;
  return (
    <Button
          backgroundColor={bg}
          color={color}
          _hover={_hover}
          variant={variant}
          onClick={onClick}
          size={size}
          id={id}
          w = {w}
          h={h}
          style={style}
          isLoading={isLoading}
          loadingText = { loadingText}
          leftIcon={leftIcon}
        >
        {children}
    </Button>
  )
}


export default CustomButton