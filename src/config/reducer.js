import { MODIFIER_COLOR, SELECTED_LINK } from "./typeActions";
import {
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

const initialState = {
  navigation: [
    { name: "Dashboard", href: "/", icon: HomeIcon},
    { name: "Insertion", href: "/Insertion", icon: UserGroupIcon},
    { name: "Absences", href: "/Absences", icon: MagnifyingGlassCircleIcon},
    {
      name: "Directory",
      href: "#",
      icon: CalendarIcon
    },
    { name: "Announcements", href: "#", icon: MegaphoneIcon },
    { name: "Office Map", href: "#", icon: MapIcon },
  ],
  selectedLink: "Dashbord",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LINK:
      return {
        ...state,
        selectedLink: action.payload
      };

    default:
      return state;
  }
};
