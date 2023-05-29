import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        try {
            const response = await axios.get(`https://server.alamkaryafurniture.com/admin/${id}`);
            setTitle(response.data.name);
            setDescription(response.data.description);
            setPreview(response.data.url);
        } catch (error) {
            console.log(error);
        }
    };

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    // const updateProduct = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("name", title);
    //     formData.append("description", description);
      
    //     try {
    //       const swalWithBootstrapButtons = Swal.mixin({
    //         customClass: {
    //           confirmButton: "btn btn-success",
    //           cancelButton: "btn btn-danger",
    //         },
    //         buttonsStyling: false,
    //       });
      
    //       const result = await swalWithBootstrapButtons.fire({
    //         text: "Do you want to edit this data?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes",
    //         cancelButtonText: "Cancel",
    //         reverseButtons: true,
    //       });
      
    //       if (result.isConfirmed) {
    //         await axios.patch(`https://server.alamkaryafurniture.com/admin/${id}`, formData);
    //         navigate("/admin");
    //         swalWithBootstrapButtons.fire("Success", "Your data has been edited", "success");
    //       } else if (result.dismiss === Swal.DismissReason.cancel) {
    //         swalWithBootstrapButtons.fire("Cancelled", "Your data was not edited", "error");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       Swal.fire("Error", "An error occurred while updating the data", "error");
    //     }
    // };


    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
    };

    const handleClickButton = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        try {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
            text: "You want to edit this data?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            axios.patch(`https://server.alamkaryafurniture.com/admin/${id}`, formData, {
            });
            navigate("/admin");
            swalWithBootstrapButtons.fire(
                'Success!',
                'Your data has been edited.',
                'success'
            )
            } else if (
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your data was not edited.',
                'error'
            )
            }
        })
        } catch (error) {
        console.log(error);
        }
    }


    return (
        <>
            <div className="admin__back">
                <div className="admin__backbutton">
                    <Link to='/admin' className="admin__backname"><FaArrowCircleLeft/> Back</Link>
                </div>
            </div>
            <div className="admin__mainformedit">
                <form onSubmit={updateProduct} className='admin__form'>
                    <div className="admin__childform">
                        <label className="admin__head">Edit Data</label>
                            <div className="admin_sidelink">
                                <input
                                    type="text"
                                    className="admin__inputlink"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Meja"
                                />
                            </div>
                            <div className="admin_sidelink">
                                <input
                                    type="text"
                                    className="admin__inputlink"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Deskripsi"
                                />
                            </div>
                            <div className="admin__imgprev">
                                <div>
                                    <label className="admin__head head22">Choose Image</label>
                                        <input
                                            type="file"
                                            className="admin__inputimage"
                                            onChange={loadImage}
                                        />
                                    {preview && (
                                        <figure className="admin__previewimage">
                                            <img src={preview} alt="PreviewImage" className="admin__mainpreview" />
                                        </figure>
                                    )}
                                </div>
                            </div>
                        <div className="">
                            <button type="submit" className="admin__buttonsave" onClick={(e)=>handleClickButton(e)}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProduct;
