import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Adventurous Noisy Deer</title>
        <meta property="og:title" content="Adventurous Noisy Deer" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text10">
              Contáctanos para más información
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Iniciar</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">#caracteristicas</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Inicio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text14">#inicio</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Contacto</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Características</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">#contacto</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text18">
              Página de Inicio con información relevante
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text19">
              Descubre las características de ComuniConexión
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">#casos-exito</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text21">Casos de Éxito</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Conoce casos de éxito de nuestra plataforma
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text23">Registrar</span>
          </Fragment>
        }
        logoSrc="/logo11-1500h.png"
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text24">Registrar</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text25">Iniciar</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">ComuniConexión</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27">
              Transformando la Comunicación Comunitaria
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1560242374-ca6dd3434522?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNvbG9tYmlhfGVufDB8fHx8MTczMjYzOTIwMHww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNvbG9tYmlhfGVufDB8fHx8MTczMjYzOTIwMHww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1570197820006-3e46f5ee01bb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxjb2xvbWJpYSUyMG11bmljaXBpb3xlbnwwfHx8fDE3MzI2Mzk0MDZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1520501247332-6fb052b72414?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxjb2xvbWJpYSUyMG11bmljaXBpb3xlbnwwfHx8fDE3MzI2Mzk0MDZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1532185922611-3410b1898a1c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGNvbG9tYmlhJTIwbXVuaWNpcGlvfGVufDB8fHx8MTczMjYzOTQwNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1534413340928-7bd74b65196f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNvbG9tYmlhJTIwbXVuaWNpcGlvfGVufDB8fHx8MTczMjYzOTQwNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
        imageSrc="/logo11-1500h.png"
        image4Src="https://images.unsplash.com/photo-1561165804-9a48a4ad1f47?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGNvbG9tYmlhJTIwbXVuaWNpcGlvfGVufDB8fHx8MTczMjYzOTQwNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1720067413300-4829f66331eb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHxjb2xvbWJpYSUyMG11bmljaXBpb3xlbnwwfHx8fDE3MzI2Mzk0MDZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text28">
              Participa en encuestas para conocer la opinión de la comunidad
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">Encuestas Interactivas</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text30">
              Interactúa con otros miembros de la comunidad en los foros
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text31">Noticias Actualizadas</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text32">
              Mantente informado con las últimas noticias de tu Junta de Acción
              Comunal
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Foros Comunitarios</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text34">¡Únete a ComuniConexión hoy!</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Mejora la comunicación en tu Junta de Acción Comunal y fortalece
              tu comunidad.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text36">Regístrate ahora</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text37">
              Haz oír tu voz y contribuye a la toma de decisiones en la
              comunidad respondiendo a nuestras encuestas interactivas que
              impulsan el cambio positivo.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38">
              Mantente al tanto de las últimas novedades y eventos en tu
              comunidad a través de nuestra sección de noticias actualizada
              constantemente.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text39">Foros de Discusión</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text40">Noticias</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text41">
              Participa en conversaciones significativas con otros miembros de
              la comunidad en nuestros foros de discusión, donde puedes
              compartir ideas y opiniones.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text42">Encuestas Interactivas</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text43">
              Crea una cuenta en nuestra plataforma para acceder a todas las
              funcionalidades y mejorar la comunicación en tu Junta de Acción
              Comunal.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text44">
              Interactúa con otros miembros de la comunidad, comparte ideas y
              opiniones en nuestros foros dedicados a temas de interés común.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text45">
              Explora las noticias y actualizaciones
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text46">
              Mantente al tanto de las últimas noticias y novedades relevantes
              para tu comunidad a través de nuestra sección de noticias.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text47">Regístrate en ComuniConexión</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text48">
              Participa en los foros y discusiones
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text49">
              Tu opinión es importante. Participa en nuestras encuestas para
              expresar tus ideas y preferencias sobre diferentes asuntos
              comunitarios.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text50">Opina a través de encuestas</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text51">
              Secretario de la JAC Villa Esperanza
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text52">
              Presidenta de la JAC Los Pájaros
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text53">María López</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text54">Ana Ramírez</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text55">
              ComuniConexión ha sido clave para fortalecer nuestra comunidad. La
              comunicación nunca había sido tan efectiva.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text56">Juan Pérez</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text57">Vocal de la JAC San Miguel</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text58">Carlos Martínez</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text59">
              Gracias a ComuniConexión, hemos logrado mejorar la comunicación
              entre los miembros de nuestra Junta de Acción Comunal. ¡Excelente
              plataforma!
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60">Tesorera de la JAC El Bosque</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text61">
              Estamos muy satisfechos con los resultados obtenidos gracias a
              ComuniConexión. Recomendado al 100%.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text62">Testimonios</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text63">
              Increíble herramienta para coordinar actividades y mantenernos
              informados. ¡Gracias ComuniConexión!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text64">
              ¡Transformó por completo nuestra forma de comunicarnos en la
              Junta! Una verdadera revolución.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text66">
              Visítanos en nuestra oficina principal en Bogotá para una atención
              personalizada.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text67">¡Contáctanos!</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text68">
              Envíanos un correo electrónico a info@comuniconexion.com y te
              responderemos a la brevedad.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text69">Bogotá, Colombia</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text70">Correo Electrónico</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text71">Acerca de Nosotros</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text72">Casos de Éxito</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text73">Inicio</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text74">Términos y Condiciones</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text75">Características</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text76">Contacto</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text77">Política de Cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78">Política de Privacidad</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
