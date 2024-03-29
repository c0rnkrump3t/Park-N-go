import React, { useState, useEffect } from 'react';
import GoogleMapIconsMarkers from './GoogleMapIconsMarkers';
import NavBar from './NavBar';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const GOOGLE_MAP_API_KEY = 'AIzaSyBXs2c0Ul3OAB9W4i2ljJ_sWV1N1lLYsW0';

const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const GoogleMap = (props) => {
  const [loadMap, setLoadMap] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.substring(1,);

  const [searchParams] = useSearchParams();
  const signpage = searchParams.get("signpage");
  const labelButton = signpage.includes("FR") ? "Retour" : "Back";

  const currentPath = currentPage + "?signpage=" + signpage.replace('-FR', '');


  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="GoogleMapDefault">
      <NavBar currentPath={currentPath} />

      {!loadMap ? <div>Loading...</div> : <GoogleMapIconsMarkers />}
      <div className='button-container'>
        <Link to={`/${signpage}`}>
          <button className="parking-button">
            {labelButton}
          </button>
        </Link>
      </div>

    </div>
  );
}

export default GoogleMap;