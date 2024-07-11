import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeProducts.css'; 

function HomeProducts({ title, products, bannerImage }) {
  return (
    <div className="container-fluid mt-3">
      <div className="row p-1">
        <section className="col-md-4">
          <h2 className="mb-3">{title}</h2>
          <div className="row">
            {products.map((item, index) => (
              <div key={index} className="col-6 mb-3">
                <div className="card h-100">
                  <img src={item.image} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-success">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="col-md-8">
          <div className="card bg-light h-100">
            <img src={bannerImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="card-img" alt="Banner" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeProducts;
