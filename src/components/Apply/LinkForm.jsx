import React from "react";

function Link() {
  const externalURL = "https://docs.google.com/forms/d/e/1FAIpQLSdnvpWj-RxSZUN8nwP1tch3U-xDapW7wkNQNQLj4RBQyNvSnw/viewform";

  const handleButtonClick = () => {
    window.open(externalURL, "_blank");
  };

  return (
    <button
      type="button" 
      className="btn btn-dark"
      style={{
        width: "60%",
        textTransform: "none",
        fontSize: `calc(14px + 0.1vw)`,
        fontWeight: "600",
        height: "50px",
        alignSelf: "center"
      }}
      onClick={handleButtonClick} >
      Click Here to Apply
    </button>
  );
}

export default Link;