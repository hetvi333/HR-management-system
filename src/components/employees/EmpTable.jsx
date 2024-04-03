import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import EmpStatus from "./EmpStatus";

const EmpTable = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <>
      <div className="p-4 overflow-x-scroll w-1/2">
        <table>
          {/* header */}
          <thead className=" uppercase bg-yellow-500">
            <tr>
              <th className="p-2">id</th>
              <th>name</th>
              <th>email</th>
              <th>gender</th>
              <th>job title</th>
              <th>department</th>
              <th>status</th>
              <th>Profile</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {data.map((user, id) => (
              <tr key={id} className="bg-blue-200 text-center even:bg-blue-100">
                <td className="py-3">{id + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.designation}</td>
                <td>{user.department}</td>

                <td>
                  <EmpStatus availability={user.availability} />
                </td>
                <td>
                  <Link to={`/Employee/${user.id}`}>
                    <button className=" text-blue-500  hover:text-blue-900 ">
                      <IoOpenOutline className=" w-7 h-7 font-bold" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmpTable;
