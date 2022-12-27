import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import commonStyles from '../../common/commonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from '../../common/colors';

const Header = ({ navigation, isSearchActive, onSearchIconClick, titleText, leftIcon, addLeftIcon,
          rightIcon, background, onChangeSearchText, placeholderText, setBackground, titleColor,
          searchClose, leftIconClick }) => {

          const { header, titleTxt, icon, searchTxt, searchCloseIcon, rightIconContainer } = styles;
          const { flexContainer, flexFourContainer, mh10 } = commonStyles;
          const [inputsearchText, setInputSearchText] = useState();
          const [refresh, setRefresh] = useState();
          const timerRef = useRef(null);


          const onLeftClick = () => {
                    onSearchIconClick(false);
                    searchClose()
                    addLeftIcon('');
                    setBackground(color.gray0N);
          }
          
          const onRightIconClick = (iconName, type) => {
                    if (iconName == "search") {
                              onSearchIconClick(!isSearchActive);
                              addLeftIcon('arrow-left');
                              setBackground(color.gray1N);
                    } else if (iconName == "x" && type == "search") {
                              setInputSearchText("");
                              changeSearch("");
                              setRefresh(!refresh);
                    } else if (iconName == "heart") {
                              navigation("Favourite");
                    } else if (iconName == "x" && type == "header") {
                              navigation("back")
                    }
          }

          const changeSearch = (search) => {
                    setInputSearchText(search);
                    if (timerRef.current) {
                              clearTimeout(timerRef.current);
                    }
                    timerRef.current = setTimeout(() => {
                              onChangeSearchText(search);
                    }, 900);
          }

          return (
                    <SafeAreaView>
                              <View style={[header, (background && { backgroundColor: background })]}>
                                        {leftIcon &&
                                                  <View style={flexContainer}>
                                                            <TouchableOpacity onPress={() => isSearchActive && onLeftClick("search") || leftIconClick()}>
                                                                      <Icon name={leftIcon} size={20} color={color.secondary} />
                                                            </TouchableOpacity>
                                                  </View>
                                        }
                                        {isSearchActive &&
                                                  <View style={flexFourContainer}>
                                                            <TextInput
                                                                      style={[searchTxt]}
                                                                      onChangeText={text => {
                                                                                changeSearch(text);
                                                                      }}
                                                                      value={inputsearchText}
                                                                      placeholder={placeholderText}
                                                                      placeholderTextColor={color.secondary}
                                                                      cursorColor={color.secondary}
                                                                      autoFocus={true}
                                                            />
                                                  </View>
                                                  ||
                                                  <>
                                                            {titleText &&
                                                                      <View style={[flexContainer, { alignItems: leftIcon && 'center' || "flex-start" }]}>
                                                                                <Text style={[titleTxt, titleColor]}>{titleText}</Text>
                                                                      </View>}
                                                  </>
                                        }
                                        {isSearchActive &&
                                                  <View style={searchCloseIcon}>
                                                            <TouchableOpacity style={mh10} onPress={() => { onRightIconClick('x', "search") }}>
                                                                      <Icon name={"x"} size={20} color="#FFFFFF" />
                                                            </TouchableOpacity>
                                                  </View>
                                                  ||
                                                  <>
                                                            {rightIcon &&
                                                                      <View style={rightIconContainer}>
                                                                                {rightIcon?.map((rightIcon, index) =>
                                                                                          <>
                                                                                                    {rightIcon?.type == "icon" &&
                                                                                                              <TouchableOpacity style={mh10} onPress={() => { onRightIconClick(rightIcon?.name, "header") }}>
                                                                                                                        <Icon name={rightIcon?.name} size={20} color={color.secondary} />
                                                                                                              </TouchableOpacity>
                                                                                                              ||
                                                                                                              <TouchableOpacity style={mh10} onPress={() => { onRightIconClick("heart") }}>
                                                                                                                        <Image source={rightIcon?.image} style={icon} />
                                                                                                              </TouchableOpacity>
                                                                                                    }
                                                                                          </>
                                                                                )}
                                                                      </View>
                                                            }
                                                  </>
                                        }
                              </View>
                    </SafeAreaView>
          )
}

export default Header;