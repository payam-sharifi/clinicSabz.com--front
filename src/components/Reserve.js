import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import reserveServise from "../services/reservation.service";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";
import "../css/reservation.css";
const Reserve = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [reserveCode, setReservedCode] = useState(null);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [AllBookedTimes, setAllBookedTimes] = useState([]);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const disableReserveDates = (data) => {
    const array = [];
    data.map((item) => {
      array.push(item.date);
    });
    console.log(array, "array");
    setAllBookedTimes(array);
  };
  const show = () => {
    console.log(AllBookedTimes, "allbookedtime");
  };
  const getDataFromServer = async () => {
    const res = await reserveServise.getAllBooksTime();

    disableReserveDates(res);
  };

  const sendDataToServer = async (e) => {
    console.log(selectedDay, person);
    if (
      selectedDay != null &&
      person.firstName != "" &&
      person.lastName != ""
    ) {
      const res = await reserveServise.book({
        selectedDay,
        person,
      });

      getDataFromServer();
      swal.fire({
        title: "کد رزرو شما :" + res.data.reserveCode,
        icon: "info",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 5000,
        toast: true,
        position: "top",
      });
    } else {
      if (selectedDay === null) {
        swal.fire({
          title: "لطفا تاریخی را برای رزرو را انتخاب کنید",
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2000,
          toast: true,
          position: "top",
        });
      } else {
        if (person.firstName === "" || person.lastName === "") {
          swal.fire({
            title: "نام و یا نام خانوادگی را وارد نکرده اید",
            icon: "error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2000,
            toast: true,
            position: "top",
          });
        }
      }
    }
    setPerson({ lastName: "",firstName:"" })
  };

  const cancelReservedDay = async () => {
    const cancelData = {
      person,
      reserveCode,
    };
    if (person.firstName !== "" && person.lastName !== "") {
      try {
        const res = await reserveServise.cancelBookTime(cancelData);
        if (res.status == 200) {
          swal.fire({
            title: res.data,
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2000,
            toast: true,
            position: "top",
          });
        }
        getDataFromServer();
      } catch (error) {
        swal.fire({
          title: error.response.data,
          icon: "error",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2000,
          toast: true,
          position: "top",
        });
      }
    }
    setPerson({ lastName: "",firstName:"" })
  };

  return (
    <>
    
    <div className="box-center">
      <h1 className="text-center my-1 fw-bold">رزرو وقت ملاقات</h1>
      <Calendar
        value={selectedDay}
        colorPrimary="#9c88ff"
        minimumDate={utils("fa").getToday()}
        calendarClassName="custom-calendar responsive-calendar"
        calendarTodayClassName="custom-today-day"
        onChange={setSelectedDay}
        disabledDays={AllBookedTimes}
        shouldHighlightWeekends
        locale="fa"
      />
  <div className="row align-items-center my-2 control-form  ">
 

        <div className="col-md-6">
          <div className="d-flex justify-content-between my-2">
            <label>نام</label>
            <input
              value={person.firstName}
              className="mx-2"
              onChange={(e) =>
                setPerson({ ...person, firstName: e.target.value })
              }
            ></input>
          </div>
          
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-between">
            <label> نام خانوادگی</label>
            <input
            value={person.lastName}
              className="mx-2"
              onChange={(e) =>
                setPerson({ ...person, lastName: e.target.value })
              }
            ></input>
          
        </div>
      </div>
    
   
      </div>
     
      <div className="row my-4"> 
    
   
    <button className="btn btn-success mb-2" onClick={sendDataToServer}>
      ثبت
    </button>
   

    <button
      type="button "
      className="btn btn-danger "
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onClick={ ()=>    setPerson({ lastName:"",firstName:""})}
    >
      لغو نوبت
    </button>
   

 
  </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               لغو وقت ملاقات
              </h5>
            
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
           <div className="d-flex align-items-center justify-content-between">
             <label>نام</label>
              <input
                onChange={(e) =>
                  setPerson({ ...person, firstName: e.target.value })
                }
              ></input>
              </div>
              <div className="d-flex my-2 align-items-center justify-content-between">
              <label>نام خانوادگی</label>
              <input
                onChange={(e) =>
                  setPerson({ ...person, lastName: e.target.value })
                }
              ></input>
              </div>
              <div className="d-flex align-items-center justify-content-between">
              <label>شماره پیگیری</label>
              <input onChange={(e) => setReservedCode(e.target.value)}></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={()=>     setPerson({firstName:"",lastName:""})}
              >
                لغو
              </button>
              <button
                type="button"
                onClick={cancelReservedDay}
                className="btn btn-primary"
              >
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Reserve
