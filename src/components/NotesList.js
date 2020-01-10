import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NodesList = ({ notes, onRemoveNote, onChangeRecordStatus }) => {
  return (
    <div className="notes-container">
      <TransitionGroup component="ul" className="list">
        {notes === undefined
          ? null
          : notes
              .filter(note => note.isVisible === true)
              .map(note => (
                <CSSTransition key={note.id} classNames={"note"} timeout={1000}>
                  <li
                    onClick={() => {
                      onChangeRecordStatus(note.id);
                    }}
                    className={
                      note.isDone
                        ? "list-record list-record-done"
                        : "list-record"
                    }
                  >
                    {note.isDone ? <s>{note.title}</s> : note.title}
                    <div
                      onClick={e => {
                        e.stopPropagation();
                        onRemoveNote(note.id);
                      }}
                      className="list-record-button"
                    >
                      &times;
                    </div>
                  </li>
                </CSSTransition>
              ))}
      </TransitionGroup>
    </div>
  );
};

NodesList.propTypes = {
  notes: PropTypes.arrayOf(Object),
  onRemoveNote: PropTypes.func
};

export default NodesList;
