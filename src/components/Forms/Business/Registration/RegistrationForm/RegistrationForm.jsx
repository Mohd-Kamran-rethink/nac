import { useCallback, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import Search from "../Search/Search";
import ReCenter from "../ReCenter/ReCenter";

import "./RegistrationForm.css";

const mapContainerStyles = {
  width: "400px",
  height: "400px",
  margin: "10px 0",
};
const center = {
  lat: 40,
  lng: -79,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const defaultRegistrationFields = {
  name: "",
  address: "",
  contact: "",
  email: "",
  coordinates: center,
};

const RegistrationForm = () => {
  const [registration, setRegistration] = useState(defaultRegistrationFields);
  const { name, contact, email, coordinates } = registration;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("registration", JSON.stringify(registration));
  };

  const onMapClick = useCallback(
    (event) => {
      setRegistration({
        ...registration,
        coordinates: {
          lat: parseFloat(event.latLng.lat()),
          lng: parseFloat(event.latLng.lng()),
        },
      });
    },
    [registration]
  );

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => (mapRef.current = map), []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const setAddress = useCallback(
    ({ address, coordinates }) => {
      setRegistration({ ...registration, address, coordinates });
    },
    [registration]
  );

  return (
    <div className="registration-form-container">
      <h3>Register your Business</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of your Business</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={name}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact">Contact</label>
          <div>
            <input
              type="text"
              name="contact"
              id="contact"
              onChange={handleChange}
              value={contact}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
            />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <div className="map-container">
            <Search panTo={panTo} setAddress={setAddress} />

            <GoogleMap
              mapContainerStyle={mapContainerStyles}
              zoom={8}
              center={coordinates}
              onLoad={onMapLoad}
              options={options}
              onClick={onMapClick}
            >
              <Marker position={registration.coordinates} />
            </GoogleMap>

            <ReCenter panTo={panTo} />
          </div>
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
