import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // Local Variables
    state: {
        character: null,
        answers: {
            0: null,
            1: null,
            2: null,
            3: null,
            4: null,
        },
        questions: [{
            category: "Bajo Flujo",
            question: "Cuando ahorras agua, también ahorras energía.",
            type: "choice",
            answers: [
                "Verdadero",
                "Falso"
            ],
            correctAnswerIndex: "0",
            result: "Al usar menos agua también se ahorra la energía que se utiliza para limpiar, transportar y calentar el agua.",
            TrueFalse: true
        },{
            category: "Bajo Flujo",
            question: "La hermana usa un cabezal de ducha de alta eficiencia y su temporizador de ducha de 5 minutos para ahorrar 2.5 galones de agua cada día. ¿Cuánta agua ahorraría en un año (365 días) de duchas diarias?",
            type: "choice",
            answers: [
                "100 galones",
                "564 galones",
                "912.5 galones",
                "682.5 galones"
            ],
            correctAnswerIndex: "2",
            result: "La respuesta correcta es que ahorraría 912.5 galones de agua, ¡más la energía que se usa para limpiar, transportar y calentar el agua!",
            TrueFalse: false
        },{
            category: "Mantenlo Limpio",
            question: "Tres hechos verdaderos y uno falso... ¿Cuál es falso?",
            type: "choice",
            answers: [
                "Un filtro sucio puede hacer que un aparato no funcione tan bien.",
                "El mantener limpios los filtros de aire del sistema de calefacción y refrigeración ayuda a que el aire en el hogar sea más limpio.",
                "Un filtro sucio hace que un aparato consuma menos energía.",
                "Los hornos, calderas, secadoras de ropa, aires acondicionados y vehículos tienen filtros."
            ],
            correctAnswerIndex: "2",
            result: "La tercera afirmación sobre el uso de energía no es verdadera. Un filtro sucio y obstruido hace que un electrodoméstico use más energía para realizar el mismo trabajo.",
            TrueFalse: false
        },{
            category: "Mantenlo Limpio",
            question: "Un adulto instaló un silbato en el filtro del horno de esta casa, el cual se acaba de activar para hacerles saber que el filtro está sucio. La mamá ahora está cambiando el filtro en el sótano. ¿De qué color es el silbato del filtro?",
            type: "choice",
            answers: [
                "Blanco",
                "Rojo",
                "Azul/Verde",
                "Rosado"
            ],
            correctAnswerIndex: "2",
            result: "El silbato de filtro puede ser de cualquier color, pero este es AZUL-VERDE. Los silbatos de filtro son objetos de dos piezas que se empujan a través del filtro hasta que hacen clic en el medio.",
            TrueFalse: false
        },{
            category: "Sellalo",
            question: "El calentador de agua en el sótano de esta casa está muy bien envuelto para mantener el agua caliente. Fíjate en la manta. Una de las tuberías también está aislada. ¿De qué color es la cobertura aislante de la tubería?",
            type: "choice",
            answers: [
                "Naranja",
                "Verde",
                "Morado",
                "Negro"
            ],
            correctAnswerIndex: "3",
            result: "El aislamiento de la tubería puede ser de cualquier color, pero esta pieza es NEGRA. Tu familia puede reducir la pérdida de calor y ahorrar energía aislando la tubería de agua caliente del calentador de agua.",
            TrueFalse: false
        },{
            category: "Sellalo",
            question: "¡Esta familia no quiere tener agujeros en su casa! Hasta la abertura más pequeña puede hacer que se filtre aire, haciendo que la temperatura sea menos agradable. ¿Cuáles de estos lugares en una casa pueden tener pequeñas aberturas que se deben sellar?",
            type: "choice",
            answers: [
                "Puertas",
                "Ventanas",
                "Salidas de tubería o cable",
                "Claraboyas",
                "Todo lo anterior"
            ],
            correctAnswerIndex: "4",
            result: "Todo lo anterior: el sellador, los burletes o el aislamiento pueden sellar las aberturas alrededor de estas áreas.",
            TrueFalse: false
        },{
            category: "Mantenlo Limpio",
            question: "La limpieza e inspección de rutina de los sistemas de calefacción y <span style='text-decoration:underline;'>niaeifrereoc</span> por parte de un técnico calificado ayuda a que funcionen mejor y consuman menos energía.",
            type: "limit",
            answers: [
                "refrigeración"
            ],
            correctAnswerIndex: "0",
            result: "Refrigeración: los técnicos ajustan las conexiones eléctricas, lubrican las piezas, y limpian y revisan los componentes del sistema.",
            maxLength: 13
        },{
            category: "Apágalo",
            question: 'Mira en la oficina para resolver este acertijo: "Junto con la bombilla, me apagaron para estar a oscuras. El hermano que salía usó la energía de manera inteligente. ¿Qué soy yo?"',
            type: "limit",
            answers: [
                "la computadora"
            ],
            correctAnswerIndex: "0",
            result: "La computadora: las computadoras deben estar apagadas. ¡Recuerda que los protectores de pantalla también consumen energía! Una regleta de enchufes avanzada apagará el monitor de la computadora, la impresora y los parlantes cuando la computadora esté apagada.",
            maxLength: 14
        },{
            category: "Sellalo",
            question: 'Mira en el ático y en la sala de estar para resolver este acertijo: "Puedo ser un rollo, una lámina o trozos de relleno. Ayudo a usar menos energía para calentar y enfriar ¿Qué soy?"',
            type: "limit",
            answers: [
                "el aislamiento"
            ],
            correctAnswerIndex: "0",
            result: "El aislamiento: una construcción es más cómoda y utiliza menos energía para calentar y enfriar cuando cuenta con aislamiento en el ático, las paredes exteriores y el sótano.",
            maxLength: 14
        }
        ,{
            category: "Configuración de Nivels",
            question: "El calentador de agua de esta familia está configurado correctamente a 120 F. Si fuera 20 grados más alto, gastarían alrededor de $420 más en energía por año. ¿Cuánto dinero extra costaría cada mes?",
            type: "number",
            answers: [
                "35"
            ],
            correctAnswerIndex: "0",
            result: "Un ahorro anual de $420 equivale a $35 cada mes. Si tienes un sistema inmunológico débil o una enfermedad respiratoria crónica, puedes considerar mantener el tanque de agua caliente a 140<sup>&deg;</sup> F."
        },{
            category: "Configuración de Nivels",
            question: 'Mira el dormitorio de la casa para resolver este acertijo: "Nada me cubre cuando quieres luz gratis. Cúbreme cuando la temperatura exterior no sea la adecuada. ¿Qué soy?"',
            type: "limit",
            answers: [
                "ventana"
            ],
            correctAnswerIndex: "0",
            result: "La respuesta es 'la ventana': los cubre ventanas, tales como las persianas, mantienen la luz, el calor o el frío dentro o fuera, según las necesidades.",
            maxLength: 7,
        },{
            category: "La iluminación Correcta",
            question: "¡Esta casa sólo utiliza bombillas LED! ¿Cuántas bombillas LED hay en la sala donde están el papá, el bebé y el hermano?",
            type: "choice",
            answers: [
                "7",
                "6",
                "5",
                "4"
            ],
            correctAnswerIndex: "0",
            result: "7 – Las bombillas LED se pueden usar en casi cualquier lugar: en iluminación empotrada, lámparas de mesa, accesorios de techo, galería o luces navideñas y con interruptores regulables.",
            TrueFalse: false
        },{
            category: "Apágalo",
            question: "Los diferentes tipos de regletas de enchufes avanzados tienen el mismo trabajo de detener la energía a los elementos que no están en uso.",
            type: "choice",
            answers: [
                "Verdadero",
                "Falso"
            ],
            correctAnswerIndex: "0",
            result: "Verdadero: las regletas de enchufes avanzados funcionan apagando todo para evitar el desperdicio de energía. Trabajan en horarios preestablecidos, con sensores de movimiento o mandos a distancia o tienen enchufes conectados con diferentes funciones.",
            TrueFalse: true
        },{
            category: "Apágalo",
            question: "Tres hechos verdaderos y uno falso... ¿Cuál es falso?",
            type: "choice",
            answers: [
                "Una carga fantasma es un dispositivo que usa energía incluso cuando está apagado.",
                "La electrónica con controles remoto, relojes o luces indicadoras son cargas fantasma.",
                "Un cargador continuará usando electricidad después de haber cargado completamente la batería.",
                "No hay nada que podamos hacer para reducir la carga fantasma."
            ],
            correctAnswerIndex: "3",
            result: "La cuarta afirmación no es cierta. Sí se puede reducir la carga fantasma al desenchufar los dispositivos electrónicos o usar una regleta de enchufes avanzados.",
            TrueFalse: false
        },{
            category: "Bajo Flujo",
            question: "Descifra la siguiente palabra: Los grifos, los <span style='text-decoration:underline;'>oosrdoin</span>, las duchas, las lavadoras de ropa y las goteras consumen una gran cantidad de agua en el hogar.",
            type: "limit",
            answers: [
                "inodoros"
            ],
            correctAnswerIndex: "0",
            result: "La respuesta es los inodoros: son el mayor consumidor de agua en una casa típica. Los inodoros viejos e ineficientes pueden usar hasta 6 galones por descarga.",
            maxLength: 8
        },{
            category: "La iluminación Correcta",
            question: "Una bombilla LED dura unas 25 veces más que otras bombillas. Si tuvieras que reemplazar una bombilla ineficiente en la cocina una vez al año, ¿cada cuánto deberías cambiar una bombilla LED?",
            type: "choice",
            answers: [
                "Cada 10 años",
                "Cada 5 años",
                "Cada 18 años",
                "Cada 25 años"
            ],
            correctAnswerIndex: "3",
            result: "Cada 25 años",
            TrueFalse: false
        },{
            category: "Lavar bien",
            question: "El lavar la ropa con agua fría ahorra agua.",
            type: "choice",
            answers: [
                "Verdadero",
                "Falso"
            ],
            correctAnswerIndex: "1",
            result: "Falso: el lavar la ropa con agua fría no ahorra agua, pero usa menos energía para calentar el agua.",
            TrueFalse: false
        },{
            category: "Lavar bien",
            question: "¿Cuál de estas afirmaciones no es cierta?",
            type: "choice",
            answers: [
                "El usar cabezales de ducha y aireadores de grifos de bajo consumo ahorra agua.",
                "El tomar duchas en lugar de baños ahorra agua.",
                "El hacer funcionar un lavavajillas que está medio lleno ahorra agua.",
                "El usar un tendedero para secar la ropa ahorra energía.",
            ],
            correctAnswerIndex: "2",
            result: "La afirmación del lavavajillas no es cierta. A menos que el lavavajillas tenga tecnología de detección de carga, usa la misma cantidad de agua y energía sin importar cuán lleno esté. Además, evita usar el secado con calor que usa energía adicional para secar los platos. El secado al aire es mucho mejor.",
            TrueFalse: false
        },{
            category: "Lavar bien",
            question: 'Mira en un baño para resolver este acertijo: "Mientras voy y vengo para pulir los incisivos, el agua está cerrada porque mi mango sabe más. ¿Quién soy?"',
            type: "limit",
            answers: [
                "el cepillo de dientes"
            ],
            correctAnswerIndex: "0",
            result: "El cepillo de dientes: incluso con un aireador de agua eficiente en el grifo, el dejar el agua correr cuando no se necesita, como mientras se cepilla los dientes, es un desperdicio.",
            maxLength: 21
        },{
            category: "Configuración de Nivels",
            question: 'Descifra la siguiente palabra: Al ajustar el <span style="text-decoration:underline;">ttmotsare</span> hacia arriba en el verano y hacia abajo en el invierno ahorrará energía para calentar y enfriar tu hogar.',
            type: "limit",
            answers: [
                "termostato"
            ],
            correctAnswerIndex: "0",
            result: "Termostato: a nivel nacional se recomienda ajustar a 68 F en el invierno (más bajo al dormir o estar fuera de casa) y 78 F en el verano (cuando está en casa y necesita enfriamiento).",
            maxLength: 10
        },{
            category: "Configuración de Nivels",
            question: "¡Esta familia sabe de números! Los niveles del refrigerador y el congelador son lo suficientemente bajos para almacenar los alimentos correctamente sin desperdiciar energía. Un adulto configuró el refrigerador entre 37 y 40 F y el congelador en:",
            type: "choice",
            answers: [
                "0 F",
                "-10 F",
                "-5 F",
                "35 F"
            ],
            correctAnswerIndex: "0",
            result: "0 F - Incluso con los ajustes adecuados, el mantener la puerta del refrigerador o del congelador abierta desperdicia energía. ¡Elije si quieres helado o sobras de espagueti antes de abrir la puerta!",
            TrueFalse: false
        },{
            category: "Se Inteligente",
            question: "Estamos comenzando a utilizar la tecnología para hacer que la red eléctrica sea más inteligente; lo que mejorará la comunicación entre quienes ayudan a proporcionar electricidad y los usuarios.",
            type: "choice",
            answers: [
                "Verdadero",
                "Falso"
            ],
            correctAnswerIndex: "0",
            result: "Verdadero: la red de suministro inteligente incluso permitirá que nuestros dispositivos eléctricos sean parte de esta comunicación. Cuando las partes de la red se comunican, los problemas tales como una línea eléctrica dañada, se pueden identificar y responder más rápidamente.",
            TrueFalse: true
        },{
            category: "Se Inteligente",
            question: "Tres hechos verdaderos y uno falso... ¿Cuál es falso?",
            type: "choice",
            answers: [
                "La una de la tarde suele ser la hora en la que más se necesita electricidad.",
                "La electricidad tiene una demanda diferente en distintos momentos del día y del año.",
                "La red de suministro inteligente ayudará a suministrar electricidad cuando haya demanda.",
                "La red de suministro inteligente ayudará a las personas a aprender sobre su uso de energía."
            ],
            correctAnswerIndex: "0",
            result: "La primera declaración no es verdadera. La necesidad de electricidad suele ser mayor a primeras horas de la noche.",
            TrueFalse: false
        },{
            category: "Se Inteligente",
            question: "Descifra la siguiente palabra: En el futuro, más hogares tendrán un <span style='text-decoration:underline;'>medidor</span> inteligente que proporcionará a las familias información exacta sobre su uso eléctrico.",
            type: "limit",
            answers: [
                "inteligente"
            ],
            correctAnswerIndex: "0",
            result: "Inteligente: los medidores inteligentes cuentan con un portal web donde los clientes pueden ver detalles sobre cómo usan la energía, lo que permite ayudar a tomar mejores decisiones sobre el uso de la energía.",
            maxLength: 11
        },{
            category: "Eficiencia Energética",
            question: "Los recursos de energía renovable tales como el sol, el agua, el viento y la biomasa se pueden reemplazar de manera natural. Los recursos energéticos como el gas natural, el carbón, el petróleo y el uranio se reemplazan muy lentamente o no se reemplazan en absoluto. ¿Qué elemento que se muestra en el exterior de esta casa genera electricidad con un recurso renovable?",
            type: "choice",
            answers: [
                "Un panel solar",
                "Una central eléctrica de carbón",
                "Una presa hidroeléctrica",
                "Una turbina de viento o eólica"
            ],
            correctAnswerIndex: "3",
            result: "Una turbina eólica: los paneles solares y las represas hidroeléctricas también utilizan recursos renovables para generar electricidad, pero no están en la casa. Una central eléctrica de carbón utiliza carbón, un recurso no renovable, para generar electricidad.",
            TrueFalse: false
        },{
            category: "Eficiencia Energética",
            question: "Para ahorrar la mayor cantidad de energía, debemos: ",
            type: "choice",
            answers: [
                "Usar la energía de manera eficiente utilizando tecnologías de bajo consumo, tales como dispositivos de agua de bajo flujo o bombillas LED.",
                "Usar la energía de manera inteligente, tales como tomar una ducha corta o apagar las luces.",
                "Los dos, usar la energía de manera eficiente e inteligente."                
            ],
            correctAnswerIndex: "2",
            result: "Usar la energía de manera eficiente e inteligente para ahorrar la mayor cantidad de energía.",
            TrueFalse: false
        },{
            category: "Eficiencia Energética",
            question: "Tres hechos verdaderos y uno falso... ¿Cuál es falso?",
            type: "choice",
            answers: [
                "El ahorrar energía puede ahorrar dinero.",
                "El ahorrar energía aprovecha al máximo los recursos naturales.",
                "Podemos ahorrar energía mientras disfrutamos de la misma comodidad y conveniencia que brinda la energía.",
                "El reducir, reutilizar y reciclar es excelente, pero no ahorra energía.",                
            ],
            correctAnswerIndex: "3",
            result: "La declaración de las 3 R no es cierta. El reducir, reutilizar y reciclar sí ahorra energía.",
            TrueFalse: false
        }
        ],
        randomQuestions: [{}],
        tooltips: [{
            category: "Mantenlo Limpio",
            appliance: "air-conditioner",
            room: "outside",
            image: null,
            text: "Cada año, durante la misma temporada, Jake llama a técnicos calificados para revisar los sistemas de calefacción y aire acondicionado del hogar; por eso funcionan de forma eficaz y duran más. Cuando es necesario reemplazar el aire acondicionado o la caldera, la familia busca equipos con certificación ENERGY STAR<sup>&reg;</sup> para ahorrar energía y dinero en las facturas de servicios públicos.",
            num: 1,
            position: "far left",
        },{
            category: "Apágalo",
            appliance: "lights",
            room: "study",
            image: null,
            text: "El hermano apaga las luces cuando sale de la oficina. ¡Qué buen plan!",
            num: 1,
        },{
            category: "Apágalo",
            appliance: "devices",
            room: "study",
            image: "study-devices.svg",
            imageStyle: "small", 
            text: "Las cargas fantasma suenan aterradoras… ¡y lo son, porque desperdician energía! Una carga fantasma es un dispositivo que usa energía incluso cuando está apagado. Los cargadores, los aparatos con control remoto y los dispositivos electrónicos con relojes o luces indicadoras generan carga fantasma. Existen diferentes tipos de regletas de enchufes avanzadas, si bien todos tienen el mismo trabajo de cortar la energía de los dispositivos que no están en uso. La regleta que ves aquí apaga el monitor de la computadora, la impresora y los altavoces cuando la computadora está apagada.",
            num: 1,
        },{
            category: "Lavar bien",
            appliance: "dishwasher",
            room: "kitchen",
            image: null,
            text: "La familia sólo lava cargas completas en el lavavajillas para aprovechar al máximo el agua y la energía. Además utilizan configuraciones de ahorro de energía y secado al aire.",
            num: 1,
        },{
            category: "Se Inteligente",
            appliance: "washer-dryer",
            room: "basement",
            image: "basement-washer-dryer.svg",
            imageStyle: "small",
            text: "Hoy en día, contamos con termostatos inteligentes, refrigeradores, lavavajillas, acondicionadores de aire e interruptores eléctricos. Jane ha configurado su lavadora y secadora inteligentes para reducir la demanda en la red siguiendo las pautas que ayudan a evitar el uso de energía durante los momentos en que el uso de electricidad es alto.",
            num: 1,
            position: "far bottom",
        },{
            category: "Configuración de Nivels",
            appliance: "furnace",
            room: "basement",
            image: "basement-furnace.svg",
            imageStyle: "small",
            text: "Jane ha configurado el calentador de agua a 120 F, lo suficientemente caliente para ducharse y lavar cómodamente sin desperdiciar la energía que se necesita para calentar el agua.",
            num: 1,
            position: "far bottom"
        },{
            category: "Mantenlo Limpio",
            appliance: "dryer",
            room: "basement",
            image: null,
            text: "Las secadoras de ropa cuentan con un filtro que se debe limpiar después de cada uso, lo que evita que se acumule suciedad dentro del sistema, haciéndolo más seguro y duradero.",
            num: 1,
        },{
            category: "Mantenlo Limpio",
            appliance: "air-heating-system",
            room: "basement",
            //image: "furnace-filter.svg",
            image:null,
            imageStyle: "small",
            text: "Es muy importante cambiar los filtros de las calderas, el aire central y los sistemas de calefacción; caso contrario la unidad deberá trabajar mucho más y utilizará más energía para empujar el aire a través del filtro sucio. Los filtros de la caldera se deben cambiar cada 1 a 3 meses, dependiendo del tipo de filtro y cuánto se use el sistema. Lo que ves en este filtro que es pequeño, redondo, de color azul verdoso es la alarma de filtro de la caldera. Cuando el filtro está sucio, hace ruido para recordarle a Jane que debe cambiarlo.",
            num: 1,
            position: "far bottom",
        },{
            category: "Se Inteligente",
            appliance: "smart-meter",
            room: "outside",
            image: "roller-coaster-graph.svg",
            text: "En la actualidad, aproximadamente la mitad de todos los clientes de electricidad de los EE. UU. tiene medidores inteligentes. Este es el medidor inteligente de la familia, el cual cuenta con un portal web que muestra información casi cada hora sobre el consumo de electricidad. También se puede usar con el sistema de administración de energía del hogar (EMS) para monitorear el uso total de energía o de un dispositivo individual. La familia usa su conocimiento sobre energía para evitar usar la electricidad cuando hay mucha demanda. El consumo de electricidad suele ser mayor en las primeras horas de la noche en los hogares.",
            num: 1,
            position: "far right",
        },{
            category: "La iluminación Correcta",
            appliance: "window",
            room: "bedroom",
            image: null,
            text: "A veces, el hermano usa la luz natural del exterior en lugar de encender el interruptor de la luz.",
            num: 1,
        },{
            category: "La iluminación Correcta",
            appliance: "lights",
            room: "tv-room",
            text: "Los diodos emisores de luz (LED) son tecnologías eficientes, ya que utilizan por lo menos un 75 por ciento menos de energía que las bombillas incandescentes. Como duran hasta 25 veces más, la familia no debe reemplazarlos con tanta frecuencia. Las bombillas LED se pueden utilizar en interruptores regulables, iluminación empotrada, accesorios de techo y luces festivas y de porche.",
            image: "lighting-facts.svg",
            num: 1,
        },{
            category: "La iluminación Correcta",
            appliance: "lights",
            room: "basement",
            image: null,
            text: "¡Esta luz de noche LED es muy eficiente! Utiliza sólo unos cuantos centavos de electricidad al año y ayuda a papá a no tener miedo a la oscuridad.",
            num: 1,
        },{
            category: "Configuración de Nivels",
            appliance: "refrigerator",
            room: "kitchen",
            image: null,
            text: "El configurar el refrigerador entre 37 y 40 F y el congelador a 0 F es lo más eficiente. ¡Los ajustes más bajos desperdician energía y hacen que el helado se endurezca demasiado!",
            num: 1,
        },{
            category: "Configuración de Nivels",
            appliance: "thermostat",
            image: "living-room1.svg,living-room2.svg",
            imageStyle: "small",
            room: "living-room",     //************************
            text: "El abuelo ha configurado el termostato correctamente. El ajustar el termostato hacia arriba en el verano y hacia abajo en el invierno ahorra energía para calentar y enfriar la casa. Se recomienda un ajuste nacional de 68 F en el invierno (más bajo al dormir o cuando no estás en la casa) y 78 F en el verano (cuando estás en casa y necesitas refrescarse). Un termostato programable hace que esto sea fácil y también permite preestablecer diferentes horarios para los momentos en los que se necesita menos calefacción o refrigeración. Por ejemplo, esta familia programa menos enfriamiento durante el verano cuando están en la escuela y el trabajo, durmiendo o de vacaciones.",               //FIX THIS
            num: 1,                     //************************
        },{
            category: "Se Inteligente",
            appliance: "smart-app",
            room: "living-room",
            image: null,
            text: "Esta familia utiliza tecnología inteligente para apagar los dispositivos electrónicos con su voz o programarlos para que se enciendan sólo cuando es necesario.",
            num: 1,
        },{
            category: "Apágalo",
            appliance: "television",
            room: "tv-room",
            image: null,
            text: "Ahorra electricidad utilizándola sólo cuando la necesites. Por ejemplo, cuando no están transmitiendo el programa favorito del bebé, ¡la TV está apagada!",
            num: 1,
        },{
            category: "Lavar bien",
            appliance: "washer",
            room: "basement",
            image: null,
            text: "Cuando lavamos la ropa con cargas completas y agua fría tenemos un beneficio doble: utilizamos menos energía para calentar el agua y lavamos más ropa.",
            num: 1,
        },{
            category: "Se Inteligente",
            appliance: "smart-outlet",
            room: "tv-room",
            image: null,
            text: "Este enchufe inteligente le permite a la hermana apagar la lámpara con su teléfono.",
            num: 1,
            position: "far left",
        },{
            category: "Sellalo",
            appliance: "ceiling",
            room: "bedroom",
            image: "attic-insulation.svg",
            text: "Piensa en el exterior de una casa como si fuera una barrera gigante que protege el interior del calor y del frío. Esta familia agregó aislamiento al ático, a las paredes exteriores y al sótano para mantener fuerte esta barrera. Como resultado, la temperatura de la casa se mantiene cómoda usando menos energía.",
            num: 1,
        },
        {
            category: "Sellalo",
            appliance: "wall",
            room: "living-room",
            image: null,
            text: "Piensa en el exterior de una casa como si fuera una barrera gigante que protege el interior del calor y del frío. Esta familia agregó aislamiento al ático, a las paredes exteriores y al sótano para mantener fuerte esta barrera. Como resultado, la temperatura de la casa se mantiene cómoda usando menos energía.",
            num: 1,
            position: "far left",
        },
        {
            category: "Sellalo",
            appliance: "door",
            room: "living-room",
            image: null,
            text: "El aire puede filtrarse hacia adentro o hacia afuera por las aberturas de las puertas, ventanas, tuberías o cables. El abuelo selló estas fugas con masilla, burletes y aislamiento de espuma expansiva. Ahora el aire caliente o frío permanece adentro y el aire exterior permanece afuera. La casa tiene la temperatura adecuada con menos consumo de energía.",
            num: 1,
        },
        {
            category: "Sellalo",
            appliance: "metal-duct",
            room: "basement",
            image: null,
            text: "Esta red de conductos de metal mueve el aire caliente o frío detrás de las paredes, techos o pisos de la casa hacia donde se necesita. Las aberturas en los conductos tienen fugas de aire que deberían llegar a las áreas habitables de la casa. Las fugas en los conductos hacen que las habitaciones se sientan más cálidas, más frías o más húmedas de lo que deberían. ¡Pero no en esta casa!",
            num: 1,
        },
        {
            category: "Sellalo",
            appliance: "window",
            room: "bathroom",
            image: null,
            text: "La familia cierra puertas y ventanas cuando la calefacción o el aire acondicionado están encendidos. ¡Usan persianas, cortinas, tintes o películas para cubrir las ventanas y mantener la temperatura adecuada en el interior! Si no están usando la calefacción o el aire acondicionado, es posible que dejen las ventanas abiertas para que entre una brisa fresca.",
            num: 1,
        },
        {
            category: "Sellalo",
            appliance: "waterheater",
            room: "basement",
            image: null,
            text: "Este aislamiento se agregó a la tubería de agua caliente del calentador de agua para mantener el agua caliente cuando la familia lo necesita.",
            num: 1,
        },
        {
            category: "Bajo Flujo",
            appliance: "showerhead",
            room: "upstairs-bathroom",
            image: "Showerhead.svg, Bathroom-Aerator.svg",
            text: "Esta casa cuenta con tecnologías eficientes tales como cabezales de ducha y aireadores de grifos. Ahorran agua y la energía que se necesita para calentar el agua. ¿Sabías que cuando ahorras agua, también ahorras energía?",
            num: 1,
        },
        {
            category: "Bajo Flujo",
            appliance: "water-outlet",
            room: "outside",
            image: null,
            text: "¡No riegues demasiado! El césped promedio sólo necesita aproximadamente 1 pulgada de agua por semana. La familia riega temprano a la mañana o a la noche para reducir la evaporación. También eligieron plantas que necesitan poca agua.",
            num: 1,
            position: "far right",
        },
        {
            category: "Bajo Flujo",
            appliance: "showerhead",
            room: "bathroom",
            image: null,
            text: "Las duchas generalmente usan menos agua que los baños. Este cabezal de ducha cuenta con una tecnología eficiente. El temporizador de ducha que se muestra a continuación le recuerda a la familia que debe usar el agua de manera inteligente al tomar duchas más cortas.",
            num: 1,
        },
        {
            category: "Bajo Flujo",
            appliance: "toilet-tank",
            room: "bathroom",
            image: null,
            text: "Los inodoros usan más agua que cualquier otra cosa en el hogar. La etiqueta WaterSense<sup>&reg;</sup> ayudó a esta familia a comprar inodoros de bajo consumo de agua, y las tabletas para fugas en el inodoro ayudaron a descubrir una fuga que desperdiciaba agua. La mamá abrió el tanque y colocó una tableta que se disolvió en 15 minutos. El cuenco se volvió de color azul, lo que le dejó saber que había una fuga que arreglar.",
            num: 1,
        },
        {
            category: "Bajo Flujo",
            appliance: "faucet",
            room: "bathroom",
            image: null,
            text: "La hermana está siendo inteligente con el agua al cerrar el grifo cuando se lava los dientes.",
            position: "far right",
            num: 1,
        },
        {
            category: "Se Inteligente",
            appliance: "car",
            room: "outside",
            image: "outside-car.svg",
            imageStyle: "small",
            text: "Los cinco mejores consejos para el transporte de los niños<ol><li>Camina, anda en bicicleta o usa el transporte público.</li><li>Comparte o combina el viaje en automóvil.</li><li>¡Recuérdale a los adultos que hagan el mantenimiento de su vehículo! Los filtros de aire y el aceite del motor sucios, la baja presión de los neumáticos y el uso de tipos incorrectos de neumáticos desperdician combustible.</li><li>¡Nunca lo dejes inactivo! Dejar un automóvil encendido y parado durante 10 segundos consume más combustible que apagar y encender el automóvil.</li><li>Para ayudar a conducir más millas con la misma cantidad de combustible, recuerda a los conductores que deben respetar los límites de velocidad, evitar conducir de manera agresiva y no cargar peso extra en el vehículo.</li></ol>",
            num: 1,
            position: "far left",
        },
        {
            category: "Bajo Flujo",
            appliance: "faucet",
            room: "kitchen",
            image: "kitchen-faucet.svg",
            text: "Las goteras de agua constituyen alrededor del 14 por ciento de nuestro uso de agua. No encontrarás un grifo, un cabezal de ducha o un rociador que goteen en esta casa.",
            num: 1,
        },
        {
            category: "¿Sabías?",
            appliance: "sun",
            room: "outside",
            image: null,
            text: "La energía es la capacidad de realizar un trabajo. El sol es la energía que impulsa el viento, el ciclo del agua y la fotosíntesis; y la comida proporciona la energía a nuestro cuerpo. La energía proviene de los recursos naturales, que es todo lo que usamos que proviene de la tierra o del sol. Las fuentes de energía renovable tales como el sol, el agua, el viento y la biomasa pueden reemplazarse de manera natural. Los recursos energéticos tales como el gas natural, el carbón, el petróleo y el uranio se reemplazan muy lentamente o no se reemplazan en absoluto.",
            num: 1,
            position: "far right",
        },
        {
            category: "¿Sabías?",
            appliance: "wind",
            room: "outside",
            image: null,
            text: "Se necesitan tanto la eficiencia energética como los comportamientos energéticos inteligentes para ahorrar energía. La eficiencia energética consiste en gestionar el consumo de energía mediante el uso de tecnologías eficientes tales como dispositivos de agua de bajo caudal, bombillas LED o un termostato inteligente. ¡Las tecnologías eficientes nos ayudan a ahorrar energía! El usar la energía de manera inteligente, tales como tomar una ducha corta o apagar las luces, es importante para que las personas de todas las edades ahorren energía.",
            num: 1,
            position: "far right",
        },
        ],
    },

    // Mutations are functions that can change variables in Vuex
    mutations: {
        setCharacter(state, character) {
            //console.log("setCharacter");
            state.character = character;
        },
        setAnswer(state, payload) {
            //console.log(state);
            
            state.answers[payload.question] = (payload.answer == state.questions[payload.question].answers[state.questions[payload.question].correctAnswerIndex]);
        },
        resetCharacter(state) {
            //console.log("resetCharacter");
            state.character = null;
        },
        resetAnswers(state) {
            //console.log("resetAnswer");
            for(var i in state.answers) {
                state.answers[i] = null;
            }

            var m = state.questions.length, t, i;

            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = state.questions[m];
                state.questions[m] = state.questions[i];
                state.questions[i] = t;
            }

            state.randomQuestions = state.questions.slice(0, 5);
        }
    },

    // Functions that return variables stored here, along with additional information
    getters: {
        // Returns both a question and its possible answers, with the correct answer occupying the first slot
        // question: The question that's being asked
        // type: The type of question being asked
        //  - choice: A multiple choice question
        //  - limit: A question that has an answer with a certain amount of characters
        //  - number: A question with a number answer the user must input
        // answers: If choice question, array of possible answers to a choice question. If limit or number, the correct answer
        // result: The description of the result after submittal
        
        questions(state) {
          var questionCount = 5;
          if (typeof window.nefHouseConfig.questionCount != "undefined") {
            questionCount = window.nefHouseConfig.questionCount;
          }
//            console.log("getQuestions");
            var m = state.questions.length, t, i;

            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = state.questions[m];
                state.questions[m] = state.questions[i];
                state.questions[i] = t;
            }

            state.randomQuestions = state.questions.slice(0, questionCount);
            return state.randomQuestions;
        },

        // Returns the total score
        score(state, getters) {
//            console.log("score");
            var score = 0;
            getters.questions.forEach((v, i) => {
                if(typeof state.answers[i] != "undefined" && state.answers[i] == 1) score += 10;
            });
            return score;
        },

        // Returns the list of tooltips
        tooltips(state) {
            return state.tooltips;
        }
    },
})
