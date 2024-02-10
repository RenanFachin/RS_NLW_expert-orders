import { useState } from 'react'
import { View, FlatList, SectionList, Text } from 'react-native'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { Product } from '@/components/product'

import { CATEGORIES, MENU } from '@/utils/data/products'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={0} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category}
        renderItem={
          ({ item }) => (
            <CategoryButton
              title={item}
              isSelected={item === category}
              onPress={() => handleCategorySelect(item)} />
          )}
        horizontal
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        className='flex-1 p-5'
        sections={MENU}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Product data={item} />
        )}
        renderSectionHeader={(
          { section: { title } }
        ) => (
          <Text className='text-white text-xl mt-8 mb-3'>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // respiro no final da aplicação
      />
    </View>
  )
}
