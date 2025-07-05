
const PreviewComponent = () => {
  const getTitle = () => {
    // if (userLocation === 'argentina') {
    //   return <span className="modal-bj-content-title">Ya tenés una cuenta registrada!</span>;
    // }
    return <span className="modal-bj-content-title">Ya tienes una cuenta registrada!</span>;
  };

  const closeModal = () => {
    // setShowModal(false);
  };

  const textContent = 'text' || null;

  // const ctaContent = getCta[siteOrigin.toLowerCase()] || null;

  return (
    <div className="modal-bj">
      <div className="modal-bj-content">
        <button className="modal-bj-content-close" onClick={closeModal}>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 13.5L13 1.5M1 1.5L13 13.5"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {getTitle()}
        <span className="modal-bj-content-separator" />
        {textContent}
        {/* {ctaContent} */}
      </div>
    </div>
  );
};

export default PreviewComponent;