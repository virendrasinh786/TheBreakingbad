import { ActivityIndicator, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
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

const Home = ({ navigation }) => {

     const { emptyTxt, backgroundContainer } = styles;
     const { charName, nickName, charCard, charImage, charCardFooter,
          heartImage, emptyView, flexContainer, pv40 } = commonStyles
     const dispatch = useDispatch();
     const [characters, setCharacters] = useState([]);
     const [limit, setLimit] = useState(10);
     const [skip, setSkip] = useState(0)
     const [loadding, setLoadding] = useState(false);
     const [isSearchActive, setIsSearchActive] = useState(false);
     const [refresh, setRefresh] = useState(false);
     const [leftIcon, setLeftIcon] = useState("");
     const [headerBackground, setHeaderBackground] = useState("");
     const [searchTxt, setSearchTxt] = useState("");
     const [searchList, setSearchList] = useState([]);
     const favourites = useSelector(state => state.favourites);

     const getCharacters = async () => {
          setLoadding(true);
          let response = await characterServices.getAllCharecters({ limit: limit, skip: skip });
          if (response?.status == 200 && response?.data?.total >= limit) {
               response.data.data.forEach(character => {
                    characters.push(character)
               });
               setCharacters(characters);
               setLimit(limit + 2);
               setSkip(skip + 2);
          }
          setLoadding(false);
     }

     const onChangeSearchText = async (search) => {
          setSearchTxt(search);
          setLoadding(true);
          let response = await searchServices.getSearchResult(search);
          if (response?.status == 200) {
               setSearchList(response.data);
          }
          setLoadding(false);

     }

     useState(() => {
          setLoadding(true);
          getCharacters();
     }, []);

     useState(() => {
          onChangeSearchText("");
     }, [isSearchActive]);


     const onCharacterClick = (item, index) => {
          let otherCharacters = characters?.filter((character) => (character?.name != item?.name));
          navigation.navigate("Detail", { character: item, otherCharacters: otherCharacters })
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
                         {favourites?.data?.some(favourite => favourite?.char_id == item?.char_id) &&
                              <Image source={images.greenHeart} style={heartImage} />
                              ||
                              <Icon name='heart' size={20} color={color.gray1N} />
                         }
                    </TouchableOpacity>
               </View>

          </TouchableOpacity>
     )


     const searchStatusChange = (status) => {
          setIsSearchActive(status);
          setRefresh(!refresh);
     }

     const renderEmptyComponent = ({ }) => (
          <View style={emptyView}>
               <Text style={emptyTxt}>{"No character found"}</Text>
          </View>
     )
     return (
          <SafeAreaView style={backgroundContainer}>
               <StatusBar backgroundColor={color.gray1N} />
               <Header
                    titleText={"The Breaking bad"}
                    onSearchIconClick={(status) => { searchStatusChange(status) }}
                    addLeftIcon={(leftIcon) => { setLeftIcon(leftIcon) }}
                    leftIcon={leftIcon}
                    leftIconClick={() => { }}
                    isSearchActive={isSearchActive}
                    onChangeSearchText={(search) => { onChangeSearchText(search) }}
                    placeholderText={"Search"}
                    background={headerBackground}
                    setBackground={(background) => { setHeaderBackground(background) }}
                    navigation={(screen) => { navigation.navigate(screen) }}
                    searchClose={() => { }}
                    rightIcon={[
                         {
                              type: "icon",
                              name: "search"
                         },
                         {
                              type: "image",
                              name: "heart",
                              action: "changeIcon",
                              image: images.greenHeart
                         }
                    ]}
               />
               <View style={[backgroundContainer]}>
                    {loadding && characters?.length == 0 &&
                         <View style={emptyView}>
                              <ActivityIndicator color={color.green} size={20} />
                         </View>
                         ||
                         <FlatList
                              data={isSearchActive && searchList || characters}
                              numColumns={2}
                              style={[flexContainer, pv40]}
                              renderItem={renderItem}
                              keyExtractor={item => item.char_id}
                              onEndReached={() => { getCharacters() }}
                              onEndReachedThreshold={50}
                              ListEmptyComponent={renderEmptyComponent}
                         />}
               </View>
          </SafeAreaView>
     )
}

export default Home;