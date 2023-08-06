import { Dimensions } from "react-native";
import {
  Bank,
  ChangeCameraIcon,
  CreditCard,
  DollarSign,
  Download,
  Logout,
  Money,
  Pay,
  Pending,
  PhoneRinging,
  Search,
  TransactionList,
  Transfer,
  Wallet,
  WifiIcon
} from "../assets/icons";
import { whiteColor } from "../assets/colors";
import { OpayLogo, PalmpayLogo } from "../assets/images";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const NavNames = {
    GettingStarted: {
      name: "GettingStarted",
      label: "Getting Started",
      navShown: true,
      Icon: Bank
    },
    Home: {
      name: "Home",
      label: "Home",
      navShown: true,
      Icon: Bank
    },
    PendingPayment: {
      name: "PendingPayment",
      label: "Pending Payment",
      navShown: true,
      Icon: Bank
    },
    AccountDetails: {
      name: "AccountDetails",
      label: "Account Details",
      navShown: true,
      Icon: CreditCard
    },
    Pay: {
      name: "Pay",
      label: "Pay",
      navShown: true,
      Icon: Pay
    },
    Opay: {
      name: "Opay",
      label: "Opay",
      navShown: true,
      Icon: Pay
    },
    Palmpay: {
      name: "Palmpay",
      label: "Palmpay",
      navShown: true,
      Icon: Pay
    },
    Discover: {
      name: "Discover",
      label: "Discover",
      navShown: true,
      Icon: Search
    },
    Withdrawal: {
      name: "Withdrawal",
      label: "Withdrawal",
      navShown: true,
      Icon: Search
    },
    Activation: {
      name: "Activation",
      label: "Activation",
      navShown: true,
      Icon: Search
    },
    Activity: {
      name: "Activity",
      label: "Activity",
      navShown: true,
      Icon: Pending
    }
  },
  screenTextColors = {
    [NavNames.Pay.name]: { ...whiteColor }
  },
  Banks = {
    Opay: {
      name: "Opay / Paycom",
      logo: OpayLogo,
      description: "Add Balance to your opay account",
      screenName: NavNames.Opay.name
    },
    Palmpay: {
      name: "Palmpay",
      logo: PalmpayLogo,
      description: "Add Balance to your palmpay account",
      screenName: NavNames.Palmpay.name
    }
  },
  bankList = Object.keys(Banks).map(key => Banks[key]),
  dashboardActions = [
    {
      title: "Savings",
      icon: "",
      backgroundColor: "",
      description: "Save now for later",
      stat: "$0.00"
    },
    {
      title: "Bitcoin",
      icon: "",
      backgroundColor: "",
      description: "Learn and INverst",
      stat: ""
    },
    {
      title: "Stocks",
      icon: "",
      backgroundColor: "",
      description: "Invest with $1",
      stat: ""
    },
    {
      title: "Taxes",
      icon: "",
      backgroundColor: "",
      description: "File for free",
      stat: ""
    }
  ],
  waysToAddMoney = [
    {
      Icon: Download,
      title: "Direct Deposit",
      description: "Bank and  Wire Transfer"
    },
    {
      Icon: Bank,
      title: "Bank and Wire Transfers",
      description: "Send from another account"
    },
    {
      Icon: Money,
      title: "Paper Money",
      description: "Deposit at a nearby location"
    },
    {
      Icon: ChangeCameraIcon,
      title: "Recurring Deposit",
      description: "Add from your debit card"
    }
  ],
  discountList = [
    {
      title: "Lyft",
      description: "4% off each online ride",
      image: ""
    },
    {
      title: "True Religion",
      description: "7% off each in-app order",
      image: ""
    },
    {
      title: "Walmart",
      description: "2% off each in-app order",
      image: ""
    },
    {
      title: "Discord",
      description: "99% off each in-app order",
      image: ""
    }
  ],
  adsList = [
    {
      title: "Invite Friends",
      description: "Get $5 for every friend who signs up"
    },
    {
      title: "Gift Cards",
      description: "Send a digital gift card, spark real joy"
    }
  ],
  contacts = ["Chad", "Duyil", "Seun", "Boston", "Steve"],
  activities = [
    {
      name: "Chad",
      description: "At 5:32 PM",
      price: "$24.56"
    },
    {
      name: "Cash Out",
      description: "Coaster Community Bank",
      price: "$25"
    },
    {
      name: "Boston",
      description: "FOr Reinbursement",
      price: "$25"
    },
    {
      name: "Duyil",
      description: "At 5:32 PM",
      price: "$24.56"
    },
    {
      name: "Chad",
      description: "At 5:32 PM",
      price: "$24.56"
    }
  ],
  actions = [
    {
      name: "Buy Data",
      Icon: WifiIcon
    },
    {
      name: "Buy Airtime",
      Icon: PhoneRinging
    },
    {
      name: "Add Funds",
      Icon: Wallet
    },
    {
      name: "Transactions",
      Icon: TransactionList
    },
    {
      name: "Transfer",
      Icon: Transfer
    },
    {
      name: "Logout",
      Icon: Logout
    }
  ],
  palmpayActions = [
    {
      name: "Win Big",
      Icon: ""
    },
    {
      name: "Airtime",
      Icon: ""
    },
    {
      name: "Data Bundle",
      Icon: ""
    },
    {
      name: "Betting",
      Icon: ""
    },
    {
      name: "Electricity",
      Icon: ""
    },
    {
      name: "Tv",
      Icon: ""
    },
    {
      name: "Recharge2Cash",
      Icon: ""
    },
    {
      name: "Savings",
      Icon: ""
    },
    {
      name: "Loan",
      Icon: ""
    },
    {
      name: "Refer & Earn",
      Icon: ""
    },
    {
      name: "Invitation",
      Icon: ""
    },
    {
      name: "Cashbox",
      Icon: ""
    },
    {
      name: "Cowry Card",
      Icon: ""
    },
    {
      name: "Nearby Agent",
      Icon: ""
    },
    {
      name: "Pay Me",
      Icon: ""
    },
    {
      name: "Pay Bills",
      Icon: ""
    }
  ],
  palmpayTransferActions = [
    {
      name: "To Bank",
      Icon: ""
    },
    {
      name: "To Palmpay",
      Icon: ""
    },
    {
      name: "Withdraw",
      Icon: ""
    },
    {
      name: "Pay Shop",
      Icon: ""
    }
  ];

export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown),
  measurements = {
    windowWidth,
    windowHeight
  };

export const padding = 15,
  headerIconSize = 35;
