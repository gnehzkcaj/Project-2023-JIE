
export default function Linkbutton({ text, url }) {
    const handleButtonClick = () => {
      window.location.href = url;
    };
  
    return (
      <div>
        <button className="to-button" onClick={handleButtonClick}>
          {text}
        </button>
      </div>
    );
  }
  
  
  