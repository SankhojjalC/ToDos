import React from "react";
import "./styles/user.css";

export const AddEdit = () => {
  return (
    <div className="main">
      <h1 id="headerTitles">Add/Edit User</h1>
      <form id="formBody">
        <label>
          Id:
          <input type="number" />
        </label>
        <label>
          User Name:
          <input type="text" />
        </label>
        <label>
          Age:
          <input type="number" />
        </label>
        <label>
          Gender:
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
        </label>
        <label>
          is Married?
          <input type="checkbox" value="married" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
