import { Button } from 'react-native-paper';
import { ButtonQProps } from './ButtonQ.type';
import { StyleSheet } from 'react-native';
export const ButtonQ: React.FC<ButtonQProps> = ({
  text,
  onPress,
  mode= 'contained',
  style,
}) => {
  console.log('press');
  return (
    <Button mode={mode} onPress={onPress} style={[styles.button, style]}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});
