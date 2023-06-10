import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { FiLayers } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { GrSchedules, GrMailOption } from "react-icons/gr";
import { MdOutlineEditNote } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { RiStickyNote2Line } from "react-icons/ri";
import { TbVaccineBottle } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { Moit, VU } from "./assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
const Header = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { push, pathname } = useRouter();
  type MyType = {
    name: string;
    link:any;
    Icon:JSX.Element;
}
  const sideBarItem : MyType[] = [
    {
      name: "Home",
      link: "/home",
      Icon: <AiOutlineHome />,
    },
    {
      name: "To Do Calendar",
      link: "/toDoCalender",
      Icon: <FcTodoList />,
    },
    {
      name: "Account Book",
      link: "/accountBook",
      Icon: <FiLayers />,
    },
    {
      name: "Progress",
      link: "/progress",
      Icon: <GiProgression />,
    },
    {
      name: "Lecture Schedule",
      link: "/lectureSchedule",
      Icon: <GrSchedules />,
    },
    {
      name: "Mail",
      link: "/mail",
      Icon: <GrMailOption />,
    },
    {
      name: "Notes",
      link: "/notes",
      Icon: <MdOutlineEditNote />,
    },
    {
      name: "My Study Scheme",
      link: "/myStudyScheme",
      Icon: <FiSettings />,
    },
    {
      name: "My Study Course",
      link: "/myStudyCourse",
      Icon: <IoIosStats />,
    },
    {
      name: "Student Services",
      link: "/studentServices",
      Icon: <AiOutlineShopping />,
    },
    {
      name: "Course Selection",
      link: "/courseSelection",
      Icon: <RiStickyNote2Line />,
    },
    {
      name: "Covid 19 Vaccination",
      link: "/covid19Vaccination",
      Icon: <TbVaccineBottle />,
    },
    {
      name: "Contact Us",
      link: "/contactUs",
      Icon: <AiOutlinePhone />,
    },
    {
      name: "Help",
      link: "/help",
      Icon: <FaQuestion />,
    },
  ];

  return (
    <div
      className={` bg-[#2C2E3E]   h-screen relative ${
        isOpen ? "w-11" : "w-1/6 "
      } `}
    >
      <div className="flex justify-center py-3">
        <div className={`flex  `}>
          <Image
            src={VU}
            width={80}
            height={50}
            alt="Picture of the author"
            className={`${isOpen && "hidden"}`}
          />
          <Image
            src={Moit}
            width={60}
            height={50}
            alt="Picture of the author"
            className={`${isOpen && "hidden"}`}
          />
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`absolute   right-0 ${isOpen && "rotate-180"} mb-96`}
        >
          <BsArrowLeftCircle size={30} color="white" />
        </button>
      </div>
      <div>
        {sideBarItem.map((item, index) => (
          <Link
            key={index}
            className={`flex items-center cursor-pointer hover:bg-[#909193] gap-x-4 p-2 text-gray-50   ${pathname === item.link && 'bg-green'}`}
            href={item.link}
          
          >
            <span className="text-2xl block float-left">{item.Icon}</span>
            <span className={`${isOpen && "hidden"} `}>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
