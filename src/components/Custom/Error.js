// Icon
import { MdWarning } from "react-icons/md";
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
      <MdWarning />
      <span>{errorText}</span>
    </p>
  );
};

export default Error;
