import React from "react";
import PropTypes from "prop-types";

const NodesList = ({ notes, onRemoveNote, onChangeRecordStatus }) => {
  return (
    <div className="notes-container">
      <ul className="list">
        {notes === undefined
          ? null
          : notes
              .filter(note => note.isVisible === true)
              .map(note => (
                <li
                  onClick={() => {
                    onChangeRecordStatus(note.id);
                  }}
                  key={note.id}
                  className={
                    note.isDone ? "list-record list-record-done" : "list-record"
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
              ))}
      </ul>
    </div>
  );
};

NodesList.propTypes = {
  notes: PropTypes.arrayOf(Object),
  onRemoveNote: PropTypes.func
};

export default NodesList;
