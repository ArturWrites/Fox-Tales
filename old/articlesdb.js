"use strict";

const articlesDB =
[
  {
    nombreBlog:"Una Victoria Perdida",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Septiembre 23, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/una_victoria_perdida.html"
  },
  {
    nombreBlog:"Un Futuro Perfecto",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Septiembre 09, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/un_futuro_perfecto.html"
  },
  {
    nombreBlog:"La Ultima Rosa",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Septiembre 02, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_ultima_rosa.html"
  },
  {
    nombreBlog:"Gizli Capítulo 4",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Agosto 26, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/gizli_capítulo_4.html"
  },
  {
    nombreBlog:"Gizli Capítulo 3",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Agosto 19, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/gizli_capítulo_3.html"
  },
  {
    nombreBlog:"Gizli Capítulo 2",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Agosto 12, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/gizli_capítulo_2.html"
  },
  {
    nombreBlog:"Gizli Capítulo 1",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Agosto 05, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/gizli_capítulo_1.html"
  },
  {
    nombreBlog:"Crónicas de una Inmortal Parte 3",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 29, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/cronicas_de_una_inmortal_3.html"
  },
  {
    nombreBlog:"Crónicas de una Inmortal Parte 2",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 22, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/cronicas_de_una_inmortal_2.html"
  },
  {
    nombreBlog:"Crónicas de una Inmortal Parte 1",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 15, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/cronicas_de_una_inmortal_1.html"
  },
  {
    nombreBlog:"La Fantasía de Nule",
    imagenBlog:"images/Pelicula_Amor_de_Gata.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 13, 2020",
    tipo:"Pelicula",
    titulo:"Amor de Gata",
    capitulo:"none",
    tiempo:"Min. 5:10 - 7:21",
    link: "peliculas/la_fantasia_de_nule.html"
  },
  {
    nombreBlog:"El Dilema de los Oficiales Summer y Dunn",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 08, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/el_dilema_de_los_oficiales_summer_y_dunn.html"
  },
  {
    nombreBlog:"El Reto de Quetzalcóatl",
    imagenBlog:"images/Fate_Grand_Order_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 06, 2020",
    tipo:"Serie",
    titulo:"Fate Grand Order",
    capitulo:"Capitulo: 11",
    tiempo:"Min. 7:10 - 9:21",
    link: "series/el_reto_de_quetzalcoatl.html"
  },
  {
    nombreBlog:"Los Gólems y la Hechicera",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Julio 01, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/los_golems_y_la_hechicera.html"
  },
  {
    nombreBlog:"El Mundo de Dioses y Humanos",
    imagenBlog:"images/Fate_Grand_Order_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 29, 2020",
    tipo:"Serie",
    titulo:"Fate Grand Order",
    capitulo:"Capitulo: 9",
    tiempo:"Min. 17:30 - 22:18",
    link: "series/el_mundo_de_dioses_y_humanos.html",
  },
  {
    nombreBlog:"Beber, Comer, Cantar, Bailar",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 24, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/beber_comer_cantar_bailar.html"
  },
  {
    nombreBlog:"La Gorgona Indestructible",
    imagenBlog:"images/Fate_Grand_Order_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 22, 2020",
    tipo:"Serie",
    titulo:"Fate Grand Order",
    capitulo:"Capitulo: 8",
    tiempo:"Min. 10:40 - 13:10",
    link: "series/la_gorgona_indestructible.html"
  },
  {
    nombreBlog:"La Chica que Conoció Irene",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 17, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_chica_que_conocio_irene.html"
  },
  {
    nombreBlog:"La Leyenda de la Chica Sol",
    imagenBlog:"images/Pelicula_Tenki_no_Ko.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 15, 2020",
    tipo:"Pelicula",
    titulo:"Tenki no Ko",
    capitulo:"none",
    tiempo:"Min. 15:00 - 17:00",
    link: "peliculas/la_leyenda_de_la_chica_sol.html"
  },
  {
    nombreBlog:"Una Nueva Oferta para Melisa",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 10, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/una_nueva_oferta_para_melisa.html"
  },
  {
    nombreBlog:"¡Elegimos estar aquí!",
    imagenBlog:"images/Sora_Yori_mo_Tooi_Basho_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 08, 2020",
    tipo:"Serie",
    titulo:"Sora Yori mo Tooi Basho",
    capitulo:"Capitulo: 8",
    tiempo:"Min. 16:00 - 20:10",
    link: "series/elegimos_estar_aqui.html"
  },
  {
    nombreBlog:"Dichos de viejos",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 08, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/dichos_de_viejos.html",
  },
  {
    nombreBlog:"¡Tenemos que ir!",
    imagenBlog:"images/Sora_Yori_mo_Tooi_Basho_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Junio 01, 2020",
    tipo:"Serie",
    titulo:"Sora Yori mo Tooi Basho",
    capitulo:"Capitulo: 4",
    tiempo:"none",
    link: "Min. 19:10 - 22:00"
  },
  {
    nombreBlog:"La Ejecución de un Rey",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 20, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_ejecucion_de_un_rey.html"
  },
  {
    nombreBlog:"El Hibiol de Maquia",
    imagenBlog:"images/Pelicula_Maquia.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 18, 2020",
    tipo:"Pelicula",
    titulo:"Maquia",
    capitulo:"none",
    tiempo:"Min. 13:00 - 16:05",
    link: "peliculas/el_hibiol_de_maquia.html"
  },
  {
    nombreBlog:"Un Viaje que Termina",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 13, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/un_viaje_que_termina.html"
  },
  {
    nombreBlog:"La Declaración de Sonezaki San",
    imagenBlog:"images/Araburu_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 11, 2020",
    tipo:"Serie",
    titulo:"Araburu Kisetsu No Otomedomo Yo",
    capitulo:"Capitulo: 8",
    tiempo:"Min. 18:03 - 19:10",
    link: "series/la_declaracion_de_sonezaki_san.html"
  },
  {
    nombreBlog:"El Día Lluvioso de Andrea",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 06, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/el_dia_lluvioso_de_andrea.html"
  },
  {
    nombreBlog:"La Declaración de Amagi",
    imagenBlog:"images/Araburu_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Mayo 04, 2020",
    tipo:"Serie",
    titulo:"Araburu Kisetsu No Otomedomo Yo",
    capitulo:"Capitulo: 4",
    tiempo:"Min. 2:44 - 4:10",
    link: "series/la_declaracion_de_amagi.html"
  },
  {
    nombreBlog:"El Día que el Dragón Anciano Llegó",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 29, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link:"historias_originales/el_dia_que_el_dragón_anciano_llego.html"
  },
  {
    nombreBlog:"Coqueteo en la Pila del Agua",
    imagenBlog:"images/Araburu_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 27, 2020",
    tipo:"Serie",
    titulo:"Araburu Kisetsu No Otomedomo Yo",
    capitulo:"Capitulo: 2",
    tiempo:"Min. 10:50 - 11:50",
    link: "series/coqueteo_en_la_pila_del_agua.html"
  },
  {
    nombreBlog:"La Chica Errante",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 22, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_chica_errante.html"
  },
  {
    nombreBlog:"La Horquilla de Jade",
    imagenBlog:"images/Pelicula_White_Snake.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 20, 2020",
    tipo:"Pelicula",
    titulo:"White Snake",
    capitulo:"none",
    tiempo:"Min. 33:41 - 38:10",
    link: "peliculas/la_horquilla_de_jade.html"
  },
  {
    nombreBlog:"Fábrica de Monstruos",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 15, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/fabrica_de_monstruos.html"
  },
  {
    nombreBlog:"Te Presto mi PlayStation",
    imagenBlog:"images/High_Score_Girl_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 13, 2020",
    tipo:"Serie",
    titulo:"Hi Score Girl",
    capitulo:"Capitulo: 12",
    tiempo:"Min. 18:30 - 20:35",
    link: "series/te_presto_mi_playstation.html"
  },
  {
    nombreBlog:"La Puerta en el Estudio",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 08, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_puerta_en_el_estudio.html"
  },
  {
    nombreBlog:"Haruo vs Hidaka",
    imagenBlog:"images/High_Score_Girl_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 06, 2020",
    tipo:"Serie",
    titulo:"Hi Score Girl",
    capitulo:"Capitulo: 10",
    tiempo:"Min. 5:40 - 9:00",
    link: "series/haruo_vs_hidaka.html"
  },
  {
    nombreBlog:"Asalto en la Bodega",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Abril 01, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/asalto_en_la_bodega.html"
  },
  {
    nombreBlog:"Guile vs Zangief",
    imagenBlog:"images/High_Score_Girl_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 30, 2020",
    tipo:"Serie",
    titulo:"Hi Score Girl",
    capitulo:"Capitulo: 1",
    tiempo:"Min. 3:10 - 8:20",
    link: "series/guile_vs_zangief.html"
  },
  {
    nombreBlog:"Los Ogros Ríen Cuando Hablas del Próximo Año",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 25, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/los_ogros_rien_cuando_hablas_del_proximo_año.html"
  },
  {
    nombreBlog:"El Corazón de Luca",
    imagenBlog:"images/Pelicula_Dragon_Quest_Your_Story.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 23, 2020",
    tipo:"Pelicula",
    titulo:"Dragon Quest Your Story",
    capitulo:"none",
    tiempo:"Min. 48:22 - 50:15",
    link: "peliculas/el_corazon_de_luca.html"
  },
  {
    nombreBlog:"El Ataque a Media Noche",
    imagenBlog:"images/Violet_evergarden_5.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 16, 2020",
    tipo:"Serie",
    titulo:"Violet Evergarden",
    capitulo:"Capitulo: 9",
    tiempo:"Min. 1:00 - 3:05",
    link: "series/el_ataque_a_media_noche.html"
  },
  {
    nombreBlog:"Expreso al Infierno",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 11, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/expreso_al_infierno.html"
  },
  {
    nombreBlog:"Una Carta Difícil",
    imagenBlog:"images/Violet_evergarden_8.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 09, 2020",
    tipo:"Serie",
    titulo:"Violet Evergarden",
    capitulo:"Capitulo Especial",
    tiempo:"Min. 9:45 - 11:00",
    link: "series/una_carta_dificil.html"
  },
  {
    nombreBlog:"El Hombre de la Banca Junto al Río",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 04, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link:"historias_originales/el_hombre_de_la_banca_junto_al_río.html"
  },
  {
    nombreBlog:"¿He escrito una buena carta?",
    imagenBlog:"images/Violet_evergarden_4.png",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Marzo 02, 2020",
    tipo:"Serie",
    titulo:"Violet Evergarden",
    capitulo:"Capitulo: 4",
    tiempo:"Min. 20:15 - 21:23",
    link: "series/he_escrito_una_buena_carta.html"
  },
  {
    nombreBlog:"Marauder el Asesino de Espadas",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 26, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/marauder_el_asesino_de_espadas.html"
  },
  {
    nombreBlog:"La Heredera del Clan Isurugi",
    imagenBlog:"images/Pelicula_BlackFox.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 24, 2020",
    tipo:"Pelicula",
    titulo:"BlackFox",
    capitulo:"none",
    tiempo:"Min. 69:47 - 72:50",
    link: "peliculas/la_heredera_del_clan_isurugi.html"
  },
  {
    nombreBlog:"Los viajes de Caronte",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 19, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/los_viajes_de_caronte.html"
  },
  {
    nombreBlog:"Los Recuerdos de Ray",
    imagenBlog:"images/Yakusoku_no_neverland_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 17, 2020",
    tipo:"Serie",
    titulo:"Yakusoku no Neverland",
    capitulo:"Capitulo: 9",
    tiempo:"Min. 12:29 - 15:50",
    link: "series/los_recuerdos_de_ray.html"
  },
  {
    nombreBlog:"La Chica del Centro Comercial",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 12, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_chica_del_centro_comercial.html"
  },
  {
    nombreBlog:"El Reloj de Krone",
    imagenBlog:"images/Yakusoku_no_neverland_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 10, 2020",
    tipo:"Serie",
    titulo:"Yakusoku no Neverland",
    capitulo:"Capitulo: 7",
    tiempo:"Min. 8:33 - 12:35",
    link: "series/el_reloj_de_krone.html"
  },
  {
    nombreBlog:"Crímenes Contra el Ciclo de la Vida",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 05, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/crímenes_contra_el_ciclo_de_la_vida.html"
  },
  {
    nombreBlog:"El Conejo de Conny",
    imagenBlog:"images/Yakusoku_no_neverland_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Febrero 03, 2020",
    tipo:"Serie",
    titulo:"Yakusoku no Neverland",
    capitulo:"Capitulo: 1",
    tiempo:"Min. 15:25 - 18:41",
    link: "series/el_conejo_de_conny.html"
  },
  {
    nombreBlog:"La Ira de Apolo",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 29, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/la_ira_de_apolo.html"
  },
  {
    nombreBlog:"El Día que Kaguya Ganó",
    imagenBlog:"images/Kaguya_sama_wa_Kokurasetai_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 27, 2020",
    tipo:"Serie",
    titulo:"Kaguya-sama wa Kokurasetai",
    capitulo:"Capitulo: 12",
    tiempo:"Min. 10:45 - 14:18",
    link:"series/el_dia_que_kaguya_gano.html"
  },
  {
    nombreBlog:"¡Adivinemos Donde Estamos!",
    imagenBlog:"images/Yuru_camp_4.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 20, 2020",
    tipo:"Serie",
    titulo:"Yuru Camp",
    capitulo:"Capitulo: 12",
    tiempo:"Min. 21:58 - 23:03",
    link:"series/adivinemos_donde_estamos.html"
  },
  {
    nombreBlog:"Las Cadenas del Tártaro",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 18, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/las_cadenas_del_tartaro.html"
  },

  {
    nombreBlog:"Un Dia de Mucho Trabajo en la Morgue",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 15, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/un_dia_de_mucho_trabajo_en_la_morgue.html"
  },
  {
    nombreBlog:"Dos Campistas Mensajeando",
    imagenBlog:"images/Yuru_camp_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 13, 2020",
    tipo:"Serie",
    titulo:"Yuru Camp",
    capitulo:"Capitulo: 5",
    tiempo:"Min. 17:30 - 21:00",
    link:"series/dos_campistas_mensajeando.html"
  },
  {
    nombreBlog:"El Desafío del Dragón Fafnir",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 08, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link: "historias_originales/el_desafío_del_dragon_fafnir.html"
  },
  {
    nombreBlog:"La Chica del Estacionamiento",
    imagenBlog:"images/Yuru_camp_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 06, 2020",
    tipo:"Serie",
    titulo:"Yuru Camp",
    capitulo:"Capitulo: 1",
    tiempo:"Min. 12:30 - 14:15",
    link:"series/la_chica_del_estacionamiento.html"
  },
  {
    nombreBlog:"El Hombre en el Espejo",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 02, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link:"historias_originales/el_hombre_en_el_espejo.html"
  },
  {
    nombreBlog:"La Chica que Baila Entre los Arboles",
    imagenBlog:"images/Historia_Original.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Enero 01, 2020",
    tipo:"Historia Original",
    titulo:"none",
    capitulo:"none",
    tiempo:"none",
    link:"historias_originales/la_chica_que_baila_entre_los_arboles.html"
  },
  {
    nombreBlog:"Yo Hago las Reglas",
    imagenBlog:"images/Megalobox_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Diciembre 30, 2019",
    tipo:"Serie",
    titulo:"Megalobox",
    capitulo:"Capitulo 8",
    tiempo:"Min. 18:48 - 22:15",
    link: "series/yo_hago_las_reglas.html"
  },
  {
    nombreBlog:"Tu Eres Quien Controla Este Ring",
    imagenBlog:"images/Megalobox_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Diciembre 23, 2019",
    tipo:"Serie",
    titulo:"Megalobox",
    capitulo:"Capitulo: 4",
    tiempo:"Min. 13:29 - 16:20",
    link: "series/tu_eres_quien_controla_este_ring.html"
  },
  {
    nombreBlog:"Ábrete Paso Hasta Mi Ring",
    imagenBlog:"images/Megalobox_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Diciembre 16, 2019",
    tipo:"Serie",
    titulo:"Megalobox",
    capitulo:"Capitulo: 2",
    tiempo:"Min. 5:48 - 8:55",
    link: "series/abrete_paso_hasta_mi_ring.html"
  },
  {
    nombreBlog:"Los Terrícolas y la Alienígena",
    imagenBlog:"images/Cop_craft_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Diciembre 09, 2019",
    tipo:"Serie",
    titulo:"Cop Craft",
    capitulo:"Capitulo: 11",
    tiempo:"Min. 10:45 - 12:42",
    link: "series/los_terricolas_y_la_alienigena.html"
  },
  {
    nombreBlog:"La Fotógrafa y la Alienígena",
    imagenBlog:"images/Cop_craft_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Diciembre 02, 2019",
    tipo:"Serie",
    titulo:"Cop Craft",
    capitulo:"Capitulo: 7",
    tiempo:"Min. 6:10 - 9:34",
    link: "series/la_fotografa_y_la_alienigena.html"
  },
  {
    nombreBlog:"El Detective y la Alienígena",
    imagenBlog:"images/Cop_craft_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Noviembre 25, 2019",
    tipo:"Serie",
    titulo:"Cop Craft",
    capitulo:"Capitulo: 2",
    tiempo:"Min. 00:00 - 4:28",
    link: "series/el_detective_y_la_alienigena.html"
  },
  {
    nombreBlog:"El Tesoro de Nanachi",
    imagenBlog:"images/Made_in_abyss_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Noviembre 18, 2019",
    tipo:"Serie",
    titulo:"Made In Abyss",
    capitulo:"Capitulo: 13",
    tiempo:"Min. 24:00 - 26:22",
    link: "series/el_tesoro_de_nanachi.html"
  },
  {
    nombreBlog:"La Fortaleza de los Excavadores",
    imagenBlog:"images/Made_in_abyss_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Noviembre 11, 2019",
    tipo:"Serie",
    titulo:"Made In Abyss",
    capitulo:"Capitulo: 5",
    tiempo:"Min. 13:09 - 15:14",
    link: "series/la_fortaleza_de_los_excavadores.html"
  },
  {
    nombreBlog:"La Ciudad Alrededor del Abismo",
    imagenBlog:"images/Made_in_abyss_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Noviembre 04, 2019",
    tipo:"Serie",
    titulo:"Made In Abyss",
    capitulo:"Capitulo: 1",
    tiempo:"Min. 19:11 - 21:00",
    link: "series/la_fortaleza_de_los_excavadores.html"
  },
  {
    nombreBlog:"La Muñeca y el Lobo Gris",
    imagenBlog:"images/Gosik_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Octubre 31, 2019",
    tipo:"Serie",
    titulo:"Gosik",
    capitulo:"Capitulo: 23",
    tiempo:"Min. 19:43 - 22:55",
    link: "series/la_muneca_y_el_lobo_gris.html"
  },
  {
    nombreBlog:"La Muñeca y el Caos",
    imagenBlog:"images/Gosik_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Octubre 24, 2019",
    tipo:"Serie",
    titulo:"Gosik",
    capitulo:"Capitulo: 9",
    tiempo:"Min. 3:43 - 6:37",
    link: "series/la_muneca_y_el_caos.html"
  },
  {
    nombreBlog:"La Muñeca que Lee el Futuro",
    imagenBlog:"images/Gosik_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Octubre 21, 2019",
    tipo:"Serie",
    titulo:"Gosik",
    capitulo:"Capitulo: 1",
    tiempo:"Min. 1:00 - 4:35",
    link: "series/la_muneca_que_lee_el_futuro.html"
  },
  {
    nombreBlog:"La Ultima Batalla del Saber Rojo",
    imagenBlog:"images/Fate_Apocrypha_3.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Octubre 16, 2019",
    tipo:"Serie",
    titulo:"Fate Apocripha",
    capitulo:"Capitulo: 23",
    tiempo:"Min. 11.5 - 14.5",
    link: "series/la_ultima_batalla_del_saber_rojo.html"
  },
  {
    nombreBlog:"La Batalla Contra el Golem Invencible",
    imagenBlog:"images/Fate_Apocrypha_2.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Septiembre 26, 2019",
    tipo:"Serie",
    titulo:"Fate Apocripha",
    capitulo:"Capitulo: 14",
    tiempo:"Min. 15 - 21",
    link: "series/la_batalla_contra_el_golem_invencible.html"
  },
  {
    nombreBlog:"Un Nuevo Contrato",
    imagenBlog:"images/Fate_Apocrypha_1.jpg",
    autorBlog:"Artur Writes",
    sinopsis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    fecha:"Septiembre 09, 2019",
    tipo:"Serie",
    titulo:"Fate Apocripha",
    capitulo:"Capitulo: 13",
    tiempo:"Min. 11 - 13",
    link: "series/un_nuevo_contrato.html"
  },
]
