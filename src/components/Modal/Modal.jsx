import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Modal.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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
          color="primary"
          aria-label="add"
          onClick={() => {
            setModal((prev) => !prev);
          }}
        >
          {modal ? '' : ''}
          <AddIcon />
        </Fab>
        {/* {modal && ( */}
        <div className={`modal ${modal ? 'show' : 'hide'}`}>
          <h3>응원 메세지를 입력해주세요!</h3>
          <h4>Please enter a message of support!!</h4>
          <form className="submitForm" onSubmit={handleModal}>
            <TextField
              className="nicknameInput"
              label="Nickname"
              multiline
              size="small"
              onChange={(e) => setNickname(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <br />
            <TextField
              className="commentInput"
              label="Comments"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              placeholder="Comments"
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <Button className="sbtn" variant="contained" endIcon={<SendIcon />}>
              submit
            </Button>
          </form>
        </div>
        {/* )} */}
      </div>
    </>
  );
}
