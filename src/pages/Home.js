import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import firebaseAPI from "../firebase";
import Header from "../components/Header";
import Form from "../components/Form";
import NotesList from "../components/NotesList";
import { fetchNotes } from "../actions/actions";
import store from "../store";
import axios from "axios";

const url = process.env.REACT_APP_DATABASE_URL;

const Home = props => {
  useEffect(() => {
    store.dispatch(fetchNotes());
  }, []);

  const [notes, setNotes] = useState([]);

  const onAddNote = async noteTitle => {
    const newNote = {
      id: new Date().toLocaleTimeString(),
      title: noteTitle,
      isVisible: true,
      isDone: false
    };
    setNotes(notes.concat(newNote));
    await axios.post(`${url}/notes.json`, newNote);
    await store.dispatch(fetchNotes());
  };

  const onRemoveNote = id => {
    firebaseAPI
      .database()
      .ref("notes")
      .on("child_added", snapshot => {
        if (snapshot.val().id === id) {
          firebaseAPI
            .database()
            .ref(`notes/${snapshot.key}`)
            .remove();
        }
      });
    setNotes(
      props.notes.map(note => {
        if (note.id === id) {
          note.isVisible = false;
        }
        return note;
      })
    );
  };

  const onChangeRecordStatus = id => {
    firebaseAPI
      .database()
      .ref("notes")
      .on("child_added", snapshot => {
        if (snapshot.val().id === id) {
          firebaseAPI
            .database()
            .ref(`notes/${snapshot.key}`)
            .set({
              id: snapshot.val().id,
              isDone: !snapshot.val().isDone,
              isVisible: snapshot.val().isVisible,
              title: snapshot.val().title
            });
        }
      });
    setNotes(
      props.notes.map(note => {
        if (note.id === id) {
          note.isDone = !note.isDone;
        }
        return note;
      })
    );
  };

  return (
    <>
      <Header headerTitle="Note" />
      <Form onAddNote={onAddNote} />
      <NotesList
        onChangeRecordStatus={onChangeRecordStatus}
        onRemoveNote={onRemoveNote}
        notes={props.notes}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Home);
