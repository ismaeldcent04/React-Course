import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg",
    address: "Some Address 5, 12345 Some city",
    description: "This is a first Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg",
    address: "Some Address 5, 12345 Some city",
    description: "This is a second Meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }
