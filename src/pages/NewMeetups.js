import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const history = useNavigate();


    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-23a83-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-Type': 'application/json'
                }
            }
        ).then(() => {
            history('/');
        });
    }

    return (
        <section>
        <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage;