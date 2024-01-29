import React from "react";
import {Text, View, FlatList, Image} from 'react-native';
import {styles} from './styles';

const DATA = [
    {
    id:'1',
    title: 'Data Structures',
    imageSource: require('../../assets/images/anh1.jpg'),
    },
    {
    id:'1',
    title: 'STL',
    imageSource: require('../../assets/images/anh1.jpg'),
    },
    {
    id:'3',
    title: 'C++',
    imageSource: require('../../assets/images/anh1.jpg'),
    },
    {
    id:'3',
    title: 'C++',
    imageSource: require('../../assets/images/anh1.jpg'),
    },
    {
    id:'4',
    title: 'C++',
    imageSource: require('../../assets/images/anh1.jpg'),

    },
    {
    id:'5',
    title: 'C++',
    imageSource: require('../../assets/images/anh1.jpg'),

    },
    {
    id:'6',
    title: 'C++',
    imageSource: require('../../assets/images/anh1.jpg'),

    },
];
const Item = ({title, imageSource}) => {
    return(
        <View style ={styles.item}>
            <Image source ={imageSource} styles ={styles.avatar}></Image>
            <Text style = {styles.text}>{title}</Text>
        </View>
    );
};

const renderItem = ({item}) => (
    <Item imageSource={item.imageSource} title={item.title}/>
);

const ListCourse =() =>{
    return(
        <View style = {styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtrator={item => item.id}
            />
        </View>
    );
};

export default React.memo(ListCourse)