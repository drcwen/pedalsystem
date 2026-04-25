import axios from "axios";

const API = "http://localhost:4000/inventory";

export const getSoloBikes = async () => {
  const res = await axios.get(`${API}/solobikes`);
  return res.data;
};

export const getFamilyBikes = async () => {
  const res = await axios.get(`${API}/familybikes`);
  return res.data;
};

export const getAllBikes = async () => {
    const res = await axios.get(`${API}/allbikes`);
    return res.data;
}