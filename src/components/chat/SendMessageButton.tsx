import { IMessage, Send, SendProps } from 'react-native-gifted-chat';

import SEND_ICON from '../../assets/send.svg';

interface SendMessageButtonProps extends SendProps<IMessage> {
  size: number;
}

const SendMessageButton = ({ size, ...props }: SendMessageButtonProps) => {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{ width: size, right: -(size + 10), position: 'absolute' }}>
      <SEND_ICON width={size} height={size} />
    </Send>
  );
};

export default SendMessageButton;
