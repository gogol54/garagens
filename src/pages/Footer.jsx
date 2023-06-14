import React from 'react'

const Footer = () => {

  return (
    <div>
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
              <h1 className="request_text padding_left_0">
                <img 
                  alt='garagem1'
                  src="https://cdn-icons-png.flaticon.com/512/5899/5899542.png"
                  width='100px'
                  height='100px'
                />
                Cesar Garagens
              </h1>
              <center>
                <div >
                  <div className="call_text"><a href="/">
                    <span className="padding_left_0"></span></a></div>
                  <div className="call_text"><a href="/">
                    <img 
                      alt='garagem2'
                      src="images/call-icon.png"
                    /><span className="padding_left_0">Ligue agora  +55 559644-7083 </span></a></div>
                  <div className="call_text"><a href="/">
                    <img 
                      alt='garagem2'
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                      width='25px'
                      height='25px'
                    /><span className="padding_left_0">cesarduarte787@gmail.com</span></a>
                  </div>
                  <div className="call_text"><a href="https://www.facebook.com/cesar.duarte.14268">
                    <img 
                      alt='garagem2'
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEU6VZ////8qS5yosdA4U54rS5r8/P0uTZtDXKOfqcs0UJ1wgbX29/q3v9gbQZfj5e9ccKxpe7J3h7jCyN7r7fQjRZmMmMJTaah+jLvS1uZLYqWXosfKz+EGOJMSPJWwudSSdZ67AAABTElEQVRoge3XYXOCMAyAYcAAFVhRtDimm///X24fNlsK9UIadmyX92vvntvN2MYkkSRJ2loAULkBH11lpToca6cDl15m3emcjjtlLHRlel/+6oUFzy7tlGbCzesczYObft7mwPMuYDPgoEI2A66H9fCqDtrxuAn/4dE4vIXtaLy8roib24Qs2u/Ou0hc+1dKW7/rn2I/zw/fNlWk6JR5+IXRBg8fNJ89we88z8M8Hjsfz/FccMHROMMowqMJDk4kWtkSD3fPFAVXTWEb42nhHnXLbzFQTYqLsOWi8WIxvQBvzIp4S7jc0Thl90fjlK8rGu8J7ykap/zeQuPLaTxeECYRjbeUGxKL32i4f1vNR9pxQe1t3gY9XO3RkbTZQfko12N8p+1Z9Nb4jx7orb/+Yfzv/lsE/31cRlFwPC7TIvhGcBlFwTeCyyguxj8B/JEUhCero8IAAAAASUVORK5CYII="
                      width='25px'
                      height='25px'
                    /><span className="padding_left_0">Via inbox do Facebook</span></a>
                  </div>
                  <div className="call_text"><a href="https://www.instagram.com/cesarvduarte/">
                    <img 
                      alt='garagem2'
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                      width='25px'
                      height='25px'
                    /><span className="padding_left_0">Direct do Instagram</span></a>
                  </div>
                  <div className="call_text"><a href="https://contate.me/taxi-cesar">
                    <img 
                      alt='garagem2'
                      src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5302_-_Whatsapp-512.png"
                      width='25px'
                      height='25px'
                    /><span className="padding_left_0">Contato via WhatsApp</span></a>
                  </div>
                </div>
              </center>
            </div>
         </div>
      </div>

      <div className="footer_section layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 col-sm-12 ">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe 
                          title='myLocate'
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1062.8123202339204!2d-54.917867449174956!3d-30.245754960631967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9500e54f3fc91feb%3A0x4a4fd319604be06e!2sCesar%20Garagens!5e0!3m2!1spt-BR!2sbr!4v1675362417211!5m2!1spt-BR!2sbr"                          width="100%" 
                          height="400px" 
                          id="gmap_canvas"
                          frameborder="0" 
                          
                          allowfullscreen="">
                      </iframe>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>

      <div className="copyright_section">
         <div className="container">
          <p className="copyright_text" style={{color:'#262626'}}>
            © 2023 Cesar Garagens - <a style={{color:'#262626'}} href='https://jardeleko.github.io/portfolio/'>
            Todos os direitos reservados.</a>
          </p>
         </div>
      </div>
    </div>
  )
}

export default Footer