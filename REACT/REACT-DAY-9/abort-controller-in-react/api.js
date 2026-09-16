import axios from "axios";
const url = import.meta.env.VITE_API_URL;
export async function getEmployees(signal) {
  const response = await axios.get(url, {
    signal,
  });
  return response.data;
}

export async function postEmployee(name, role) {
  const response = await axios.post(url, {
    name,
    role,
  });
  return response.data;
}
export async function patchEmployee(id, role) {
  const editedUrl = `${url}/${id}`;
  const response = await axios.patch(editedUrl, {
    role,
  });
  return response.data;
}
export async function putEmployee(id, name, role) {
  const editedUrl = `${url}/${id}`;
  const response = await axios.put(editedUrl, { name, role });
  return response.data;
}

export async function deleteEmployee(id) {
  const deletedUrl = `${url}/${id}`;
  const response = await axios.delete(deletedUrl);
  return response.data;
}
