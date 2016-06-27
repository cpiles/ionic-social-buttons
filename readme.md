
# ionic social styles

### Introduction:

This is an `ionic-social-buttons` component, which can be used in any Ionic framework's application. No additional plugins required for this component. Please rate this plugin @ [Ionic Market](https://market.ionic.io/plugins/ionic-social-buttons)


### Prerequisites.

* node.js, npm
* ionic
  - ionic setup sass

### Demo project
  
  * extract file
  * cd demo/
  * npm install
  * bower install
  * ionic setup sass 
  * ionic serve 

### How to use in other project:

1) Extract file and copy ionic-sidemenu subfolder in your project lib folder

2) Specify the path of  `ionic-sidemenu.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic -->
<script src="lib/ionic-sidemenu/ionic-sidemenu.bundle.min.js"></script>
```

3) In your application's main module, inject the dependency `ionic-sidemenu`, in order to work with this plugin
````javascript
angular.module('mainModuleName', ['ionic', 'ionic-sidemenu']){
//
}
```

4) You can configure this side menu at application level in the side menu controller to creating a json tree and theme.
Your config method may look like this if you wish to setup the configuration.

````javascript
.controller('SideMenuCtrl', function($scope) {
  $scope.theme = 'ionic-sidemenu-dark';
  $scope.tree =
    [{
      id: 1,
      level: 0,
      name: 'Maps',
      icon: "ion-map",
      items: [{
        id: 10,
        level: 1,
        name: 'Marker',
        icon: "ion-ios-location",
        items: [{
          id: 100,
          name: 'Images',
          level: 2,
          icon: "ion-image",
          state: 'app.search',
          items: null
        }, {
          id: 101,
          level: 2,
          name: 'User',
          icon: "ion-person",
          state: 'app.browse',
          items: null
        }]
      }]
    }, {
      id: 2,
      name: "Buy",
      icon: "ion-card",
      level: 0,
      state: 'app.playlists'
    }];
});
```

5) Inject in your menu.html  a this example template to replacing ion-content of ion-side-menu.

````html
    <ion-content ng-controller="SideMenuCtrl" ng-class="theme" >
        <div class="sidemenu-header">
          <img src="img/avatar.jpg"/>
        </div>
        <ion-list >
          <ionic-sidemenu tree="tree"></ionic-sidemenu>
        </ion-list>
    </ion-content>
```

6) ionic-sidemenu count with five themes,
look at step five for an example 

  * ionic-sidemenu-blue
  * ionic-sidemenu-red
  * ionic-sidemenu-green
  * ionic-sidemenu-stable
  * ionic-sidemenu-dark 

##Contact:
Gmail : carlospilesdeveloper@gmail.com

Comment or Rate it : https://market.ionic.io/plugins/ionic-sidemenu

