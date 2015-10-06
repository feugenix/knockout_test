/*eslint no-console: 0*/

var MainViewModel = {
    requireVM: function(module) {
        var moduleVMPath = 'views/' + module + '/' + module;

        return function (callback) {
            try {
                require([moduleVMPath], function(mod) {
                    callback(mod());
                });
            } catch(e) {
                console.warn(e);
            }
        };
    }
};

require.config({
    baseUrl: '/',
    paths: {
        knockout: 'libs/knockout/dist/knockout',
        jquery: 'libs/jquery/dist/jquery',
        pager: 'libs/pagerjs/pager',
        domReady: 'libs/requirejs/domReady'
    }
});

require(
    [
        'knockout',
        'pager',
        'domReady!'
    ],
    function(ko, pager) {
        pager.Href.hash = '#!/';
        pager.extendWithPage(MainViewModel);

        ko.applyBindings(MainViewModel);

        pager.start();
    }
);
