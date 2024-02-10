import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

// Este componente é uma composição de componentes

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 bg-lime-500 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}


interface ButtonTextProps {
  children: ReactNode
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-base text-black font-heading mx-2">
      {children}
    </Text>
  )
}


interface ButtonIconProps {
  children: ReactNode
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export {
  Button
}