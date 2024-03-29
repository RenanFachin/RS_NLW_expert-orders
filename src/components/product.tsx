import { forwardRef } from 'react' // repassando referência para quando usar o <Link>
import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";

interface ProductDataProps {
  title: string
  description: string
  thumbnail: ImageProps
  quantity?: number // Quantidade só é exibida no carrinho
}

interface ProductProps extends TouchableOpacityProps {
  data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...props }, ref) => {
  return (
    <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...props}>
      <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />

      <View className="flex-1 ml-3">
        <View className='flex-row items-center justify-between'>
          <Text
            className="text-slate-100 font-subtitle text-base flax-1">
            {data.title}
          </Text>

          {
            data.quantity && <Text className='text-lime-300  font-subtitle text-xs'>
              x{
                data.quantity
              }
            </Text>
          }
        </View>


        <Text className="text-slate-400 text-xs leading-5 mt-0.5">{data.description}</Text>
      </View>
    </TouchableOpacity>
  )
})