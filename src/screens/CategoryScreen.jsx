
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import CategoryItemCard from '../components/CategoryItemCard';
import { useEffect, useState } from 'react';
import { mealApi } from '../api';


export default function CategoryScreen({
    route,
    navigation,
}) {

    navigation.setOptions({
        title: route.params.categoryName,

    });
    const categiryId = route.params.categoryId;
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealApi.getByCategoryId(categiryId)
        .then(result => setMeals(result))
        .catch(error => Alert.alert('Error', error.message));
    }, [categiryId]);

    return (
        <ScrollView style={styles.container}>
            {meals.map(item => (
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