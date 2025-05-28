import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

export default function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://ismaeldcent:Hulk2604@cluster0.4zfthwe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://ismaeldcent:Hulk2604@cluster0.4zfthwe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetupp = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(selectedMeetupp);

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetupp._id.toString(),
        title: selectedMeetupp.title,
        address: selectedMeetupp.address,
        image: selectedMeetupp.image,
        description: selectedMeetupp.description,
      },
    },
  };
}
