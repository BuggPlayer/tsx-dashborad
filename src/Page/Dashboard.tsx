import React, { FC, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Addbtn from "../components/Dashborad/Addbtn";
import IconCard from "../components/Dashborad/IconCard";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import headphonr from "../assets/images/headphone.png";
import { DiagnosticCategory } from "typescript";
import Search from "../components/Dashborad/Search";
import FilterBox from "../components/Dashborad/FilterBox";
import { ModelaState } from "../Type/Type";

const Dashboard: FC = (): JSX.Element => {
  // modal value
  let [isOpen, setIsOpen] = useState<ModelaState>(false);
  // for product img
  const [image, setImage] = useState<String>('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    console.log("gh5xe");

    setIsOpen(true);
  }

  const onImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
    // setImage(e.target?.result)
    
      }
      reader.readAsDataURL(event.target.files[0])
    }
  };

  // data for fiter header name
  const datafilterHeader = [
    {
      name: "Category",
    },
    {
      name: "Qty",
    },
    {
      name: "Price",
    },
  ];
  // random data for gridData table
  const rows: GridRowsProp = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
    },
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      img: headphonr,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      age: 16,
      phone: "(921)425-6742",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      age: 31,
      phone: "(421)445-1189",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      age: 150,
      phone: "(232)545-6483",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      age: 44,
      phone: "(543)124-0123",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      age: 36,
      phone: "(222)444-5555",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      age: 65,
      phone: "(444)555-6239",
    },
  ];
  // colums for griData tablr
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", hideable: true, maxWidth: 10 },
    {
      field: "img",
      headerName: "Image",
      width: 150,

      editable: true,
      renderCell: (params) => (
        <img
          style={{ height: "auto", objectFit: "contain" }}
          src={params.value}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
    },
  ];
  return (
    <div
      className="min-h-screen
      max-w-8xl mx-auto text-center px-10  space-y-2  "
    >
      <div className=" flex justify-between items-center my-10">
        <h2 className="text-xl ">Dashboard</h2>
        <div className="flex space-x-4">
          <Addbtn openModal={openModal} />
        </div>
      </div>
      <div className="flex flex-col space-x-4 space-y-10 pb-8 md:flex-row md:flex-wrap ">
        {[12, 3, 4, 5, 5].map((item) => (
          <IconCard />
        ))}
      </div>
      {/* /// filtter and search container */}
      <div className="flex space-x-4 ">
        <div className=" text-left ">
          <span className="ml-1"> search for all products</span>
          <Search />
        </div>
        <div className=" flex space-x-4 pb-8 md:flex-row md:flex-wrap ">
          {datafilterHeader.map((item) => (
            <div className="text-left">
              <span className="text-sm ml-1">{item.name}</span>
              <FilterBox />
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 400, width: "100%", marginTop: 40 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>

      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add new product details
                    </Dialog.Title>
                    <div className="flex   mt-2 h-60 bg-red-400">
                      <div className="bg-yellow-500 w-60">
                        <img src={"image??'../'"} />
                      </div>
                      <form className="flex-1 space-y-3">
                        <input
                          type="text"
                          placeholder="Name of the product"
                          className="border p-2 rounded-md w-80 outline-none"
                        />
                        <input
                          type="file"
                          placeholder="Name of the product"
                          className=" filetype  border p-2 rounded-md w-80 outline-none"
                          onChange={(event)=>onImageChange(event)}
                        />
                      </form>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default Dashboard;

//colums
// id
// name
// img
// desc
// Category__name
// qty
// price
// discount
