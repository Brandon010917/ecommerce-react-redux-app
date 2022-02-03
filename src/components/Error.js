const Error = ({ errorText }) => {
  return (
    <p className="text-red-600 flex items-center gap-2 mt-4 text-sm">
      <i className="material-icons-sharp text-md">warning</i>
      <span>{errorText}</span>
    </p>
  );
};

export default Error;
