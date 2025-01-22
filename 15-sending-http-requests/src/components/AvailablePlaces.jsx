import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../../../16-custom-hooks/hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );
      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    fetchedData: availablePlaces,
    error,
    setFetchData: setAvailablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title={"An error occurred!"} message={error.message} />;
  }

  console.log(availablePlaces);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText={"Fetching places data..."}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
