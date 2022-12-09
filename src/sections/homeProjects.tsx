import React from 'react'
import ProjectItem from '../components/projectItem'

import srcImgRestaurant from '../public/img/santamaria.png'
import srcImgBrokerland from '../public/img/brokerand.png'
import srcImgYDePostre from '../public/img/y-te-postre-la-guinda.png'
import srcImgBuscador from '../public/img/rebaja-tu-compra.png'
import srcImgHomeServices from '../public/img/home-services.png'

function HomeProjects() {
    return (
        <div className={"p-3 grid md:grid-cols-2 lg:p-0"}>
            <ProjectItem
                srcImg={srcImgRestaurant}
                altImg={"Santamaria"}
                title={"Restaurante"}
                technologies={"Wordpress, CSS3, HTML5, JavaScript"}
                description={""}
                urlProject={"https://santamariarestaurante.es"}
            />

            <ProjectItem
                srcImg={srcImgBrokerland}
                altImg={"Brokerland"}
                title={"Servicio de hosting"}
                technologies={"Wordpress, CSS3, HTML5, JavaScript"}
                description={""}
                urlProject={"https://brokerland.es"}
            />

            <ProjectItem
                srcImg={srcImgYDePostre}
                altImg={"Y de postre la guinda"}
                title={"Tienda online"}
                technologies={"Wordpress, Woocommerce, CSS3, HTML5, JavaScript"}
                description={""}
                urlProject={"https://ydepostrelaguinda.es"}
            />
            <ProjectItem
                srcImg={srcImgBuscador}
                altImg={"Rebaja tu compra"}
                title={"Buscador"}
                technologies={"Wordpress, PHP, CSS3, HTML5, JavaScript"}
                description={""}
                urlProject={"https://brokerland.es"}
            />

            <ProjectItem
                srcImg={srcImgHomeServices}
                altImg={"Home services"}
                title={"Servicios domésticos"}
                technologies={"Wordpress, ReactJS, PHP, CSS3, HTML5, JavaScript"}
                description={""}
                urlProject={"https://brokerland.es"}
            />
        </div>
    )
}

export default HomeProjects