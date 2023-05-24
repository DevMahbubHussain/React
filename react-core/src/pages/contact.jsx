import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        inventore minima eius dicta! Quos cum maiores assumenda exercitationem
        expedita, corrupti cupiditate non aspernatur iusto aliquam temporibus ea
        obcaecati possimus rem?
          </p>
          <button onClick={() => { navigate('/') }}>Back to the Home Page</button>
    </div>
  );
}
