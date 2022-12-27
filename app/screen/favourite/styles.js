import { StyleSheet } from "react-native";
import { color } from "../../common/colors";
import { fontFamily } from "../../common/fonts";

const styles = StyleSheet.create({
          backgroundContainer: { 
                    flex: 1, 
                    backgroundColor: color.primary
          },
          innerContainer: { 
                    flex: 1, 
                    backgroundColor: color.primary, 
                    marginTop: 40 
          },
          noFavTxt:{ 
                    fontSize: 20,
                    fontFamily: fontFamily.robotoBold,
                    color: color.secondary
          }
});

export default styles;