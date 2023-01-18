import React, { useState } from 'react'
// import client from './../mailer'

const Footer = () => {
  const [inputs, setInputs] = useState([])

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // await client.sendEmail({
      //   "From": "jardelduarte594@gmail.com",
      //   "To": "jardelduarte594@gmail.com",
      //   "Subject": "Hello from Postmark",
      //   "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
      //   "TextBody": "Hello from Postmark!",
      //   "MessageStream": "broadcast"
      // });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_main">
               <h1 className="request_text">Contate nos</h1>
               <form action="#" id="handleSubmit">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="email-bt" 
                      placeholder="Nome" 
                      onChange={handleChange}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="email-bt" 
                      placeholder="Email" 
                      name="email"
                      onChange={handleChange}
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="email-bt" 
                      placeholder="Numero" 
                      onChange={handleChange}
                      name="number"
                      id="number"
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      className="massage-bt" 
                      placeholder="Mensagem" 
                      rows="5" 
                      id="message" 
                      onChange={handleChange}
                      name="message">
                    </textarea>
                  </div>
              </form>
              <div className="send_btn">
                <a href="/" type="submit" onClick={handleSubmit}>ENVIAR</a>
              </div>
            </div>
         </div>
      </div>

      <div className="footer_section layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8 col-sm-12 padding_0">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe 
                          title='myLocate'
                          src="https://maps.google.com/maps?q=R%20Jo%C3%A3o%20Brasil%202085,%20Ros%C3%A1rio%20do%20Sul&t=&z=19&ie=UTF8&iwloc=&output=embed" 
                          width="600" 
                          height="400" 
                          id="gmap_canvas"
                          frameborder="0" 
                          style={{border:'0px', width:'100%'}} 
                          allowfullscreen="">
                      </iframe>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-12" style={{marginTop:'200px'}}>
                  <div className="call_text"><a href="/">
                    <img 
                      alt='garagem1'
                      src="https://cdn-icons-png.flaticon.com/512/5899/5899542.png"
                      width='25px'
                      height='25px'
                    /><span className="padding_left_0">Cesar Garagens</span></a></div>
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
                    /><span className="padding_left_0">cesarduarte787@gmail.com</span></a></div>
                  <div className="social_icon">
                     <ul>
                        <li><a href="https://www.facebook.com/cesar.duarte.14268">
                          <img 
                            alt='garagem2'
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEU6VZ////8qS5yosdA4U54rS5r8/P0uTZtDXKOfqcs0UJ1wgbX29/q3v9gbQZfj5e9ccKxpe7J3h7jCyN7r7fQjRZmMmMJTaah+jLvS1uZLYqWXosfKz+EGOJMSPJWwudSSdZ67AAABTElEQVRoge3XYXOCMAyAYcAAFVhRtDimm///X24fNlsK9UIadmyX92vvntvN2MYkkSRJ2loAULkBH11lpToca6cDl15m3emcjjtlLHRlel/+6oUFzy7tlGbCzesczYObft7mwPMuYDPgoEI2A66H9fCqDtrxuAn/4dE4vIXtaLy8roib24Qs2u/Ou0hc+1dKW7/rn2I/zw/fNlWk6JR5+IXRBg8fNJ89we88z8M8Hjsfz/FccMHROMMowqMJDk4kWtkSD3fPFAVXTWEb42nhHnXLbzFQTYqLsOWi8WIxvQBvzIp4S7jc0Thl90fjlK8rGu8J7ykap/zeQuPLaTxeECYRjbeUGxKL32i4f1vNR9pxQe1t3gY9XO3RkbTZQfko12N8p+1Z9Nb4jx7orb/+Yfzv/lsE/31cRlFwPC7TIvhGcBlFwTeCyyguxj8B/JEUhCero8IAAAAASUVORK5CYII="
                            width="25px"
                            height="25px"
                          />
                        </a></li>
                        <li><a href="https://www.instagram.com/cesarvduarte/">
                          <img 
                            alt='garagem2'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                            width="25px" 
                            height="25px"  
                          />
                        </a></li>
                        <li><a href="https://contate.me/taxi-cesar">
                          <img 
                            alt='garagem2'
                            src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5302_-_Whatsapp-512.png"
                            width="25px"
                            height="25px"
                          />
                        </a></li>
                        
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">Copyright 2019 All Right Reserved By.
            </p>
         </div>
      </div>
    </div>
  )
}

export default Footer