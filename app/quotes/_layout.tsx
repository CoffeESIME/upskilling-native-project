import { Slot } from 'expo-router';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
// eslint-disable-next-line react/function-component-definition
export default function QuotesLayout() {
  return (
    <>
      <HeaderQ />
      <Slot />
    </>
  );
}
