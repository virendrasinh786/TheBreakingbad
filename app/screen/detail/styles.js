import { StyleSheet } from "react-native";
import { color } from '../../common/colors';
import { fontFamily } from '../../common/fonts';

const styles = StyleSheet.create({
          nameTxt: {
                    color: color.secondary,
                    fontSize: 32,
                    fontFamily: fontFamily.robotoBold,
                    marginTop: 36,
                    alignSelf: 'center'
          },
          otherCharacterTxt: {
                    color: color.secondary,
                    fontSize: 23,
                    fontFamily: fontFamily.robotoBold,
                    marginTop: 80,
          },
          backgroundContainer: {
                    flex: 1,
                    backgroundColor: color.primary
          },
          backgroundImage: {
                    width: "100%",
                    height: "100%"
          },
          scrollChild: {
                    flex: 1,
                    marginTop: 170,
                    marginHorizontal: 16,
                    marginBottom: 20
          },
          characterImage: {
                    width: 156,
                    height: 174,
                    resizeMode: 'contain',
                    borderRadius: 5,
                    paddingBottom: 20,
                    alignSelf: 'center'
          },
          nickNameTxt: {
                    color: color.secondary,
                    fontSize: 14,
                    fontFamily: fontFamily.robotoThin,
                    alignSelf: 'center'
          },
          statusTxt: {
                    color: color.pink,
                    fontSize: 14,
                    fontFamily: fontFamily.robotoLight,
                    marginTop: 6,
                    alignSelf: 'center'
          },
          lableTxt: {
                    color: color.green,
                    fontSize: 14,
                    fontFamily: fontFamily.robotoLight,
                    marginTop: 24
          },
          detailsTxt: {
                    color: color.secondary,
                    fontSize: 14,
                    fontFamily: fontFamily.robotoLight,
          },
          rowSpBtn: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
          },
          detailsParent: {
                    marginTop: 7
          },
          appearanceParent: {
                    backgroundColor: color.gray1N,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    marginRight: 16
          },
          rowContainer: {
                    flexDirection: 'row',
                    flexGrow: 1
          },
          scrollViewContainer: {
                    flexGrow: 1,
                    flex: 1
          },
          characterView: {
                    flex: 0.3,
                    marginHorizontal: 16
          },
          charImage: {
                    width: 156,
                    height: 210,
                    resizeMode: 'contain',
                    borderRadius: 10
          }
});

export default styles;