import Colors  from 'material-ui/lib/styles/colors'
import Spacing  from 'material-ui/lib/styles/spacing'
import zIndex  from 'material-ui/lib/styles/zIndex'
import ColorManipulator  from 'material-ui/lib/utils/color-manipulator'

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.orange600,
    primary2Color: Colors.orange800,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.orange600,
  }
};
