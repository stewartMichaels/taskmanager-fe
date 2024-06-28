import { useState, useRef, useEffect } from "react";

// import icons
import { IoIosArrowDown } from "react-icons/io";

// import styles
import styles from "./BoardDateModal.module.css";

const BoardDateModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Today");
  const modalRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setShowModal(!showModal)}
      >
        {selectedOption}
        <IoIosArrowDown />
      </button>
      {showModal && (
        <div className={styles.modal} ref={modalRef}>
          <ul className={styles.list}>
            <li
              className={styles.listItem}
              onClick={() => handleOptionClick("Today")}
            >
              Today
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleOptionClick("This Week")}
            >
              This Week
            </li>
            <li
              className={styles.listItem}
              onClick={() => handleOptionClick("This Month")}
            >
              This Month
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BoardDateModal;
