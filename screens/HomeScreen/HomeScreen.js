import React, { useState, useEffect } from 'react'
import styles from './styles';
import { Text, View, FlatList, Image } from 'react-native'
import firebase from '../../firebase/config'; 

export default function HomeScreen(props) {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        const playersList = []
        firebase.firestore().collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                playersList.push(doc.data())
            });
            setPlayers(playersList)
        });    
    }, [players.length]);


    const renderItem = ( {item} ) => (
        <View style={styles.listItem}>
            <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
            <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold"}}>{item.firstName} {item.lastName}</Text>
                <Text>Position: {item.position}</Text>
                <Text>Club: {item.club}</Text>
            </View>
            
        </View>
    );

        console.log(players);

    return (
        <View style={styles.container}>
            <FlatList
                style={{flex:1}}
                data={players}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
       </View>
    )
}