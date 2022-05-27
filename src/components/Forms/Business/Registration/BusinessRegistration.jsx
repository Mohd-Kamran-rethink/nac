import { useLoadScript } from "@react-google-maps/api";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const libraries = ["places"];

const BusinessRegistration = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return <RegistrationForm />;
};

export default BusinessRegistration;
