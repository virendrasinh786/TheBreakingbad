import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../commonComponents/Header';
import styles from './styles';
import { images } from '../../common/images';
import { FlatList } from 'react-native-gesture-handler';
import characterServices from '../../services/characterServices';
import Icon from 'react-native-vector-icons/Feather';
import { color } from '../../common/colors';
import searchServices from '../../services/searchServices';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../../store/Slice/favouriteSlice';
import commonStyles from '../../common/commonStyles';

const Favourite = ({ navigation }) => {

     const { backgroundContainer, innerContainer, noFavTxt} = styles;
     const { charName, nickName, charCard, charImage, charCardFooter, 
          heartImage, emptyView} = commonStyles;
     const dispatch = useDispatch();
     const favourites = useSelector(state => state.favourites);

     const onCharacterClick = (item, index) => {
          let otherFavourites = favourites && favourites?.data?.filter((character) => (character?.name != item?.name)) || [];
          navigation.navigate("Detail", { character: item, otherFavourites: otherFavourites })
     }

     const onFavouriteClick = (favourite) => {
          dispatch(toggleFavourite({ favourite: favourite, id: favourite?.char_id }));
     }

     const renderItem = ({ item, index }) => (
          <TouchableOpacity style={charCard} onPress={() => { onCharacterClick(item, index) }}>
               <Image source={{ uri: item?.img }} style={charImage} />
               <View style={charCardFooter}>
                    <View>
                         <Text style={charName}>{item?.name}</Text>
                         <Text style={nickName}>{item?.nickname}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { onFavouriteClick(item) }}>
                         <Image source={images.greenHeart} style={heartImage} />
                    </TouchableOpacity>
               </View>
          </TouchableOpacity>
     )

     return (
          <SafeAreaView style={backgroundContainer}>
               <StatusBar backgroundColor={color.gray1N} />
               <Header
                    titleText={"Favourites"}
                    titleColor={{color: color.green}}
                    rightIcon={[
                         {
                              type: "icon",
                              name: "x"
                         }
                    ]}
                    navigation={() => {navigation.goBack()}}
               />
               <View style={innerContainer}>
                    { favourites?.data?.length == 0 &&
                         <View style={emptyView}>
                              <Text style={noFavTxt}>{"No Favourites"}</Text>
                         </View>
                         ||
                         <FlatList
                              data={favourites?.data}
                              numColumns={2}
                              renderItem={renderItem}
                              keyExtractor={item => item.char_id}
                         />}
               </View>
          </SafeAreaView>
     )
}

export default Favourite;