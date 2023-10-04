import http from "./httpServer";

http.setjwt(getjwt());

export async function book(data) {
console.log(data.selectedDay,"sendbookingdata")
  return await http.post("/reservation", {
    firstName: data.person.firstName,
    lastName: data.person.lastName,
    date: data.selectedDay,
  });
}

export async function getAllBooksTime() {
  const res= await http.get("/reservation");
  return res.data
}
export async function cancelBookTime(data) {
console.log(data,"deleted data")
  return await http.delete("/reservation",{data});

}
export function getjwt() {
  return localStorage.getItem("token");
}

const reserveServise = {
  book,
  getAllBooksTime,
  getjwt,
  cancelBookTime
};

export default reserveServise;
