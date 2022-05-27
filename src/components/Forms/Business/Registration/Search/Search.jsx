import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const Search = ({ panTo, setAddress }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 40,
        lng: () => -79,
      },
      radius: 200 * 1000, // 200 kms
    },
  });

  const handleOnSelect = async (address) => {
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      const formattedAddress = results[0].formatted_address;

      panTo({ lat, lng });
      setAddress({
        address: formattedAddress,
        coordinates: { lat, lng },
      });
      setValue(formattedAddress, false);
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <Combobox onSelect={handleOnSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Enter an address"
        required={true}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Search;
