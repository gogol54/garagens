import React from 'react'

const MidBox = () => {
  return (
    <div>
      <div className="cycle_section layout_padding">
         <div className="container">
            <h1 className="cycle_taital">Tipos de Aluguéis</h1>
            <p className="cycle_text"> Para alugar uma vaga do estacionamento será necessário documentar a negociação por meio de um contrato, de preferência, este será escrito com todas as suas cláusulas.  Abaixo mais informações das duas opções de locação disponíveis. </p>
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
                     <p className="lorem_text">Os aluguéis mensais consistem em um custo fixo, podendo ser utilizado tanto nos dias úteis quanto nos finais de semana e/ou feriados.</p>
                     <div className="btn_main">
                        <h4 className="price_text">Preço <span style={{color: '#f7c17b'}}>R$</span> <span style={{color:'#325662'}}>150/mês</span></h4>
                     </div>
                  </div>
               </div>
            </div>

            <div className="cycle_section_3 layout_padding">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="cycles_text"> Anual</h1>
                     <p className="lorem_text">Assim como os aluguéis mensais, este possui um preço fixo a ser pago mensal ou anualmente, entretanto, no plano anual é fornecido um controle para acessar o estacionamento em qualquer dia ou hora do ano contratado.</p>
                     <div className="btn_main">
                        <h4 className="price_text">Preço <span style={{color: '#f7c17b'}}>R$</span> <span style={{color:'#325662'}}>120/mês</span></h4>
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