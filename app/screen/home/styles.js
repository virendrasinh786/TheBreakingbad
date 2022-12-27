import { StyleSheet } from "react-native";
import { color } from "../../common/colors";
import { fontFamily } from "../../common/fonts";

const styles = StyleSheet.create({
          emptyTxt: {
                    color: color.green,
                    alignSelf: 'center',
                    fontFamily: fontFamily.robotoBold,
                    fontSize: 20
          },
          backgroundContainer:{
                    flex:1,
                    backgroundColor: color.primary
          }
});

export default styles;