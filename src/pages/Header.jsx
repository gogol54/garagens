import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="header_section header_bg">
         <div className="banner_section layout_padding" >
            <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="image_1"><img alt="fotodaentradadagaragem" src="./images/frontright.jpg" /></div>
                          </div>
                           <div className="col-md-5">
                              <h1 className="banner_taital">Seu carro seguro o ano inteiro</h1>
                              <p className="banner_text" > Disponibilizamos de estacionamento para maior segurança do seu carro. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-7">
                              <div className="image_1"><img alt="fotodagaragem" src="./images/right3.jpg"/></div>
                           </div>
                           <div className="col-md-5">
                              <h1 className="banner_taital">Descrição das Vagas</h1>
                              <p className="banner_text">As vagas possuem telhado e amplo espaço. Para sua tranquilidade, posteriormente serão incluídas câmeras de monitoramento. </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-angle-right"></i>
               </a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Header