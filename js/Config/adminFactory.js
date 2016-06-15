var adminServices = angular.module('adminModule', [ 'ngResource']);
 
 
adminServices.factory('adminFactory', ['$resource','$http', function($resource, $http){
                return $resource('/ticketing/restapi', {}, {
                               allLocations : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/locations/all'
                               },
                               createLocation : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/locations/create',
                                               params : {id:'@id', name:'@name'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteLocation : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/locations/:id/delete',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateLocation : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/locations/:id/update',
                                               params : {id:'@id', name:'@name'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               allSubnetworks : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/subnetworks/all'
                               },
                               createSubnetwork : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/subnetworks/create',
                                               params : {idSubnetwork:'@idSubnetwork', idLocation:'@idLocation'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateSubnetwork : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/subnetworks/:id/update',
                                               params : {id:'@idSubnetwork', idLocation:'@idLocation'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteSubnetwork : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/subnetworks/:id/delete',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               // CATEGORIES AND CATEGORIESLANG
                               categoriesAll : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/categories/all',
                                               isArray : true
                               },
                               categoryLangByCategory : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/categorieslang/bycategory',
                                               params : {category:'@category'},
                                               isArray : true
                               },
                               createCategory : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/categories/create',
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateCategory : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/categories/:id/update',
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               createCategoryLang : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/categorieslang/create',
                                               params : {id:'@id', languageCode:'@languageCode', name:'@name'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateCategoryLang : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/categorieslang/:id/update',
                                               params : {id:'@id', languageCode:'@languageCode', name:'@name'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteCategory : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/categories/:id/delete',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteCategoryLang : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/categorieslang/:id/:languageCode/delete',
                                               params : {id:'@id', languageCode:'@languageCode'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               // SUBCATEGORIES AND SUBCATEGORIESLANG
                               subcategoriesAll : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/subcategories/all',
                                               isArray : true
                               },
                               subcategoryLangBySubcategory : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/subcategorieslang/bysubcategory',
                                               params : {subcategoryId:'@subcategoryId'},
                                               isArray : true
                               },
                               createSubcategory : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/subcategories/create',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateSubcategory : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/subcategories/:id/update',
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteSubcategory : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/subcategories/:id/delete',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteSubcategoryLang : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/subcategorieslang/:id/:languageCode/delete',
                                               params : {id:'@id', languageCode:'@languageCode'},
                                               transformResponse: [function (data, headersGetter) {
                                                                                                                             return data;
                                                                                              }]
                               },
                               allActions : {
                                               method : 'GET',
                                               url : '/ticketing/restapi/actions/all',
                                               params : {languageCode:'@languageCode'}
                               },
                               createAction : {
                                               method : 'POST',
                                               url : '/ticketing/restapi/actions/create',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               updateAction : {
                                               method : 'PUT',
                                               url : '/ticketing/restapi/actions/:id/update',
                                               params : {},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               deleteAction : {
                                               method : 'DELETE',
                                               url : '/ticketing/restapi/actions/:id/delete',
                                               params : {id:'@id'},
                                               transformResponse: [function (data, headersGetter) {
                return data;
            }]
                               },
                               externalCategoryAll : {
                                               method : 'GET',
                                               url : 'restapi/categories/vcategory',
                                               params : {reqtype:281485929021545},
                                               isArray:true
                               },
                               externalSubcategoryByExternalCategory : {
                                               method : 'GET',
                                               url : 'restapi/subcategories/external',
                                               params : {catOid:'@catOid'},
                                               isArray:true
                               },
                               allVActions : {
                                               method : 'GET',
                                               url : 'restapi/actions/vaction',
                                               params : {}
                               }
                })
}])
