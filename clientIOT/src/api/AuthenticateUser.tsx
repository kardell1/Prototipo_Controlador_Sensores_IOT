type Authenticate = {
  username : string,
  password : string
}
export const AuthenticateUser = async ({
  username,
  password,
}: Authenticate) => {
  const api = import.meta.env.VITE_API_URL ;
  const urlVerifyUser = `http://${api}/authenticate`;
  try {
    const response = await fetch(urlVerifyUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((res)=>res.json())
    return response
    
  } catch (error) {
    return "error al conectarse al servidor";
  }
};
