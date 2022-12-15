import React from 'react'

import ProjectItem from '../components/projectItem'

import Text from '../components/text'

import srcImgRestaurant from '../public/img/santamaria.png'
import srcImgBrokerland from '../public/img/brokerand.png'
import srcImgYDePostre from '../public/img/y-te-postre-la-guinda.png'
import srcImgBuscador from '../public/img/rebaja-tu-compra.png'
import srcImgHomeServices from '../public/img/home-services.png'

function HomeProjects() {
    const refContainer = React.useRef<HTMLDivElement>(null);
    const [btnText, setBtnText] = React.useState("Show more projects")

    const expandContainer = () => {
        if (refContainer.current !== null && btnText === "Show more projects") {
            refContainer.current.classList.remove("h-[65rem]")
            refContainer.current.classList.remove("xl:h-[45rem]")
            setBtnText("Hide")
        }
        if (refContainer.current !== null && btnText === "Hide") {
            refContainer.current.classList.add("h-[65rem]")
            refContainer.current.classList.add("xl:h-[45rem]")
            setBtnText("Show more projects")
        }
    }

    return (
        <div ref={refContainer} className="relative bg-img h-[65rem] xl:h-[45rem] overflow-hidden transition-all">

            <div className="xl:w-8/12 mx-auto inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-20 pb-8  dark:from-slate-900 absolute z-10">
                <button
                    onClick={expandContainer}
                    className="text-slate-300 btn-secondary cursor-pointer z-20"
                >{btnText}</button>
            </div>

            <div className='xl:w-8/12 mx-auto py-12 pb-32'>
                <div className='md:w-6/12 px-3'>
                    <Text
                        text="Proyectos"
                        size="xl"
                        style="text-sky-400"
                    />
                    <span className='rectangle-button bg-sky-400'></span>
                    <Text
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."
                        style="text-slate-500"
                    />
                    <br />
                    <Text
                        text="Inventore facere earum nostrum quod illo libero qui minima. Eligendi, explicabo esse."
                        style="text-slate-500"
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