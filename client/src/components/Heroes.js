import e, { response } from "express";
import React, { useState, useEffect } from "react";

//Based on tutorial, just a draft to test
function Heroes() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetch("/heroes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setHeroes(jsonRes.heroes));
  });
}

export default Users;
