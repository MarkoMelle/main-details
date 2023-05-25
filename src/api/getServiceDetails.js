export default async function getServiceDetails(id) {
  const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching services");
  }
}
