import react from "react";
import {TouchableWithoutFeedback, Keyboard} from "react-native"


const KeyboardDismiss = ({children}) => (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
      </TouchableWithoutFeedback>
)
export default KeyboardDismiss
