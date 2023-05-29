import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa'

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const response = await axios.post(
        "https://server.alamkaryafurniture.com/admin/",
        formData
      );

      console.log(response); // Cetak respons dari server ke konsol

      if (response.status === 200) {
        navigate("/admin/");
        Swal.fire("Success!", "Your data has been added.", "success");
      } else {
        Swal.fire("Success!", "Your data has been added.", "success");
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "Failed to add data.", "error");
    }
  };

  const handleClickButton = (e) => {
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mr-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      text: "You want to add this data?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Add!',
      cancelButtonText: 'Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        saveProduct(e);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your data was not added.',
          'error'
        )
      }
    });
  }

  return (
    <>
      <div className="admin__back">
        <div className="admin__backbutton">
          <Link to='/admin' className="admin__backname"><FaArrowCircleLeft/> Back</Link>
        </div>
      </div>
      <div className="admin__mainform">
        <form className='admin__form'>
          <div className="admin__childform">
            <label className="admin__head">Tambah Data</label>
            <div className="admin_sidelink">
              <h6 className="admin_judul">Nama Barang:</h6>
              <input
                type="text"
                className="admin__inputlink"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Meja"
                list="Format"
              />
            </div>
            <div className="admin_sidelink">
              <h6 className="admin_judul">Deskripsi Barang:</h6>
              <textarea
                type="text"
                className=" admin__deskripsi"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Deskripsi"
                list="Format"
              />
            </div>
            <div className="justify-center relative">
              <label className="admin__head justify-center flex relative align-center">Pilih Gambar:</label>
              <input
                type="file"
                className="admin__inputimage flex justify-center cursor-pointer"
                onChange={loadImage}
              />
              {preview && (
                <figure className="admin__previewimage">
                  <img src={preview} alt="PreviewImage" className="admin__mainpreview" />
                </figure>
              )}
            </div>
            <div className="">
              <button type="submit" className="admin__buttonsave" onClick={handleClickButton}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProduct;
