// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Regular Entry",
    path: "/instructor/regularentry",
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownFill />,
    // iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Assessment weight",
        path: "/instructor/regularentry/regularassessmentweight",
      //  icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Assessment Entry",
        path: "/instructor/regularentry/regularassessmententry",
      //  icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Result Summary",
        path: "/instructor/regularentry/regularresultsummary",
      //  icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Special Entry",
    path: "/instructor/specialentry",
    // icon: <IoIcons.IoIosPaper />,
    // iconClosed: <RiIcons.RiArrowDownFill />,
    // iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Makeup assessment weight",
        path: "/instructor/specialentry/makeupassessmentweight",
        //icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Makeup assessment entry",
        path: "/instructor/specialentry/makeupassessmententry",
        //icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Makeup result summary",
        path: "/instructor/specialentry/makeupresultsummary",
       // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  // {
  //   title: "Products",
  //   path: "/products",
  //   icon: <FaIcons.FaCartPlus />,
  // },
  // {
  //   title: "Team",
  //   path: "/team",
  //   icon: <IoIcons.IoMdPeople />,
  // },
  // {
  //   title: "Messages",
  //   path: "/messages",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   iconClosed: <RiIcons.RiArrowDownFill />,
  //   iconOpened: <RiIcons.RiArrowUpFill />,
  //   subNav: [
  //     {
  //       title: "Message 1",
  //       path: "/messages/messages1",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Message 2",
  //       path: "/messages/messages2",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "Message 3",
  //       path: "/messages/messages3",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  // },
];
