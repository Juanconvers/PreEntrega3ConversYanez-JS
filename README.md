# PreEntrega3ConversYanez-JS
Repositorio de preentrega No. 3 - CODERHOUSE Javascript

// READ FIRST:

                                            NOTAS DE LA PREENTREGA No. 3

                        ** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 2 **

1. Se creó un sistema de Login para entrar al home de la página, donde el usuario introduce los datos y obtiene su respuesta.

    El sistema login incluye:
    a. Sistema funcional de visualización de la clave del usuario por medio de botón "mostrar contraseña", 
       el cual   funcina con addEventListener en la casilla input correspondiente.
    b. Linkeo a la página home al pulsar el botán iniciar sesión. Igualmente funciona con addEventListener.

2. Se modificó el archivo html del home (index) para recibir los datos y emitir el resultado del cálculo.



                                            NOTAS DE LA PREENTREGA No. 2

                        ** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 1 **

1. Se integró una nueva funcionalidad al programa que consiste en decirle al usuario cuántos de los casos ingresados en su consulta corresponden a una de las tres categorías de procesos judiciales (mínima, menor o mayor cuantía)

    Para lograr esto:
    1.1. Se dispuso que la información introducida por el usuario:  
        a. Nombre del caso
        b. La cuantía resultante del cálculo hecho por el programa
        c. Y la denominación jurídica de la cuantía
        Formaran un objeto llamado "caso".
    1.2. Cada uno de estos objetos formará un array llamado "listaCasos" - Uso del método Push para formar el array.
    1.3. Cuando se termina de ingresar la información y de formar el array, los datos se filtran y se forma un array que corresponda a cada categoría (mínima, menor o mayor cuantía).
    1.4. Luego se imprime el resultado de la filtración indicando cuántos casos resultaron de la consulta.

2. Se modificó el archivo html con las preguntas propias del programa.

3. Se dejaron listos los archivos SASS del proyecto, pues se borró el código sobrante que venía del curso de    Desarrollo Web.


                                            NOTAS DE LA PREENTREGA No. 1


** CALCULADORA PRA USOS JUDICIALES - DEFINICIÓN DE LA COMPETENCIA PARA PROCESOS DE PERTENENCIA EN COLOMBIA AÑO 2023 **

Explicación del programa:

1. El procesos judiciale de pertenencia juzga si alguien puede ser propietario de un inmueble sólo por el hecho de ocuparlo.
2. La "competencia judicial" es definir a cual Juez al que le corresponde decidir el asunto, pues hay muchos tipos de jueces.
3. La forma de definir esta competencia depende del valor del inmueble que se quiere adquirir. 
    En Colombia se le llama "cuantía" y dicho valor es el avalúo catastral del inmueble.
4. Puede ser que no se quiera adquirir la totalidad del inmueble (100%), sino que se se quiera otro porcentaje.
5. Esta calculadora determina el valor de la cuantía según el porcentaje que se pretenda adquirir.
6. El valor puede tener tres categorías: 

                  1. Ser inferior a $46.400.000 COP --> Juzgado Municipal o de Pequeñas Causas
                  2. Estar entre $46.400.000 COP y $174.000.000 COP --> Juzgado Municipal
                 3. Ser mayor a $174.000.000 COP --> Juzgado del Circuito
