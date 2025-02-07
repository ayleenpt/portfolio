import '../../styles/about/ResumeModal.css';

function ResumeModal({ pdf, onClose }) {
  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={onClose}>×</button>
      <iframe src={pdf} title="Resume PDF" className="pdf-viewer"></iframe>
    </div>
  );
}

export default ResumeModal;
