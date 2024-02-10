import { useState, useRef } from 'react'
import { View, FlatList, SectionList, Text } from 'react-native'
import { Link } from 'expo-router'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { Product } from '@/components/product'

import { CATEGORIES, MENU } from '@/utils/data/products'
import { useCartStore } from '@/stores/cart-store'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)
  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: sectionIndex,
        itemIndex: 0
      })
    }
  }

  const cartStore = useCartStore()
  const cartQuantityItems = cartStore.products.reduce((totalAcumulado, currentProduct) => totalAcumulado + currentProduct.quantity, 0)

  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantity={cartQuantityItems} />

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
        ref={sectionListRef}
        className='flex-1 p-5'
        sections={MENU}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={(
          { section: { title } }
        ) => (
          <Text
            className='text-white text-xl mt-8 mb-3'>
            {title}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // respiro no final da aplicação
      />
    </View>
  )
}
