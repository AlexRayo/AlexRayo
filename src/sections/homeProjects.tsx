import React from 'react'
import ProjectItem from '../components/projectItem'

import Text from '../components/text'

import srcImgRestaurant from '../public/img/santamaria.png'
import srcImgBrokerland from '../public/img/brokerand.png'
import srcImgYDePostre from '../public/img/y-te-postre-la-guinda.png'
import srcImgBuscador from '../public/img/rebaja-tu-compra.png'
import srcImgHomeServices from '../public/img/home-services.png'

function HomeProjects() {
    return (
        <div className="bg-sky-100 py-12">
            <div className='2xl:w-7/12 mx-auto'>
                <div className='md:w-6/12 px-3'>
                    <Text
                        text="Proyectos"
                        size="xl"
                        color="text-primary"
                    />
                    <span className='rectangle-button'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        color="text-primary"
                    />
                    <br />
                    <Text
                        text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                        color="text-primary"
                    />
                </div>

                <div className={"p-3 grid md:gap-x-12 md:gap-y-4 md:grid-cols-2 lg:p-0"}>                    

                    <ProjectItem
                        srcImg={srcImgHomeServices}
                        altImg={"Home services"}
                        title={"Servicios domésticos"}
                        technologies={"Wordpress, ReactJS, PHP, CSS3, HTML5, JavaScript"}
                        description={"Este sitio web posee formulario con ReactJS y PHP para capturar peticiones de servicios por parte de los clientes"}
                        urlProject={"https://home-services.es/"}
                    />                    

                    <ProjectItem
                        srcImg={srcImgYDePostre}
                        altImg={"Y de postre la guinda"}
                        title={"Tienda online"}
                        technologies={"Wordpress, Woocommerce, Stripe, CSS3, HTML5, JavaScript"}
                        description={"Tienda online con capacidad de realizar pagos con tarjeta, posee su propio buscador, carrito, creación de cuentas por parte del cliente, blog y gestion de facturación"}
                        urlProject={"https://ydepostrelaguinda.com/"}
                    />

                    <ProjectItem
                        srcImg={srcImgBuscador}
                        altImg={"Rebaja tu compra"}
                        title={"Buscador"}
                        technologies={"Wordpress, PHP, CSS3, HTML5, JavaScript"}
                        description={"Sitio web con buscador en PHP para encontrar ofertas de productos y servicios de negocios/tiendas online afiliadas"}
                        urlProject={"https://rebajatucompra.com/"}
                    />
                    <ProjectItem
                        srcImg={srcImgBrokerland}
                        altImg={"Brokerland"}
                        title={"Servicio de hosting"}
                        technologies={"Wordpress, CSS3, HTML5, JavaScript"}
                        description={"Sitio web informativo con formulario de solicitud de servicios y chat directo"}
                        urlProject={"https://brokerland.es/"}
                    />
                    <ProjectItem
                        srcImg={srcImgRestaurant}
                        altImg={"Santamaria"}
                        title={"Restaurante"}
                        technologies={"Wordpress, CSS3, HTML5, JavaScript"}
                        description={"Sitio web informativo al cual se ha implementado chat directo, google Maps e información básica del negocio"}
                        urlProject={"https://santamariarestaurante.es/"}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeProjects