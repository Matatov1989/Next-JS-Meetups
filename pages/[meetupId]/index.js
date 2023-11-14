import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails() {
  return <MeetupDetail />;
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    // props: {
    //   meetupData: ,
    // },
    // revalidate: 1,
  };
}

export default MeetupDetails;
