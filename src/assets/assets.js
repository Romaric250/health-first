import React from'react';
import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import Contact_image  from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from "./doc2.png"
import doc3 from "./doc3.png"
import doc4 from "./doc4.png"
import doc5 from "./doc5.png"
import doc6 from "./doc6.png"
import doc7 from "./doc7.png"
import doc8 from "./doc8.png"
import doc9 from "./doc9.png"
import doc10 from "./doc10.png"
import doc11 from "./doc11.png"
import doc12 from "./doc12.png"
import doc13 from "./doc13.png"
import doc14 from "./doc14.png"
import doc15 from "./doc15.png"
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
// import Neurologist from './ Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
 
export const assset = { 
appointment_img,                          
header_img,                     
group_profiles,                         
profile_pic ,                     
Contact_image,                         
about_image,                      
logo ,              
dropdown_icon ,                       
menu_icon ,                   
cross_icon,                     
chats_icon,                     
verified_icon,                        
arrow_icon ,                    
info_icon ,                   
upload_icon ,                     
stripe_logo,                      
razorpay_logo}
    
export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician
  },
  { 
     speciality: 'Gynecologist',
     image : Gynecologist
  },
  {
     speciality:'Dermatologist',
     image : Dermatologist
  },
  {
     speciality:'Pediatricians',
     image : Pediatricians 
  },{
     speciality:'Neurologist',
     image :Neurologist
  },
  {
     speciality: 'Gastroenterologist',
     image: Gastroenterologist
  }
];

export const doctors = [
  {
    _id: "doc1  ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc2  ",
    name: "Dr.Emily Larson",
    spaciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc3  ",
    name: "Dr.Sarah Patel",
    spaciality: "Germatologist",
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
    _id: "doc4  ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc5  ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc6  ",
    name: "Dr.Emily Larson",
    spaciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc7  ",
    name: "Dr.Sarah Patel",
    spaciality: "Germatologist",
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
    _id: "doc8  ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc9  ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc10 ",
    name: "Dr.Emily Larson",
    spaciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc11 ",
    name: "Dr.Sarah Patel",
    spaciality: "Germatologist",
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
    _id: "doc12 ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
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
    _id: "doc13 ",
    name: "Dr.Emily Larson",
    spaciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 60,
    address: {
      line1: "37th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
  },
  {
    _id: "doc14 ",
    name: "Dr.Sarah Patel",
    spaciality: "Germatologist",
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
    _id: "doc15 ",
    name: "Dr.Richard James",
    spaciality: "General_physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr.Richard James has a strong commitment to deliving comprehensive medical care",
    fees: 50,
    address: {
      line1: "17th cross , Richmond",
      line2: "circle ,Ring Road, London",
    },
}
]