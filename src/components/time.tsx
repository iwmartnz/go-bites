import { Text } from './ui';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type TimeProps = React.ComponentPropsWithoutRef<typeof Text> & {
  variant: 'fromNow';
  date: string;
};

export default function Time({ variant, date, ...textProps }: TimeProps) {
  let time;

  if (variant === 'fromNow') {
    const formatedTime = dayjs(date).fromNow();
    time = formatedTime;
  }

  return <Text {...textProps}>{time}</Text>;
}
