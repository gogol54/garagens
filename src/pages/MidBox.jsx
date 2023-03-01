import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"

const MidBox = () => {
   function handleClick() {
      var x = document.getElementById("myDIV")
      if (x.style.display === "block") {
         x.style.display = "none"
      } else {
         x.style.display = "block"
      }
   }
  return (
    <div>
      <div className="cycle_section layout_padding">
         <div className="container">
            <h1 className="cycle_taital">Tipos de Aluguéis</h1>
            <p className="cycle_text"> Atualmente possuímos dois tipos de contrato para as vagas ofertadas, sendo o primeiro mensal e o segundo um plano anual. </p>
            <center>
               <button onClick={handleClick} className='btn btn-outline-info' style={{marginTop:'10px'}}>Saiba Mais <AiOutlineArrowDown style={{justifyContent:'center', alignItems:'center'}}/></button>
            </center>
            <div id="myDIV">
               Para alugar uma vaga do estacionamento será necessário documentar a negociação por meio de um contrato, de preferência, este será escrito com todas as suas cláusulas.  Abaixo mais informações das duas opções de locação disponíveis.
            </div>
            <div className="cycle_section_2 layout_padding">
               <div className="row">
                  <div className="col-md-6">
                     <div className="box_main">
                        <h6 className="number_text">01</h6>
                        <div className="image_2">
                           <img className="resize_picture" src="images/one.jpg" alt="fotodagaragem"/></div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <h1 className="cycles_text">Mensal</h1>
                     <p className="lorem_text">Os aluguéis mensais consistem na utilização do estacionamento durante todas as manhãs e tardes do mês (horário comercial), a renoção é automática e ocorre a cada 30 dias. Caso contrário, se o locatário optar pela não renovação, este deve comunicar o locador com uma semana de antecedência.  </p>
                     <div className="btn_main">
                        <h4 className="price_text">
                           Preços  
                           <span style={{color: '#f7c17b', margin:'5px'}}>R$</span> 
                           <span style={{color:'#325662'}}>
                              120
                           <img src='https://cdn-icons-png.flaticon.com/512/171/171239.png' alt='icone de um carro' height='35px' width='35px'/><br/>
                              ou    <span style={{color: '#f7c17b', margin:'5px'}}>R$</span> 50
                           <img src='https://images.vexels.com/media/users/3/152603/isolated/preview/9f2ea8f15f94ee92c264ac069c0660c8-cone-de-moto-scooter-retr.png' alt='icone de uma moto' height='35px' width='35px'/></span></h4> 
                     </div>
                  </div>
               </div>
            </div>

            <div className="cycle_section_3 layout_padding">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="cycles_text"> Anual</h1>
                     <p className="lorem_text">Assim como os aluguéis mensais, este possui total disponibilidade durante o horário comercial, entretanto, a validade é de 12 meses e o renovamento acontece somente no término do contrato. O cancelamento deste plano exige aviso prévio de 30 dias.</p>
                     <div className="btn_main">
                        <h4 className="price_text">
                           Preços  
                           <span style={{color: '#f7c17b', margin:'5px'}}>R$</span> 
                           <span style={{color:'#325662'}}>
                              100
                           <img src='https://cdn-icons-png.flaticon.com/512/171/171239.png' alt='icone de um carro' height='35px' width='35px'/><br/>
                              ou    <span style={{color: '#f7c17b', margin:'5px'}}>R$</span> 50
                           <img src='https://images.vexels.com/media/users/3/152603/isolated/preview/9f2ea8f15f94ee92c264ac069c0660c8-cone-de-moto-scooter-retr.png' alt='icone de uma moto' height='35px' width='35px'/></span></h4> 
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="box_main_3">
                        <h6 className="number_text_2">02</h6>
                        <div className="image_2"><img className="resize_picture" alt="fotodagaragem" src="images/oneligth.jpg" /></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="read_btn_main">
            </div>
         </div>
      </div>
    </div>
  )
}

export default MidBox