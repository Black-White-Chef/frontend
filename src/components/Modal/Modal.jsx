import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Modal.css';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');

  const handleModal = (e) => {
    e();
    console.log('Nickname:', nickname);
    console.log('Comment:', comment);

    setModal(false);
  };

  return (
    <>
      <div className="modalContainer">
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={() => {
            setModal((prev) => !prev);
          }}
        >
          {modal ? '' : ''}
          <AddIcon />
        </Fab>
        {modal && (
          <div className="modal">
            <form className="submitForm" onSubmit={handleModal}>
              <label className="nicknameLabel">
                닉네임:
                <input
                  className="nicknameInput"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </label>
              <br />
              <label className="commentLabel">
                댓글:
                <input
                  className="commentInput"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>
              <br />
              <button className="sbtn" type="submit">
                제출
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
