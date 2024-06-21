import axios from "axios";
import "./App.css";
import { useEffect } from "react";

const baseUrl = "http://localhost:4000/";

function App() {
  const getAllUsers = async () => {
    const respense = await axios.get(baseUrl + "users");
    console.log(respense);
  };

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  const getByUserId = async (id) => {
    const respense = await axios.get(baseUrl + "users/" + id);
    console.log(respense);
  };

  // useEffect(() => {
  //   getByUserId(5);
  // }, []);

  const userAdd = async (user) => {
    const respense = await axios.post(baseUrl + "users/", user);
    console.log("response", respense.data);
  };

  // useEffect(() => {
  //   const user = { username: "nurcan", password: "nn" };
  //   userAdd(user);
  // }, []);

  const updateData = async (userId, UserData) => {
    await axios.put(baseUrl + "users/" + userId, UserData);
  };

  // useEffect(() => {
  //   updateData("e5", {
  //     username: "Nuray",
  //     password: "123455",
  //   });
  // }, []);

  const deleteData = async (userById) => {
    const deletedData = await axios.delete(baseUrl + "users/" + userById);
    console.log("Deleted Data" + deletedData.data);
  };

  // useEffect(() => {
  //   deleteData("05");
  // }, []);

  const getByUserId2 = async (userId) => {
    const respense = await axios.get(baseUrl + "users/" + userId);
    return respense.data.postId;
  };

  // const arabirim = async () => {
  //   const ara = await getByUserId2(3);
  //   console.log(ara);
  // };

  const getByPostId = async (postId) => {
    const respense = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return respense.data;
  };

  // const arabirimforpost = async () => {
  //   const ara = await getByPostId(7);
  //   console.log(ara);
  // };

  const araBirimForPostVeId = async () => {
    const postId = await getByUserId2(2);
    const getPostId = await getByPostId(postId);
    console.log(getPostId);
  };

  useEffect(() => {
    // arabirim();
    // arabirimforpost();
    araBirimForPostVeId();
  }, []);

  return <div>deneme</div>;
}

export default App;
