import React from 'react'

const Card = () => {
        let Product ={
                title : "Krunch Burger",
                text : "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
                prices :850,
            };
        return (
          <div className="card mt-5" style={{width: '25rem'}}>
  <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
  <div class="card-body">
    <h1>{Product.title}</h1>
    <p className="card-text">{Product.text}</p>
    <a href="#" className="btn btn-danger rounded-pill">{Product.prices}</a>
</div>
</div>
        );
      }
      
export default Card