export const baseURL = "http://localhost:5000";

export const authConfig = (user) => {
  return {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user?.data?.token}`,
    },
  };
};
