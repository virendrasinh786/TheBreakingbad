import { StyleSheet } from "react-native";
import { color } from "../../common/colors";
import { fontFamily } from "../../common/fonts";

const styles = StyleSheet.create({
          header: {
                    padding: 15,
                    paddingVertical: 25,
                    flexDirection: 'row',
                    backgroundColor: '#070707',
                    alignItems: 'center'
          },
          titleTxt: {
                    color: '#ffffff',
                    fontFamily: fontFamily.robotoBold,
                    fontSize: 20
          },
          icon: {
                    height: 20,
                    width: 20,
                    resizeMode: 'contain'
          },
          searchTxt: {
                    color: color.secondary,
                    fontFamily: fontFamily.robotoLight,
                    fontSize: 28,
          },
          searchCloseIcon: {
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
          },
          rightIconContainer: {
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
          }

});

export default styles;