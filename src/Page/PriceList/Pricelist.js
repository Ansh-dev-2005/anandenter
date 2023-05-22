import React from 'react'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import './pricelist.css'
import havells_wire from '../../pricelist/Havells_ConsumerCables.pdf'
import polycab_wire from '../../pricelist/Green-Wire-Brochure_1.pdf'
import kei_wire from '../../pricelist/KEI-HW-List-Price-19th-Jan-2023.pdf'
import havells_fan from '../../pricelist/Havells_fan_brouchur.pdf'
import orient_fan from '../../pricelist/fans-orient.pdf'
import orient_fan_pricelist from '../../pricelist/Fans-Price-List-orient.pdf'
import crompton_fan from '../../pricelist/Premium_Catalogue_-_Fans.pdf'
import orient_con_light from '../../pricelist/orient_lighting.pdf'






const Pricelist = () => {
    
  return (
    <div className='pricelist'>
        <Header/>
        <h1>Price List & Brouchers</h1>
        <div className='pricelist__content'>
            <div className='pricelist__content__item'>
                {/* order list */}
                <ol className='pricelist__content__item__list'>
                    <li>Havells Consumer Wire</li>
                    <embed src={havells_wire} type="application/pdf" width="100%" height="600px" />
                    <li>Polycab Consumer Wire</li>
                    <embed src={polycab_wire} type="application/pdf" width="100%" height="600px" />
                    <li>KEI Consumer Wire</li>
                    <embed src={kei_wire} type="application/pdf" width="100%" height="600px" />
                    <li>Havells Fans</li>
                    <embed src={havells_fan} type="application/pdf" width="100%" height="600px" />
                    <li>Orient Fans</li>
                    <embed src={orient_fan} type="application/pdf" width="100%" height="600px" />
                    <li>Orient Fans(PriceList)</li>
                    <embed src={orient_fan_pricelist} type="application/pdf" width="100%" height="600px" />
                    <li>Cromptom Fans</li>
                    <embed src={crompton_fan} type="application/pdf" width="100%" height="600px" />
                    <li>Orient Consumer Lighting</li>
                    <embed src={orient_con_light} type="application/pdf" width="100%" height="600px" />





                </ol>

                

       


       


            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Pricelist