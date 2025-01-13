export const fetchKickstarterProjects = async () => {
  const url =
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const response = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return response;
};
