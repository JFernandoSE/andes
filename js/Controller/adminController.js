// create our angular app and inject ngAnimate and ui-router
// =============================================================================
var app = angular.module('formApp')
 
// our controller for the form
// =============================================================================
app.controller('adminController',['$scope','$http','$translate','$filter', 'securityFactory', 'adminFactory',
                                  '$timeout', function($scope, $http, $translate, $filter, securityFactory,
                                                                 adminFactory, $timeout) {
 
 
 
 
 
 
                //console.log(securityFactory);
                $scope.userCaller = securityFactory.userName;
                $scope.userFullName = securityFactory.fullName;
                $scope.groups = securityFactory.groups;
                $scope.request_type_record = new adminFactory();
                $scope.request_type_record.subcategory = new adminFactory();
                $scope.request_type_record.action = new adminFactory();
                $scope.request_type_record.action.actionAssigmentList = new adminFactory();
//            $scope.userCaller = 'JAGUILA1';
//            $scope.userFullName = 'Usuario quemado';
 
                var inGroup = function(JSONArray, groupToFind){
                    for (var i = 0; i < JSONArray.length; i++) {
                                //console.log(JSONArray[i].name);
                                if (JSONArray[i].name == groupToFind)
                                               return true;
                                }
                    return false;
                };
 
                $scope.isAnalyst = inGroup($scope.groups, 'Courier Ticketing Analyst');
 
 
                //Change the language of the static words
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
 
    $scope.languageId = "eng";
    $scope.reqTypId = 281485929021545;
    $scope.idioma = "Español";
    $scope.codigoIdioma = "en"
 
    $scope.setLanguage = function(){
                if($scope.idioma == "Español"){
                               $scope.idioma = "English";
                               $scope.languageId = "spa";
                               $scope.codigoIdioma = "sp";
                               return $scope.varIdioma = {'languageId':$scope.languageId, 'codigoIdioma':$scope.codigoIdioma};
 
                }else{
                               $scope.idioma = "Español";
                               $scope.languageId = "eng";
                               $scope.codigoIdioma = "en";
                               return $scope.varIdioma = {'languageId':$scope.languageId, 'codigoIdioma':$scope.codigoIdioma};
                }
    };
 
 
    $scope.getLanguage = function (value) {
        $scope.languageId = value;
        $scope.formData.selectedCategory = {};
        $scope.formData.selectedSubcategory = {};
                $scope.formData.selectedAction = {};
 
 
    };
 
 
    $scope.languageOptions = [
                              {code:'eng'},
                              {code:'spa'}
                            ];
 
 
// Upload file form
    $scope.formData = {};
 
 
 
 
 
    var getActions = function(){
                $scope.actions = adminFactory.allActions({
                languageCode : $scope.languageId
        });
                //console.log($scope.actions);
    };
 
 
 
 
 
    getActions();
 
 
 
 
 
 
    $scope.getVSubcategories = function(oid){
                $scope.vsubcategories = adminFactory.allVSubcategories({
                               catOid : oid
                });
                //console.log("VSUBCATEGORY");
                //console.log($scope.vsubcategories);
    };
 
    var getVActions = function(){
                $scope.vactions = adminFactory.allVActions();
                //console.log("VACTION");
                //console.log($scope.vactions);
    };
 
    getActions();
 
 
 
 
    getVActions();
 
 
    ////////////
    // LOCATIONS
    ////////////
 
    $scope.locations = adminFactory.allLocations();
 
    $scope.selectCurrentLocation = function(location) {
      $scope.isUpdate = true;
      $scope.currentLocation = angular.copy(location);
    };
 
 
   $scope.updateLocation = function(id, name) {
                adminFactory.updateLocation({
                id : id,
                name : name
        }).$promise.then(function(data){
                alert("Updated");
 
                $timeout(function() {
                               $scope.locations = adminFactory.allLocations();
                                               }, 800);
        }, function(error){});
 
    };
 
    $scope.newLocation = function() {
      $scope.isUpdate = false;
      $scope.currentLocation = {};
    };
 
 
    $scope.createLocation = function(){
                adminFactory.createLocation({
                id : $scope.currentLocation.id,
                name : $scope.currentLocation.name
        }).$promise.then(function(data){
                alert("Created");
 
                $timeout(function() {
                               $scope.locations = adminFactory.allLocations();
                                               }, 800);
 
        }, function(error){
                alert("Error");
        });
 
    };
 
    $scope.deleteLocation = function(location){
 
      if (confirm("Are you sure to delete?")) {
          //console.log("Location to delete: " + location.id);
          adminFactory.deleteLocation({
                               id : location.id
                               }).$promise.then(function(data){
                                               alert("Deleted");
 
                $timeout(function() {
                               $scope.locations = adminFactory.allLocations();
                                               }, 800);
 
                               }, function(error){
                                               alert("Unable to delete location. Check relation to subnetworks");
                               });
 
 
      }
 
 
    };
 
 
    //////////////
    // SUBNETWORKS
    //////////////
 
 
    $scope.subnetworks = adminFactory.allSubnetworks();
 
    $scope.selectCurrentSubnetwork = function(subnetwork) {
      $scope.isUpdate = true;
      $scope.currentSubnetwork = angular.copy(subnetwork);
    };
 
    $scope.newSubnetwork = function() {
      $scope.isUpdate = false;
      $scope.currentSubnetwork = {};
    };
 
 
    $scope.createSubnetwork = function(){
                adminFactory.createSubnetwork({
                               idSubnetwork : $scope.currentSubnetwork.id,
                               idLocation : $scope.currentSubnetwork.location.id
        }).$promise.then(function(data){
                alert("Created");
                $timeout(function() {
                               $scope.subnetworks = adminFactory.allSubnetworks();
                                               }, 800);
 
        }, function(error){
                alert("Error");
        });
 
    };
 
    $scope.updateSubnetwork = function(subnetwork, location){
                adminFactory.updateSubnetwork({
                               idSubnetwork : subnetwork,
                               idLocation : location
                }).$promise.then(function(data){
                               alert("Updated");
                $timeout(function() {
                               $scope.subnetworks = adminFactory.allSubnetworks();
                                               }, 800);
 
        }, function(error){
                alert("Error");
        });
 
    };
 
    $scope.deleteSubnetwork = function(subnetwork){
 
      if (confirm("Are you sure to delete?")) {
 
 
                adminFactory.deleteSubnetwork({
                               id : subnetwork.id
                }).$promise.then(function(data){
                               alert("Deleted");
                $timeout(function() {
                               $scope.subnetworks = adminFactory.allSubnetworks();
                                               }, 800);
 
          }, function(error){
                alert("Error");
          });
      }
    };
 
 
 
 
    /////////////////////////////////
    // CATEGORIES AND CATEGORIES LANG
    /////////////////////////////////
 
    var getCategories = function(){
                $scope.categoriesAll = adminFactory.categoriesAll();
    };
 
    getCategories();
 
    var getExternalCategoriesAll = function(){
                $scope.externalCategoriesAll = adminFactory.externalCategoryAll();
    };
 
    getExternalCategoriesAll();
 
 
    var getCategoryLangByCategory = function(categoryId) {
      $scope.categoryLang = adminFactory.categoryLangByCategory({
          category : categoryId
        });
    };
 
    $scope.selectCurrentCategory = function(category) {
      $scope.isUpdateCategory = true;
      $scope.currentCategory = angular.copy(category);
      //console.log($scope.currentCategory.category.catOid);
      getCategoryLangByCategory($scope.currentCategory.id);
    };
 
    $scope.newCategory = function(id) {
      $scope.isUpdateCategory = false;
      $scope.currentCategory = {enabled: 'N'};
      $scope.categoryLang = [];
    };
 
    $scope.selectCurrentCategoryLang = function(categoryLang) {
      $scope.isUpdateCategoryLang = true;
      $scope.currentCategoryLang = angular.copy(categoryLang);
      //console.log($scope.currentCategoryLang);
    };
 
    $scope.newCategoryLang = function(id) {
      $scope.isUpdateCategoryLang = false;
      $scope.currentCategoryLang = {id: id};
    };
 
 
 
 
 
    $scope.createCategory = function(currentCategory){
      currentCategory.reqtypOid = $scope.reqTypId;
      console.log($scope.currentCategory);
      adminFactory.createCategory({},
        currentCategory
        ).$promise.then(function(data){
          alert("Created");
          getCategories();
 
        }, function(error){
          alert("Error");
        });
 
    };
 
    $scope.createCategoryLang = function(){
 
      adminFactory.createCategoryLang({
          id : $scope.currentCategoryLang.id,
          languageCode : $scope.currentCategoryLang.languageCode,
          name : $scope.currentCategoryLang.name
        }).$promise.then(function(data){
          alert("Created");
 
          $timeout(function() {
            getCategoryLangByCategory($scope.currentCategoryLang.id);
      }, 100);
 
        }, function(error){
          alert("Error");
        });
 
    };
 
    $scope.updateCategory = function(categoryLang){
 
      adminFactory.updateCategory({
        id : categoryLang.id
      }, categoryLang).$promise.then(function(data){
        alert("Updated");
        getCategories();
        }, function(error){
          alert("Error");
        });
    };
 
 
    $scope.updateCategoryLang = function(categoryLang){
 
      adminFactory.updateCategoryLang({
        id : categoryLang.id,
        languageCode : categoryLang.languageCode,
        name : categoryLang.name
      }).$promise.then(function(data){
        alert("Updated");
          $timeout(function() {
            getCategoryLangByCategory(categoryLang.id);
      }, 100);
 
        }, function(error){
          alert("Error: " + httpResponse.statusCode);
        });
    };
 
    $scope.deleteCategory = function(category){
 
      if (confirm("Are you sure to delete?")) {
          //console.log("Location to delete: " + location.id);
          adminFactory.deleteCategory({
            id : category.id
        }).$promise.then(function(data){
          alert("Deleted");
              $timeout(function() {
                getCategories();
          }, 100);
 
        }, function(error){
          alert("Unable to delete. Check dependecies on Options");
        });
 
 
      }
 
    }
 
    $scope.deleteCategoryLang = function(categoryLang) {
      if (confirm("Are you sure to delete?")) {
          adminFactory.deleteCategoryLang({
            id : categoryLang.id,
            languageCode : categoryLang.languageCode
        }).$promise.then(function(data){
          alert("Deleted.");
              $timeout(function() {
                getCategoryLangByCategory(categoryLang.id);
          }, 100);
 
        }, function(error){
          alert("Unable to delete.");
        });
      }
    }
 
 
 
    ///////////////////////////////////////
    // SUBCATEGORIES AND SUBCATEGORIES LANG
    ///////////////////////////////////////
 
 
 
    var getSubcategories = function(){
                $scope.subcategoriesAll = adminFactory.subcategoriesAll();
    };
 
    getSubcategories();
 
 
    var getExternalSubcategories = function(catOid){
      //console.log(catOid);
                $scope.externalSubcategories = adminFactory.externalSubcategoryByExternalCategory({
        catOid : catOid
      });
    };
 
    var getSubcategoryLangBySubcategory = function(subcategoryId) {
      //console.log(subcategoryId);
      $scope.subcategoryLang = adminFactory.subcategoryLangBySubcategory({
          subcategoryId : subcategoryId
        });
    };
 
 
    $scope.selectCurrentSubcategory = function(subcategory) {
      //console.log(subcategory.category);
      $scope.isUpdateSubcategory = true;
      $scope.currentSubcategory = angular.copy(subcategory);
 
      //$scope.current = {category : $scope.currentSubcategory.category};
      //console.log($scope.current.category);
      //console.log($scope.currentSubcategory.category);
      //console.log($scope.currentSubcategory);
      getSubcategoryLangBySubcategory(subcategory.id);
      getExternalSubcategories(subcategory.category.externalCategory.catOid);
    };
 
    $scope.selectCurrentSubcategoryLang = function(subcategoryLang) {
      $scope.isUpdateSubcategoryLang = true;
      $scope.currentSubcategoryLang = angular.copy(subcategoryLang);
      //console.log($scope.currentSubcategoryLang);
    };
 
    $scope.refreshExternalSubcategories = function() {
      //console.log($scope.currentSubcategory.category.externalCategory.catOid);
      $scope.currentSubcategory.externalSubcategory = null;
      getExternalSubcategories($scope.currentSubcatkegory.category.externalCategory.catOid);
    };
 
 
    $scope.createSubcategory = function(idCategory){
                $scope.request_type_record.subcategory.subCatOid;
                $scope.request_type_record.subcategory.enabled;
                $scope.request_type_record.subcategoryLangs = $scope.choices;
                               $scope.request_type_record.$createSubcategory({id:idCategory},
                                               function(value,headers) {
                                                               alert("Created");
                                                               getSubcategories();
                                               },
                                               function(httpResponse) {
                                                               alert("Error: " + httpResponse.statusCode);
                                               }
                               );
 
    };
 
 
    $scope.updateSubcategory = function(subcategoryLang){
 
      adminFactory.updateSubcategory({
        id : subcategoryLang.id
      }, subcategoryLang).$promise.then(function(data){
        alert("Updated");
        getSubcategories();
        }, function(error){
          alert("Error");
        });
    };
 
 
 
 
                $scope.deleteSubcategory = function(idSubcategory) {
                $scope.request_type_record.$deleteSubcategory({id : idSubcategory},
                                               function(value,headers) {
                                                               alert("Deleted");
                                                               getSubcategories();
                                               },
                                               function(httpResponse) {
                                                               alert("ERROR! This Subcategory has actions.");
                                                               console.log(httpResponse);
                                               }
                               )
 
    }
 
    $scope.deleteCategoryLang = function(categoryLang){
      if (confirm("Are you sure to delete?")) {
          adminFactory.deleteCategoryLang({
            id : categoryLang.id,
            languageCode : categoryLang.languageCode
        }).$promise.then(function(data){
          alert("Deleted.");
              $timeout(function() {
                getCategoryLangByCategory(categoryLang.id);
          }, 100);
 
        }, function(error){
          alert("Unable to delete.");
        });
      }
    }
 
 
        $scope.deleteSubcategoryLang = function(subcategoryLang) {
          //console.log(subcategoryLang.id);
          //console.log(subcategoryLang.languageCode);
          if (confirm("Are you sure to delete?")) {
              adminFactory.deleteSubcategoryLang({
                id : subcategoryLang.id,
                languageCode : subcategoryLang.languageCode
            }).$promise.then(function(data){
              alert("Deleted.");
                  $timeout(function() {
                    getSubcategoryLangBySubcategory(subcategoryLang.id);
              }, 100);
 
            }, function(error){
              alert("Unable to delete.");
            });
          }
        }
 
 
 
 
//            $scope.request_type_record.action.enabled = "N";
    $scope.createAction = function(){
                $scope.request_type_record.action.actOid;
                $scope.request_type_record.action.enabled;
//            $scope.request_type_record.action.actionAssigmentList.defaultSelected;
//            $scope.request_type_record.action.actionAssigmentList.subcategory;
                $scope.request_type_record.actionLangs = $scope.choices;
 
                               $scope.request_type_record.$createAction({},
                                               function(value,headers) {
                                                               alert("Created");
                                                               getActions();
                                               },
                                               function(httpResponse) {
                                                               alert("Error: " + httpResponse.statusCode);
                                               }
                               );
 
    };
 
    $scope.updateAction = function(idAction){
                $scope.request_type_record.action.actOid;
                $scope.request_type_record.action.enabled;
//            $scope.request_type_record.action.actionAssigmentList.defaultSelected;
//            $scope.request_type_record.action.actionAssigmentList.subcategory;
                $scope.request_type_record.actionLangs = $scope.choices;
 
                               $scope.request_type_record.$updateAction({id : idAction},
                                               function(value,headers) {
                                                               alert("Updated");
                                                               getActions();
                                               },
                                               function(httpResponse) {
                                                               alert("Error: " + httpResponse.statusCode);
                                               }
                               );
 
    };
 
    $scope.deleteAction = function(idAction){
                $scope.request_type_record.$deleteAction({id : idAction},
                                               function(value,headers) {
                                                               alert("Deleted");
                                                               getActions();
                                               },
                                               function(httpResponse) {
                                                               alert("ERROR!");
                                                               console.log(httpResponse);
                                               }
                               )
 
 
    }
 
 
}]);
