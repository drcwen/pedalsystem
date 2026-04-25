import { useEffect, useState } from "react";
import { getSoloBikes, getFamilyBikes, getAllBikes } from "../services/bikeService";

export function useBikes() {
  const [bikes, setBikes] = useState([]);
  const [familyBikes, setFamilyBikes] = useState([]);
  const [allBikes, setAllBikes] = useState([]);

  useEffect(() => {
    getSoloBikes().then(setBikes).catch(console.error);
    getFamilyBikes().then(setFamilyBikes).catch(console.error);
    getAllBikes().then(setAllBikes).catch(console.error);

  }, []);

  return { bikes, familyBikes, allBikes };
}