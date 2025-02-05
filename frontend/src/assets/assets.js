
import appointment_img from "./appointment_img.png";
import header_img from "./header_img.jpg";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import Contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./images/Dermatologist.svg";
import Gastroenterologist from "./images/Gastroenterologist.svg";
import General_physician from "./images/General_physician.svg";
import Gynecologist from "./images/Gynecologist.svg";
import Neurologist from "./images/Neurologist.svg";
import Pediatricians from "./images/Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  profile_pic,
  Contact_image,
  about_image,
  logo,
  dropdown_icon,
  menu_icon,
  cross_icon,
  chats_icon,
  verified_icon,
  arrow_icon,
  info_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General_physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    image: doc1,
    name: "Dr.Richard James",
    speciality: "General_physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc2",
    image: doc2,
    name: "Dr.Emily Larson",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Emily Larson has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc3",
    image: doc3,
    name: "Dr.Richard James",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 30,
    address: {
      line1: "20th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc4",
    image: doc4,
    name: "Dr.Fochit Brandon",
    speciality: "General_physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Fochit Brandon has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc5",
    image: doc5,
    name: "Dr.Rachel Loren",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Rachel Loren has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc6",
    image: doc6,
    name: "Dr.Atanga Vanesa",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Atanga Vanesa has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc7",
    image: doc7,
    name: "Dr.Atango Brain",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 years",
    about:
      "Atango Brain has a strong commitment to deliving comprehensive medical care",
    fees: 30,
    address: {
      line1: "20th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc8",
    image: doc8,
    name: "Dr.Teacher Thomas",
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Teacher Thomas has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc9",
    image: doc9,
    name: "Dr.Sarah Patel",
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Sarah Patel has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc10",
    image: doc10,
    name: "Dr. Emmanuel Michel",
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr. Emmanuel Michel has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc11",
    image: doc11,
    name: "Dr.Merry Lusi",
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "1 years",
    about:
      "Dr.Merry Lusi has a strong commitment to deliving comprehensive medical care",
    fees: 30,
    address: {
      line1: "20th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc12",
    image: doc12,
    name: "Dr.Tatah Jiuce",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Tatah Jiuce has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc13",
    image: doc13,
    name: "Dr.Cynthia Blessing ",
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Cynthia Blessing has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc14",
    image: doc14,
    name: "Dr.Willfred Tah ",
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "1 years",
    about:
      "Dr.Willfred Tah has a strong commitment to deliving comprehensive medical care",
    fees: 30,
    address: {
      line1: "20th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc15",
    image: doc15,
    name: "Dr.Shantal Joice",
    speciality: "General_physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Shantal Joice has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
];
