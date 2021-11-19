import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import classes from "../../Table.module.css";
import { useRouteMatch } from "react-router";

const ManageToys = () => {
    let { path } = useRouteMatch();
    const [toys, setToys] = useState([]);
    const loadToys = async () => {
        const response = await fetch(
            "https://toys-hub.herokuapp.com/toys"
        );
        const responseData = await response.json();
        setToys(responseData);
    };
    //Load all toys	
    useEffect(() => {
        loadToys();
    }, []);
    //Delete toy handler	
    const handleDelete = async (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30764a',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    {
                        const response = fetch(
                            `https://toys-hub.herokuapp.com/toys/${_id}`,
                            {
                                method: "DELETE",
                            }
                        );
                        const responseData = response.json;
                        loadToys();

                    }
                    Swal.fire(
                        'Deleted!',
                        "Selected Toy has been deleted.",
                        'success'
                    ).then(function () {
                        window.location = `${path}/`;
                    });
                }
            })
    };
    let count = 1;

    //Approve order handler
    const handleApprove = async (_id) => {
        const response = await fetch(
            `https://toys-hub.herokuapp.com/toys/${_id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: "shipped" }),
            }
        );
        const responseData = await response.json();
        if (responseData.ok > 0) {
            loadToys();
        }
    };


    return (
        <section className={classes.toys}>
            <div className="container">
                <h2 className="section-heading">All Toys</h2>
                <div className="row">
                    <div className={`col-md-12 ${classes["main-datatable"]}`}>
                        <div className={classes.card_body}>
                            <div className={classes["overflow-x"]}>
                                <table
                                    style={{ width: "100%" }}
                                    className={`table ${classes["cust-datatable"]} ${classes.dataTable} ${classes["no-footer"]}`}
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: "20px" }}>ID</th>
                                            <th style={{ minWidth: "150px" }}>Toy's Name</th>

                                            <th style={{ minWidth: "100px" }}>Availability</th>
                                            <th style={{ minWidth: "80px" }}>Toys Image</th>
                                            <th style={{ minWidth: "120px" }}>Price</th>
                                            <th style={{ minWidth: "100px" }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {toys.map((toy) => {
                                            const image = toy.imageCover?.startsWith("toy-")
                                                ? `toys/${toy.imageCover}`
                                                : toy.imageCover;
                                            return (
                                                <tr key={toy._id}>
                                                    <td>{count++}</td>
                                                    <td>
                                                        {toy.name}
                                                    </td>
                                                    <td>
                                                        {toy.availability}

                                                    </td>
                                                    <td>
                                                        <img
                                                            src={image}
                                                            alt={toy.name}
                                                            className="img-fluid rounded me-2"
                                                            width="40"
                                                        />
                                                    </td>
                                                    <td>${toy.price}</td>
                                                    <td>
                                                        <MdDelete
                                                            className={classes.delete}
                                                            onClick={() => handleDelete(toy._id)}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageToys;
