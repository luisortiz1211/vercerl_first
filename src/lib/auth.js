import axios from "axios";
async function login(data) {
  const response = await axios.post(
    "${process.env.NEXT_PUBLIC_API_BASE_URL}/login",
    data
  );
  console.log("response", response);
  return response;
}
export const Auth = {
  Login,
};
