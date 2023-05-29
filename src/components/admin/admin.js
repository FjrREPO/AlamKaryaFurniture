import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaSearch } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'
import Swal from 'sweetalert2'
import '../../slider.css';
import { HiPlus } from 'react-icons/hi';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getProducts();
  }, [page, keyword]);

  const getProducts = async () => {
    const response = await axios.get(
        `https://server.alamkaryafurniture.com/admin?search_query=${keyword}&page=${page}&limit=${limit}`
      );
      const { result, totalPage, totalRows } = response.data;
      setProducts(result);
      setTotalPages(totalPage);
      setTotalRows(totalRows);
  };


  const handleClickButton = async (productId) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        text: "You want to delete this data?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete!',
        cancelButtonText: 'Cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://server.alamkaryafurniture.com/admin/${productId}`);
          swalWithBootstrapButtons.fire(
            'Success!',
            'Your data has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your data was not deleted.',
            'error'
          )
        }
      })
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 0; i < totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`pagination justify-center flex relative gap-6 cursor-pointer ${i === page ? "pagination-link-active" : "pagination-link-disabled"}`}
        >
          {i+1}
        </button>
      );
    }
    return pagination;
  };

  return (
    <div className="admin__addmain">
      <div className="admin__button">
        <div className="admin__backadmin">
          <div className="admin__backbutton">
            <Link to='/' className="admin__backname"><FaArrowCircleLeft /> Back</Link>
          </div>
        </div>
        <div className="admin__add">
          <div className="admin__addbutton">
            <Link to='/admin/add/' className="admin__backname"><FaRegPlusSquare /> Add</Link>
          </div>
        </div>
      </div>
      <form onSubmit={searchData}>
        <div className="products__wrap">
          <div className="products__search">
            <input
              type="text"
              className="searchTerm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari..."
            />
            <button type="submit" className="searchButton">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
      <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
        {products.map((product) => {
          return (
            <>
              <div
                className='w-full max-w-[290px] h-[550px] text-left'
                key={product._id}
              >
                <div className='products__produk border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition'>
                  <img src={product.url} alt='' className='products__img flex justify-center relative' />
                  <div className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                    <HiPlus className='text-xl text-primary' />
                  </div>
                </div>
                <div className='font-semibold lg:text-xl text-center products__main'>{product.name}</div>
                <div className='flex items-center gap-x-3  products__main'>
                  <div className="break-words max-w-[290px] px-5 line-clamp-3">{product.description}</div>
                </div>
                <div className='products__btn flex'>
                  <a href={`/edit/${product.id}`} className="products__order flex"><span>Edit</span></a>
                </div>
                <div className='products__btn flex'>
                  <button onClick={() => handleClickButton(product.id)} className="products__order flex"><span>Delete</span></button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <p className="text-center">
        Page: {totalRows > 0 ? page + 1 : 0} of {totalPages}
      </p>
      <p className="has-text-centered has-text-danger">{msg}</p>
      <div className="pagination justify-center flex relative gap-6 pb-10 cursot-pointer mt-5">
        {renderPagination()}
      </div>
    </div>
  );
}

export default Admin;
