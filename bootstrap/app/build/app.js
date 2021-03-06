(function(){Sully.registerNotFound('error', '404');

Sully.registerRoute({
    name: '404',
    route: '/404',
    controller: 'error',
    method: '404',
});

Sully.registerRoute({
    name: '403',
    route: '/403',
    controller: 'error',
    method: '403',
});

Sully.registerRoute({
    name: 'index',
    route: '/',
    controller: 'index',
    method: 'index',
});

Sully.registerRoute({
    name: 'one',
    route: '/one',
    controller: 'index',
    method: 'pageOne',
});

Sully.registerRoute({
    name: 'two',
    route: '/two',
    controller: 'index',
    method: 'pageTwo',
});
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

function ErrorController(){

    this['404'] = function () {

        return Sully.serveView("404");

    };

    this['403'] = function () {

        return Sully.serveView('403');

    };

}

Sully.registerController('error', new ErrorController());
function ExampleMiddleware(){

        this.run = function (request) {
            //
        }

}

Sully.registerMiddleware('example', new ExampleMiddleware());
Sully.registerView('403', '{{view:header}}<div id="view-403">    <div class="landing-center text-center">        <h1><i>Whoops!</i> You shouldn&apos;t be here: 403.</h1>    </div></div>');

Sully.registerView('404', '{{view:header}}<div id="view-404">    <div class="landing-center text-center">        <h1><i>Whoops!</i> That doesn&apos;t look right: 404.</h1>    </div></div>');

Sully.registerView('header', '<!-- Navigation --><nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">  <div class="container">    <a class="navbar-brand" href="/">Sully</a>    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">      <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarResponsive">      <ul class="navbar-nav ml-auto">        <li class="nav-item">          <a class="nav-link" href="/one">Page One</a>        </li>        <li class="nav-item">          <a class="nav-link" href="/two">Page Two</a>        </li>      </ul>    </div>  </div></nav>');

Sully.registerView('index', '{{view:header}}<div class="landing">    <div class="content">        <h1 class="text-center">Bootstrap 4 ready</h1>    </div></div>');

Sully.registerView('one', '{{view:header}}<div class="page">    <div class="container">        <div class="row">            <div class="col-sm">                <h2>Page One</h2>                <hr>                <p>The meaning of life is...</p>            </div>        </div>    </div></div>');

Sully.registerView('two', '{{view:header}}<div class="page">    <div class="container">        <div class="row">            <div class="col-sm">                <h2>Page Two</h2>                <hr>                <p>... no one truly knows.</p>            </div>        </div>    </div></div>');

window.onload = function(){

    Sully.init({
        container: "Sully",
        exceptionMessage: "Oops, we've had a spillage!",
    });

};
})();