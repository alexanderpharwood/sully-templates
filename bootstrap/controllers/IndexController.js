function IndexController(){

    this.constructor = function(request){
        //
    }

    this.index = function (request) {

        return Sully.serveView("index");

    }

    this.pageOne = function (request) {

        return Sully.serveView("one");

    }

    this.pageTwo = function (request) {

        return Sully.serveView("two");

    }

 }

Sully.registerController('index', new IndexController());
