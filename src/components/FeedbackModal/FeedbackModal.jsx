import { useState } from 'react';
import { useEffect } from 'react';
import './FeedbackModal.css';

export default function FeedbackModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleFeedback = (e) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
    setFeedback('');
    setIsModalOpen(false);
  };

  const handleColseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="feedbackContainer">
          <h3>이 사이트에 대한 피드백을 입력해 주세요!</h3>
          <p>피드백을 입력해 주시면 큰 힘이 됩니다.</p>
          <form className="feedbackFrom" onSubmit={handleFeedback}>
            <textarea
              className="feedbackInput"
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="피드백을 입력해 주세요"
              required
            ></textarea>
            <button className="FeedbackSbtn" type="submit">
              <span>submit</span>
            </button>
          </form>
          <button className="FeedbackCbtn" onClick={handleColseModal}>
            X
          </button>
        </div>
      )}
    </>
  );
}
