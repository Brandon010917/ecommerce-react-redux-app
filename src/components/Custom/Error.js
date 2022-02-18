//Styles
const styles = {
  color: "rgb(220, 38, 38)",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "1rem",
  fontSize: "14px",
};

const Error = ({ errorText }) => {
  return (
    <p style={styles}>
      <i className="material-icons-sharp">warning</i>
      <span>{errorText}</span>
    </p>
  );
};

export default Error;
