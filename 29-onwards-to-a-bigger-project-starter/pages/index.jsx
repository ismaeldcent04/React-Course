
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg',
        address: 'Some Address 5, 12345 Some city',
        description: 'This is a first Meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg',
        address: 'Some Address 5, 12345 Some city',
        description: 'This is a second Meetup'
    },
]

export default function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}