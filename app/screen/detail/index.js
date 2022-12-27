import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../commonComponents/Header';
import styles from './styles';
import { images } from '../../common/images';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColor } from '../../common/constant';
import commonStyles from '../../common/commonStyles';
import { color } from '../../common/colors';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import { fontFamily } from '../../common/fonts';

const Detail = ({ navigation, ...props }) => {
     const character = props?.route?.params?.character;
     const otherCharacters = props?.route?.params?.otherCharacters;
     
     const { nameTxt, backgroundContainer, backgroundImage, scrollChild, characterImage,
          nickNameTxt, statusTxt, lableTxt, detailsTxt, rowSpBtn, detailsParent, scrollViewContainer,
          appearanceParent, rowContainer, otherCharacterTxt, characterView, charImage } = styles;

     const { flexContainer, flexGrow, mt20, charName, nickName, emptyView, emptyTxt } = commonStyles

     return (
          <SafeAreaView style={backgroundContainer}>
               <StatusBar backgroundColor={color.gray0N} />
               <ImageBackground source={{ uri: character?.img }} resizeMode="cover" style={backgroundImage}>
                    <LinearGradient colors={gradientColor} style={flexContainer}>
                         <Header
                              searchOption={false}
                              leftIcon={'arrow-left'}
                              background={"transparent"}
                              leftIconClick={() => { navigation.goBack() }}
                              navigation={(screen) => { navigation.navigate(screen) }}
                              rightIcon={[
                                   {
                                        type: "image",
                                        name: "heart",
                                        action: "changeIcon",
                                        image: images.greenHeart
                                   }
                              ]}
                         />
                         <ScrollView
                              style={[scrollViewContainer]}
                              contentContainerStyle={flexGrow}
                              showsVerticalScrollIndicator={false}
                              bounces={false}
                              keyboardShouldPersistTaps={'always'}>
                              <View style={scrollChild}>
                                   <View style={flexContainer}>
                                        <Image source={{ uri: character?.img }} style={characterImage} />
                                        <Text style={nameTxt}>{character?.name}</Text>
                                        <Text style={nickNameTxt}>{character?.nickname}</Text>
                                        <Text style={statusTxt}>{character?.status}</Text>
                                   </View>
                                   <View style={flexContainer}>
                                        <Text style={lableTxt}>{"Potrayed"}</Text>
                                        <View style={[rowSpBtn]}>
                                             <Text style={detailsTxt}>{character?.portrayed}</Text>
                                             <Text style={detailsTxt}>{moment(character?.birthday, ("DD MM YYYY")).format("DD MMM YYYY")}</Text>
                                        </View>
                                   </View>
                                   <View style={flexContainer}>
                                        <Text style={lableTxt}>{"occupation"}</Text>
                                        {character.occupation.map((occupation) => (
                                             <View style={detailsParent}>
                                                  <Text style={detailsTxt}>{occupation}</Text>
                                             </View>
                                        ))}
                                   </View>
                                   <View style={flexContainer}>
                                        <Text style={lableTxt}>{"Appeared in"}</Text>
                                        <ScrollView
                                             style={[scrollViewContainer]}
                                             contentContainerStyle={rowContainer}
                                             horizontal={true}
                                             showsHorizontalScrollIndicator={false}
                                             bounces={false}
                                             keyboardShouldPersistTaps={'always'}>
                                             {character.appearance.map((appearance) => (
                                                  <View style={appearanceParent}>
                                                       <Text style={detailsTxt}>{"Season " + appearance}</Text>
                                                  </View>
                                             ))}
                                        </ScrollView>
                                   </View>
                                   <Text style={otherCharacterTxt}>{"Other characters"}</Text>
                                   <ScrollView
                                        style={[flexContainer, flexGrow, mt20]}
                                        contentContainerStyle={rowContainer}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        bounces={false}
                                        keyboardShouldPersistTaps={'always'}>
                                        {otherCharacters?.length > 0 && otherCharacters?.map((character) => (
                                             <View style={characterView}>

                                                  <Image source={{ uri: character?.img }} style={charImage} />
                                                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 5 }}>
                                                       <View>
                                                            <Text style={charName}>{character?.name}</Text>
                                                            <Text style={nickName}>{character?.nickname}</Text>
                                                       </View>
                                                  </View>
                                             </View>
                                        ))
                                        
                                             ||
                                             <View style={emptyView}>
                                                  <Text style={emptyTxt}>{"No Other Favourites"}</Text>
                                             </View>
                                        }
                                   </ScrollView>
                              </View>
                         </ScrollView>
                    </LinearGradient>
               </ImageBackground>
          </SafeAreaView >
     )
}

export default Detail;