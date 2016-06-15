// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp')
 
// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider, $translateProvider, $httpProvider) {
 
    $stateProvider
 
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller : 'formController',
            resolve : {
                                                               'securityFactory' : function(
                                                                                              securityFactory) {
                                                                              return securityFactory.$promise;
                                                               }
                                               }
 
        })
 
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.category', {
 
            url: '/category',
            templateUrl: 'form-category.html'/*,
            controller : 'formController'*/
        })
 
        // url will be /form/interests
        .state('form.detail', {
            url: '/detail',
            templateUrl: 'form-detail.html'
        })
 
        // url will be /form/payment
        .state('form.summary', {
            url: '/summary',
            templateUrl: 'form-summary.html'
        })
 
        .state('admin', {
            url: '/admin',
            templateUrl: 'admin.html',
            controller : 'adminController',
            resolve : {
                                                               'securityFactory' : function(
                                                                                              securityFactory) {
                                                                              return securityFactory.$promise;
                                                               }
                                               }
 
        })
 
        .state('admin.category', {
            url: '/category',
            templateUrl: 'admin-category.html'
        })
 
        .state('admin.subcategory', {
            url: '/subcategory',
            templateUrl: 'admin-subcategory.html'
        })
 
        .state('admin.action', {
            url: '/action',
            templateUrl: 'admin-action.html'
        })
 
        .state('admin.location', {
            url: '/location',
            templateUrl: 'admin-location.html'
        })
 
        .state('admin.subnetwork', {
            url: '/subnetwork',
            templateUrl: 'admin-subnetwork.html'
        })
 
        .state('admin.subcatact', {
            url: '/subcatact',
            templateUrl: 'admin-subcat-act.html'
        });
 
    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/category');
 
    // Translate options
    $translateProvider.translations('en',
                    {
                        OPTION : 'Option',
                        DETALLE : 'Detail your problem',
                        TASK : 'Task',
                        BOTON : 'Create ticket',
                        REQUEST : 'Request type',
                        SUBIR : 'Upload screenshot (Optional)',
                        INPUT : 'File input',
                        ALERTA : 'Warning! Detail of problem is required.',
                        RESUMEN : 'Summary',
                        SECCION : 'Next Section',
                        ALERTASEND : 'Warning! Please fill all fields',
                        CATEGORIAMENU : '<span>1</span> REQUEST',
                        DETALLEMENU : '<span>2</span> DETAIL',
                        RESUMENMENU : '<span>3</span> SUMMARY',
                        ARCHIVO : 'Uploaded screenshot:',
                        BIENVENIDA : 'Welcome {{user}}',
                        NOLOGIN : 'A problem has occured in the authentication. Please, contact Service Center.',
                                TEMPLATE : 'Replace the fields with ',
                                SEARCHEMPLOYEE : "Search employee",
                                CLIENT : 'Client',
                                NAME : 'Name',
                                LOCATION : 'Location',
                                CREATE : 'Create',
                                UPDATE : 'Update',
                                DELETE : 'Delete',
            CANCEL : 'Cancel',
            NEW : 'New',
                                NETWORK : 'Subnetwork',
                                LANGUAGE : 'Language',
            VALUE : 'Value',
            ENABLED : 'Enabled',
            EXTERNALCODE: 'External code'
                    });
 
                    $translateProvider.translations('sp',
                    {
                                OPTION : 'Opción',
                        DETALLE : 'Detalle su problema',
                        TASK : 'Tarea',
                        BOTON : 'Crear ticket',
                        REQUEST : 'Tipo de requerimiento',
                        SUBIR : 'Cargar captura de pantalla (Opcional)',
                        INPUT : 'Entrada de archivo',
                        ALERTA : 'Alerta!El detalle del problema es requerido.',
                        RESUMEN : 'Resumen',
                        SECCION : 'Siguiente sección',
                        ALERTASEND : 'Alerta! Por favor llene todos los campos',
                        CATEGORIAMENU : '<span>1</span> REQUERIMIENTO',
                        DETALLEMENU : '<span>2</span> DETALLE',
                        RESUMENMENU : '<span>3</span> RESUMEN',
                        ARCHIVO : 'Captura de pantalla cargada:',
                        BIENVENIDA : 'Bienvenid@ {{user}}',
                        NOLOGIN : 'Un problema ha ocurrido en la autenticación. Por favor, contactar al Centro de Servicios.',
                        TEMPLATE : 'Reemplace los campos con ',
                        SEARCHEMPLOYEE : 'Buscar empleado',
                        CLIENT : 'Cliente',
                        NAME : 'Nombre',
                        LOCATION : 'Localización',
                        CREATE : 'Crear',
                                UPDATE : 'Actualizar',
                                DELETE : 'Eliminar',
            CANCEL : 'Cancelar',
            NEW : 'Nuevo',
                                NETWORK : 'Subred',
                                LANGUAGE : 'Lenguaje',
            VALUE : 'Valor',
            ENABLED : 'Habilitado',
            EXTERNALCODE: 'Código externo'
                    });
                    $translateProvider.preferredLanguage('en');
 
});
