import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const dataProfileList = [
  {
    icon: <Ionicons name="book-outline" size={24} color="black" />,
    route: '/auth/adult/user-info',
    title: 'Інформація про користувача',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="bell-ring-outline"
        size={24}
        color="black"
      />
    ),
    route: '/adult/qr-code',
    title: 'Сповіщення',
  },
  {
    icon: <Ionicons name="chatbubble-outline" size={24} color="black" />,
    route: '/adult/qr-code',
    title: 'Налаштувати сповіщення',
  },
  {
    icon: <Ionicons name="cog-outline" size={24} color="black" />,
    route: '/adult/reconnectKidList',
    title: 'Редагувати дані дитини',
  },
  {
    icon: <Ionicons name="extension-puzzle-outline" size={24} color="black" />,
    route: '/adult/qr-code',
    title: 'Відновити зв`язок з існуючим акаунтом дитини',
  },
];

export default dataProfileList;
