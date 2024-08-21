import SerVicePic from "../images/Images/service.jpg";
import ManualTherapy from "../images/illustator/Manual-Therapy.jpg";
import SportsRehabilitation from "../images/illustator/Sports-Rehabilitation.jpg";
import GeriatricPhysiotherapy from "../images/illustator/Geriatric-Physiotherapy.jpg";
import WomenHealthPhysiotherapy from "../images/illustator/Women's-Health-Physiotherapy.jpg";
import NeurologicalRehabilitation from "../images/illustator/Neurological-Rehabilitation.jpg";
import PediatricPhysiotherapy from "../images/illustator/physiotherapy-women.jpg";
import { appIcons } from "../../constants/appImages";
import { screensRoute } from "../../constants/screens";
const footer_dummy_data = [
  // {
  //   header: "Menu",
  //   item: [
  //     { onClick: () => console.log("Service"), itemText: "Service" },
  //     { onClick: () => console.log("Doctor"), itemText: "Doctor" },
  //     { onClick: () => console.log("Patient"), itemText: "Patient" },
  //     { onClick: () => console.log("Consultation"), itemText: "Consultation" },
  //     { onClick: () => console.log("Review"), itemText: "Review" },
  //   ],
  // },
  {
    header: "Legal",
    item: [
      {
        onClick: () => console.log("Privacy Police"),
        itemText: "Privacy Police",
      },
      {
        onClick: () => {},
        itemText: "Term of Service",
      },
      {
        onClick: () => {},
        itemText: "Data Privacy",
      },
      { onClick: () => console.log("FAQ"), itemText: "FAQ" },
    ],
  },
  // {
  //   header: "Our Clinic",
  //   item: [
  //     {
  //       onClick: () => console.log("Healthy Life Clinic"),
  //       itemText: "Healthy Life Clinic",
  //     },
  //     {
  //       onClick: () => console.log("Clinic Advanced Care Clinic"),
  //       itemText: "Clinic Advanced Care Clinic",
  //     },
  //     {
  //       onClick: () => console.log("Vitality Health Clinic"),
  //       itemText: "Vitality Health Clinic",
  //     },
  //     {
  //       onClick: () => console.log("Harmony Medical Center"),
  //       itemText: "Harmony Medical Center",
  //     },
  //   ],
  // },
];

const ServicesData = [
  //serviceTypeContainer both
  {
    header: "Therapy",
    coverPic: NeurologicalRehabilitation,
    description:
      "Therapist services include an excellent multidimensional Therapist community including physiotherapist, speech Therapist, occupational Therapist, vocational Therapist, occupational Therapist, at your doorstep with flexible charges and timings.",
    onClick: () => console.log("Caregiver"),
  },
  //serviceTypeContainer home care  day/month
  {
    header: "Nurse Care At Home",
    coverPic: SportsRehabilitation,
    description:
      "Our Home Nursing Program is ideal for patients that require long term in home nursing care for complex medical issues as well as day-to-day needs.",

    onClick: () => console.log("Baby Care"),
  },
  //serviceTypeContainer home care  day/month
  {
    header: "Baby Care ( Pediatrics  )",
    coverPic: GeriatricPhysiotherapy,
    description:
      "We provide Baby care services for new-borns & kids entails hiring the best possible nanny or a babysitter who can dedicate herself towards the care of your little ones. Fornax helps you specify your needs in a simple way.",
    onClick: () => console.log("Old Age care"),
  },
  //serviceTypeContainer home care  day/month
  {
    header: "Old Age Care",
    coverPic: WomenHealthPhysiotherapy,
    description:
      "Home healthcare service will allow an elderly person with special needs to stay in their home while receiving professional support from caregivers such as nurses, aides, or therapists, depending on one’s need for post surgery therapy. So it is for people who are getting older, are chronically ill & recovering from surgery or illness, or are disabled. With in-home care, one is independent in the comfort of their home, close to family, safe & secure, in a conducive environment for recovery and happiness.",
    onClick: () => console.log("Therapist Services"),
  },
  //serviceTypeContainer home care  day/week/month
  {
    header: "Caregiver ( Personal Care )",
    coverPic: PediatricPhysiotherapy,
    description:
      "Our Caregivers are trained attendants who help patients in their daily activities such as bathing, dressing,eating, and maintaining personal hygiene. They are also trained to assist with mobility, check vital signs, prevent bedsores, avoid falls & injuries to your beloved ones.",
    onClick: () => console.log("Respite Care"),
  },
  //serviceTypeContainer home care  Hours/Week/Month
  {
    header: "Respite Care",
    coverPic: PediatricPhysiotherapy,
    description:
      "Respite care will provide planned or emergency temporary care provided to caregivers of a child or adult.",
    onClick: () => console.log("Respite Care"),
  },
  //serviceTypeContainer Both
  {
    header: "Doctor Consultation ( Coming Soon )",
    coverPic: ManualTherapy,
    description:
      "This platform offers the convenience of online doctor consultations, allowing you to receive medical advice and treatment from the comfort of your own home.",
    onClick: () => console.log("Nurse Care At Home"),
  },
  {
    header: "Mental care",
    coverPic: ManualTherapy,
    description:
      "This platform offers the convenience of online doctor consultations, allowing you to receive medical advice and treatment from the comfort of your own home.",
    onClick: () => console.log("Nurse Care At Home"),
  },
];

const ServicesChipsData = [
  "Physiotherapy",
  "Chiropractor",
  "Nurse Care At Home",
  "Baby Care ( Pediatrics  )",
  "Old Age Care",
];
const ServicesChipsDataTwo = [
  "Caregiver ( Personal Care )",
  "Respite Care",
  "Doctor Consultation ( Coming Soon )",
  "Mental care",
];

const conditions = [
  "Orthopaedic",
  "Neck pain",
  "Spine pain",
  "Lower back pain",
  "Shoulder pain",
  "Elbow pain",
  "Hand and wrist pain ",
  "Low back pain",
  "Leg pain",
  "Ankle pain",
  "Foot pain",
];

const contactBoxData = [
  {
    icon: appIcons.locationIcon,
    type: "Our clinic",
    slogan: "Come say hello at our office HQ.",
    text: "Kharar ",
  },
  {
    icon: appIcons.messageIcon,
    type: "Email",
    slogan: "Our friendly teams is here to help.",
    text: "fornax001@gmail.com",
  },
  {
    icon: appIcons.phoneIcon,
    type: "Phones",
    slogan: "Available Mon-Fri at 9:00am to 10pm",
    text: "+91 62801-20073, +91 74481-29489, +91 62801-20073,",
  },
];

const AboutCardData = [
  {
    icon: appIcons.homeIcon,
    header: "Our Vision",
    paragraph:
      "Fornax Medical endeavors to provide superior 'out-of-hospital' medical care that is cost-effective and readily available to patients, thereby enhancing the well-being of individuals and their families.]  make a paragraph for about section ",
  },
  {
    icon: appIcons.ambulanceIcon,
    header: "Our Mission",
    paragraph:
      "At Fornax Medical, our focus is on delivering superior care through service excellence, streamlined processes, evidence-based medicine, and advanced technology. Specializing in preventive care, pre/postnatal care, post-operative care, critical care, chronic disease management, palliative care, and elder care, we aim to provide optimal treatment outcomes and ensure the well-being of our patients.",
  },
];

export {
  footer_dummy_data,
  ServicesChipsData,
  ServicesData,
  contactBoxData,
  conditions,
  ServicesChipsDataTwo,
  AboutCardData,
};
