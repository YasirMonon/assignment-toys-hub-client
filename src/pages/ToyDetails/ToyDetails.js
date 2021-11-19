import React, { useEffect, useState } from "react";
import ToyDescription from "../../components/ToyDescription/ToyDescription";
import ToyDetailsBanner from "../../components/ToyDetailsBanner/ToyDetailsBanner";
import { useParams } from "react-router-dom";
const ToyDetails = () => {
  const { toyId } = useParams();
  const [toy, setToy] = useState({});

  useEffect(() => {
    //Load single which was clicked by user
    const loadSingleToy = async () => {
      const response = await fetch(
        `https://toys-hub.herokuapp.com/toys/${toyId}`
      );
      const responseData = await response.json();
      setToy(responseData);
    };
    loadSingleToy();
  }, [toyId]);
  return (
    <>
      <ToyDetailsBanner toy={toy} />
      <ToyDescription toy={toy} />
    </>
  );
};

export default ToyDetails;
