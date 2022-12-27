import { StyleSheet } from "react-native";
import { color } from "./colors";
import { fontFamily } from "./fonts";

const commonStyles = StyleSheet.create({
          flexContainer: {
                    flex: 1
          },
          flexFourContainer: {
                    flex: 4
          },
          mh10: {
                    marginHorizontal: 10
          },
          flexGrow: {
                    flexGrow: 1
          },
          mt20: {
                    marginTop: 20
          },
          charName: {
                    color: color.secondary,
                    fontSize: 16,
                    fontFamily: fontFamily.robotoBold
          },
          nickName: {
                    color: color.secondary,
                    fontSize: 14,
                    fontFamily: fontFamily.robotoThin
          },
          charCard: {
                    flex: 0.5,
                    paddingHorizontal: 10,
                    marginBottom: 45
          },
          charImage: {
                    width: 160,
                    alignSelf: 'center',
                    height: 210,
                    resizeMode: 'contain',
                    borderRadius: 10
          },
          charCardFooter: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginHorizontal: 14
          },
          heartImage: {
                    width: 20,
                    height: 20,
                    resizeMode: 'contain'
          },
          emptyView: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
          },
          emptyTxt:{
                    fontSize: 16,
                    fontFamily: fontFamily.robotoLight,
                    color: color?.secondary
          },
          pv40:{
                    paddingVertical: 40,
          }

});

export default commonStyles;