//Made by Santiago Santafe
import React from 'react';

const Formulario = () => {
    return (
        <section className="formulario">
            <form action="">
                <h2 className="form_title">Cotiza ahora</h2>
                <div className="input">

                    <div className='form_group'>
                    <input type="text" id="name" className='form_input' placeholder=" " />
                    <label htmlFor="name" className='form_label'>Nombre Completo:</label>
                    <span className='form_line'></span>
                    </div>

                    <div className='form_group'>
                    <input type="text" id="email" className='form_input' placeholder=" " />
                    <label htmlFor="email" className='form_label'>Email:</label>
                    <span className='form_line'></span>
                    </div>

                    <div className='form_group'>
                    <input type="text" id="telefono" className='form_input' placeholder=" " />
                    <label htmlFor="telefono" className='form_label'>Telefono:</label>
                    <span className='form_line'></span>
                    </div>
                    
                    <div className='form_group'>
                    <input type="text" id="msg" className='form_input' placeholder=" " />
                    <label htmlFor="msg" className='form_label'>Tu mensaje:</label>
                    <span className='form_line'></span>
                    </div>
                </div>
                <button type='submit' className="form_submit" value="entrar">Cotiza con nosotros!</button>
            </form>
        </section>
    )
}
export default Formulario;