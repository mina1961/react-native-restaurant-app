
import { StyleSheet, View, ScrollView } from 'react-native';
import CategoryItemCard from '../components/CategoryItemCard';
import { getCategoryItems } from '../data/Data';
import { useEffect } from 'react';

export default function CategoryScreen({
    route,
    navigation,
}) {
    // navigation.setOptions({
    //     title: route.params.categoryName,
    // });
    useEffect(() => {
    navigation.setOptions({
        title: route.params.categoryName,
    });
}, [navigation, route.params.categoryName]);
    const categiryId = route.params.categoryId;
    const categoryItems = getCategoryItems(categiryId);
    return (
        <ScrollView style={styles.container}>
            {categoryItems.map(item => (
                <CategoryItemCard
                    key={item.id}
                    {...item}
                    // imageUrl={item.imageUrl}
                    onPress={() => navigation.navigate('Details', { item })}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});