import data from "./Data/loginCred.json";

export const validatePassword = (username, password) => {
  const filteredUserData = data.users.filter((i) => username === i.username);
  if (filteredUserData.length) {
    if (filteredUserData[0].password === password) {
      return {
        status: 200,
        data: filteredUserData,
        message: "User Login Successful",
      };
    } else {
      return { status: 301, message: "Wrong Password" };
    }
  } else {
    return { status: 400, message: "User Doesn't Exist" };
  }
};
