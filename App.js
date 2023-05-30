import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./FetchData.css";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // you should import the React Bootstrap CSS file in your main file or index file


function FetchData() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setRecords(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  const addFunction = (e) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil"
      })
    });
    alert("Item is added");
  };
  const editFunction = (e) => {
    fetch("https://dummyjson.com/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil"
      })
    })
      .then((res) => res.json())
      .then(console.log);
    alert("Item is updated");
  };
  const deleteFunction = (e) => {
    fetch("https://dummyjson.com/products/1", {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(console.log);
    alert("Item is deleted");
  };
  return (
    <>
      <div>
        <ul>
          {records.map((list, index) => (
            <li key={index}>
              {list.id} | {list.title}
            </li>
          ))}
        </ul>
        <div>
          <Form className="form">
            <Form.Group>
              <Form.Label>Want to add an item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the item you want add"
              />
              <Button variant="primary" type="submit" onClick={addFunction}>
                Add
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Want to edit an item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the item you want edit"
              />
              <Button variant="primary" type="submit" onClick={editFunction}>
                Edit
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Want to delete an item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the item you want delete"
              />
              <Button variant="danger" type="submit" onClick={deleteFunction}>
                Delete
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
export default FetchData;
