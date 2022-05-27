const ReCenter = ({ panTo }) => {
  return (
    <button
      type="button"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Re-center
    </button>
  );
};

export default ReCenter;
