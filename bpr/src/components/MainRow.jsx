const MainRow = () => {
  return (
    <section id="blog" className="ptb servicebox">
      <div className="container text-center">
        <div className="center-align">
          <h2>Group of companies</h2>
          <p className="lead">Our motto is to satisfy all our customer needs</p>
        </div>
      </div>
      <div className="row main-row">
        <div className="col-xs-12 col-sm-3 zoom mb-30 row__item">
          <div className="inner-header-wrapper line-box">
            <i className="fas fa-chess-king fa-5x row__img"></i>
            <h3>SRIVASAGA ENTERPRISES</h3>
            <p>All types of Loan for all your needs to success</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 zoom mb-30 row__item">
          <div className="inner-header-wrapper line-box">
            <i className="fas fa-chart-line fa-5x row__img"></i>
            <h3>SSV & SREE</h3>
            <p>Sister concern for Srivasaga Enterprises for loan operations</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 zoom mb-30 row__item">
          <div className="inner-header-wrapper line-box">
            <i className="fas fa-smile fa-5x row__img"></i>
            <h3>SRI VASAGA SEVA TRUST</h3>
            <p>Non-profit organization for more than 20 children</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 zoom mb-30 row__item">
          <div className="inner-header-wrapper line-box">
            {" "}
            <i className="fas fa-car fa-5x row__img"></i>
            <h3>AVS VISA & TRAVELS</h3>
            <p>We have all types of vehicles for all your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainRow;
