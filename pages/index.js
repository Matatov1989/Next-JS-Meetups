import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
    address: "Munchen 3, 12345",
    descriprion: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Concorde_sous_la_neige.jpg",
    address: "Parij 4, 12995",
    descriprion: "This is second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
