import { IMessage, Send, SendProps } from 'react-native-gifted-chat';

import SEND_ICON from '../../assets/send.svg';
import IconButton from '../../primitives/IconButton';

interface SendMessageButtonProps extends SendProps<IMessage> {
  size: number;
}

const SendMessageButton = ({ size, ...props }: SendMessageButtonProps) => {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{ width: size, right: -(size + 10), position: 'absolute' }}>
      <IconButton style={{ backgroundColor: 'transparent' }}>
        <SEND_ICON width={size} height={size} />
      </IconButton>
    </Send>
  );
};

export default SendMessageButton;
