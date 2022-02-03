const token = localStorage.getItem("token");

export const config = () => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});
