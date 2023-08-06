import {
  Settings as SettingsIcon,
  ChevronLeft,
  ArrowLeft as ArrowLeftIcon,
  Wallet as WalletIcon,
  Folder,
  Component,
  Pencil,
  User,
  Key,
  LogOut,
  Landmark,
  Home,
  MessageCircle,
  SearchIcon,
  MoreVertical,
  SendIcon,
  PlusCircleIcon,
  Banknote,
  Clock,
  CheckSquare,
  XSquare,
  ArrowUpRightIcon,
  FileClock,
  VerifiedIcon,
  StopCircle,
  Compass,
  ChevronDown,
  RefreshCcw,
  ArrowRightIcon,
  QrCode,
  ScanIcon,
  UserCircleIcon,
  LandmarkIcon,
  DeleteIcon,
  ChevronRight,
  DownloadIcon,
  Eye,
  EyeOff,
  Grip,
  Plus
} from "lucide-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { blackColor } from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { X } from "lucide-react-native";
import { Lock } from "lucide-react-native";
import { Text } from "react-native";
import { dancingScript } from "../fonts";
import { AntDesign } from "@expo/vector-icons";

export const Settings = ({ size, color }) => {
  return (
    <SettingsIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Scan = ({ size, color }) => {
  return (
    <ScanIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const UserCircle = ({ size, color }) => {
  return (
    <UserCircleIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Dashboard = ({ size, color }) => {
  return (
    <Home size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};
export const CreditCard = ({ size, color }) => {
  return (
    <MaterialCommunityIcons
      name="credit-card-chip-outline"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ArrowLeft = ({ size, color }) => {
  return (
    <ArrowLeftIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ArrowRight = ({ size, color }) => {
  return (
    <ArrowRightIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const DollarSign = ({ size, color }) => {
  return (
    <FontAwesome
      name="dollar"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const PhoneRinging = ({ size, color }) => {
  return (
    <MaterialIcons
      name="phonelink-ring"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const WifiIcon = ({ size, color }) => {
  return (
    <AntDesign
      name="wifi"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const TransactionList = ({ size, color }) => {
  return (
    <Ionicons
      name="document-text-outline"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const AngleLeft = ({ size, color }) => {
  return (
    <ChevronLeft
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const PadLock = ({ size, color }) => {
  return (
    <Lock size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};
export const KeyPad = ({ size, color }) => {
  return (
    <Grip size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};
export const Help = ({ size, color }) => {
  return (
    <Entypo
      name="help-with-circle"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const AngleRight = ({ size, color }) => {
  return (
    <ChevronRight
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const AngleDown = ({ size, color }) => {
  return (
    <ChevronDown
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Wallet = ({ size, color }) => {
  return (
    <WalletIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Project = ({ size, color }) => {
  return (
    <Folder
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Assets = ({ size, color }) => {
  return (
    <Component
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Delete = ({ size, color }) => {
  return (
    <DeleteIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Mail = ({ size, color }) => {
  return (
    <Entypo
      name="mail"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const ArrowUTurnUp = ({ size, color }) => {
  return (
    <MaterialCommunityIcons
      name="arrow-u-up-right"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Edit = ({ size, color }) => {
  return (
    <Pencil
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const ShowPassword = ({ size, color }) => {
  return (
    <Eye size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};
export const HidePassword = ({ size, color }) => {
  return (
    <EyeOff
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Download = ({ size, color }) => {
  return (
    <DownloadIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Profile = ({ size, color }) => {
  return (
    <User size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};

export const Password = ({ size, color }) => {
  return (
    <Key size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};

export const Logout = ({ size, color }) => {
  return (
    <LogOut
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Bank = ({ size, color }) => {
  return (
    <Landmark
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ChatIcon2 = ({ size, color }) => {
  return (
    <MessageCircle
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Search = ({ size, color }) => {
  return (
    <SearchIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Menu = ({ size, color }) => {
  return (
    <MoreVertical
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Send = ({ size, color }) => {
  return (
    <SendIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Pay = ({ size, color }) => {
  return (
    <Text
      style={{
        fontSize: size ? size : 20,
        color: color ? color : blackColor.default,
        fontFamily: dancingScript.bold.default
      }}
    >
      F
    </Text>
  );
};

export const AddCircle = ({ size, color }) => {
  return (
    <PlusCircleIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
export const Add = ({ size, color }) => {
  return (
    <Plus size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};

export const Transfer = ({ size, color }) => {
  return (
    <MaterialIcons
      name="swap-horiz"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ArrowDown = ({ size, color }) => {
  return (
    <FontAwesome
      name="long-arrow-down"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ArrowUp = ({ size, color }) => {
  return (
    <FontAwesome
      name="long-arrow-up"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Money = ({ size, color }) => {
  return (
    <Banknote
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Pending = ({ size, color }) => {
  return (
    <Clock size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};

export const Exclamation = ({ size, color }) => {
  return (
    <FontAwesome
      name="exclamation"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const WarningBold = ({ size, color }) => {
  return (
    <FontAwesome
      name="warning"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Active = ({ size, color }) => {
  return (
    <CheckSquare
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const InActive = ({ size, color }) => {
  return (
    <XSquare
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const ArrowUpRight = ({ size, color }) => {
  return (
    <ArrowUpRightIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Reviewing = ({ size, color }) => {
  return (
    <FileClock
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Verified = ({ size, color }) => {
  return (
    <VerifiedIcon
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const Terminated = ({ size, color }) => {
  return (
    <StopCircle
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const NavigationIcon = ({ size, color }) => {
  return (
    <Compass
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const CarIcon = ({ size, color }) => {
  return (
    <FontAwesome5
      name="car"
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};

export const CancelIcon2 = ({ size, color }) => {
  return (
    <X size={size ? size : 20} color={color ? color : blackColor.default} />
  );
};

export const ChangeCameraIcon = ({ size, color }) => {
  return (
    <RefreshCcw
      size={size ? size : 20}
      color={color ? color : blackColor.default}
    />
  );
};
