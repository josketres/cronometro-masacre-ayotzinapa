cronometro-masacre-ayotzinapa
=============================

Cronómetro del tiempo transcurrido desde la desaparación y el asesinato de estudiantes normalistas de Ayotzinapa, México.

Como utilizar (desarrollo)
-----
Una vez instalados los prerequisitos, se puede correr la aplicación de la siguiente manera:

    git clone https://github.com/josketres/cronometro-masacre-ayotzinapa.git
    cd cronometro-masacre-ayotzinapa/
    npm install
    bower install
    grunt serve

Publicar en GitHub Pages
-----

    grunt build:dist
    grunt buildcontrol:pages

Prerequisitos
-----

* Node.js (http://nodejs.org)
* Yeoman `npm install -g yo`
* Ruby (See https://forwardhq.com/support/installing-ruby-windows for windows install)
* Compass `gem install compass`

Scaffolding (inicializacion)
-----
Para inicializar el proyecto se utilizo yeoman y el generador de angular. 

No es necesario inicializar el proyecto de nuevo.
   
    npm install -g generator-angular
    yo angular