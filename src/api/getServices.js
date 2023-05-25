export default async function getServices() {
  const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching services");
  }
}