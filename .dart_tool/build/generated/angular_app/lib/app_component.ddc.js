define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
  };
  (app_component.AppComponent.new = function() {
    this[title] = "Tour of Heroes";
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const title = Symbol("AppComponent.title");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_app/app_component.ddc", {
    "package:angular_app/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;IAgBQ;;;;;;;;eAAK,GAAG;EAChB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
