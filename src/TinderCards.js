import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import database from "./firebase";
import './Tindercards.css';

function TinderCards() {
    const [people,setPeople]=useState([]);

    //code that runs on condition
    useEffect(()=>{
        database
        .collection('people')
        .onSnapshot(snapShot=>(
           setPeople(snapShot.docs.map(doc=>doc.data()))
    ));
        //this run once when component loads
    },[]);
    return (
        <div>
            <div class="tinderCardsContainer">

            {people.map((person) =>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}>

                    <div style={{backgroundImage:`url(${person.url})`}} 
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
