import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface HeaderProps {
  title: string
  cartQuantity?: number
}

export function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image
          source={require("@/assets/logo.png")}
          className="h-6 w-32"
        />

        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>


      {
        cartQuantity > 0 ? (
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center top-3 z-10 -right-3.5">
              <Text className="text-slate-900 font-bold text-xs">
                {cartQuantity}
              </Text>
            </View>
            <Feather name="shopping-bag" color={colors.white} size={28} />
          </TouchableOpacity>
        )
          :
          <TouchableOpacity className="mt-4" activeOpacity={0.7}>
            <Feather name="shopping-bag" color={colors.white} size={28} />
          </TouchableOpacity>
      }



    </View>
  )
}