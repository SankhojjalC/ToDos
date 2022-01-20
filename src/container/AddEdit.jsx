import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { addUsers, editUser } from "../store/usersReducers";

import "./styles/user.css";

export const AddEdit = () => {
  const dispatch = useDispatch();
  const userDataList = useSelector((state) => state.usersReducers.userData);
  const params = useParams();
  const [editedUserDetails, setEditableUserDetails] = useState({});

  const isEditPage = params.hasOwnProperty("profileId") ? true : false;

  useEffect(() => {
    if (isEditPage) {
      let user = userDataList.filter(
        (data) => data.id === parseInt(params.profileId)
      );
      setEditableUserDetails(...user);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      id: editedUserDetails?.id || "",
      name: editedUserDetails?.name || "",
      Age: editedUserDetails?.Age || "",
      Gender: editedUserDetails?.Gender || "",
      isMarried: editedUserDetails?.isMarried || "",
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      if (isEditPage) {
        console.log("DATA FORM-------->", data);
        const isMarried = data?.isMarried.length ? true : false;
        data = { ...data, isMarried: isMarried };
        dispatch(editUser(data));
      } else {
        const isMarried = data?.isMarried.length ? true : false;
        data = { ...data, isMarried: isMarried };
        dispatch(addUsers(data));
      }
    },
    validationSchema: Yup.object({
      id: Yup.number().max(10, "Id can be max 10").required("ID is required"),
      name: Yup.string()
        .max(10, "Username can be max 10 char")
        .required("Username is required"),
    }),
  });
  return (
    <div className="main">
      <h1 id="headerTitles">Add/Edit User</h1>
      <form id="formBody" onSubmit={formik.handleSubmit}>
        <label>
          Id:
          <input
            type="number"
            name="id"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          <p>
            {formik.errors.id && formik.touched.id && (
              <p style={{ color: "red" }}>{formik.errors.id}</p>
            )}
          </p>
        </label>
        <label>
          User Name:
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <p>
            {formik.errors.name && formik.touched.name && (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}
          </p>
        </label>
        <label>
          Age:
          <input
            type="number"
            name="Age"
            onChange={formik.handleChange}
            value={formik.values.Age}
          />
        </label>
        <label>
          Gender:
          <input
            type="radio"
            value="Male"
            checked={formik.values?.Gender === "Male"}
            name="Gender"
            onChange={formik.handleChange}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            checked={formik.values?.Gender === "Female"}
            name="Gender"
            onChange={formik.handleChange}
          />{" "}
          Female
        </label>
        <label>
          is Married?
          <input
            type="checkbox"
            value="married"
            name="isMarried"
            checked={formik.values?.isMarried}
            onChange={formik.handleChange}
          />
        </label>

        <button
          type="submit"
          onSubmit={formik.handleSubmit}
          disabled={!formik.isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
