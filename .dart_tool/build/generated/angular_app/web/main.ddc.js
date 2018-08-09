define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_app/in_memory_data_service', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/http/src/base_client', 'packages/angular/angular.template', 'packages/angular_app/app_component.template', 'packages/angular_app/in_memory_data_service.template', 'packages/angular_router/angular_router.template', 'packages/angular_app/app_component', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, change_detection, in_memory_data_service, router_outlet_directive, base_client, angular, app_component, in_memory_data_service$, angular_router, app_component$, modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical = change_detection.src__di__injector__hierarchical;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__injector__injector = change_detection.src__di__injector__injector;
  const in_memory_data_service$0 = in_memory_data_service.in_memory_data_service;
  const src__location__platform_location = router_outlet_directive.src__location__platform_location;
  const src__location__hash_location_strategy = router_outlet_directive.src__location__hash_location_strategy;
  const src__location__browser_platform_location = router_outlet_directive.src__location__browser_platform_location;
  const src__location__location_strategy = router_outlet_directive.src__location__location_strategy;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__router__router_impl = router_outlet_directive.src__router__router_impl;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__client = base_client.src__client;
  const angular$46template = angular.angular$46template;
  const app_component$46template = app_component.app_component$46template;
  const in_memory_data_service$46template = in_memory_data_service$.in_memory_data_service$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const app_component$0 = app_component$.app_component;
  const src__bootstrap__run = modules.src__bootstrap__run;
  const _root = Object.create(null);
  const main$46template = Object.create(_root);
  const main = Object.create(_root);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  main$46template.injector$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new main$46template._Injector$injector.__(parent);
  };
  const _field0 = Symbol('_field0');
  const _field1 = Symbol('_field1');
  const _field2 = Symbol('_field2');
  const _field3 = Symbol('_field3');
  const _field4 = Symbol('_field4');
  const _getInMemoryDataService$0 = Symbol('_getInMemoryDataService$0');
  let const$;
  const _getHashLocationStrategy$1 = Symbol('_getHashLocationStrategy$1');
  const _getBrowserPlatformLocation$2 = Symbol('_getBrowserPlatformLocation$2');
  const _getLocation$3 = Symbol('_getLocation$3');
  const _getRouterImpl$4 = Symbol('_getRouterImpl$4');
  const _getInjector$5 = Symbol('_getInjector$5');
  main$46template._Injector$injector = class _Injector$injector extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getInMemoryDataService$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new in_memory_data_service$0.InMemoryDataService.new() : t;
    }
    [_getHashLocationStrategy$1]() {
      let t = this[_field1];
      return t == null ? this[_field1] = new src__location__hash_location_strategy.HashLocationStrategy.new(this.inject(src__location__platform_location.PlatformLocation, dart.wrapType(src__location__platform_location.PlatformLocation)), core.String._check(this.injectOptionalUntyped(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new("appBaseHref"))), null))) : t;
    }
    [_getBrowserPlatformLocation$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__location__browser_platform_location.BrowserPlatformLocation.new() : t;
    }
    [_getLocation$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__location__location.Location.new(this.inject(src__location__location_strategy.LocationStrategy, dart.wrapType(src__location__location_strategy.LocationStrategy))) : t;
    }
    [_getRouterImpl$4]() {
      let t = this[_field4];
      return t == null ? this[_field4] = new src__router__router_impl.RouterImpl.new(this.inject(src__location__location.Location, dart.wrapType(src__location__location.Location)), src__router_hook.RouterHook._check(this.injectOptionalUntyped(dart.wrapType(src__router_hook.RouterHook), null))) : t;
    }
    [_getInjector$5]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__client.Client)) {
        return this[_getInMemoryDataService$0]();
      }
      if (token === dart.wrapType(src__location__location_strategy.LocationStrategy)) {
        return this[_getHashLocationStrategy$1]();
      }
      if (token === dart.wrapType(src__location__platform_location.PlatformLocation)) {
        return this[_getBrowserPlatformLocation$2]();
      }
      if (token === dart.wrapType(src__location__location.Location)) {
        return this[_getLocation$3]();
      }
      if (token === dart.wrapType(src__router__router.Router)) {
        return this[_getRouterImpl$4]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$5]();
      }
      return orElse;
    }
  };
  (main$46template._Injector$injector.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field4] = null;
    main$46template._Injector$injector.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = main$46template._Injector$injector.prototype;
  dart.addTypeTests(main$46template._Injector$injector);
  dart.setMethodSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getMethods(main$46template._Injector$injector.__proto__),
    [_getInMemoryDataService$0]: dart.fnType(in_memory_data_service$0.InMemoryDataService, []),
    [_getHashLocationStrategy$1]: dart.fnType(src__location__hash_location_strategy.HashLocationStrategy, []),
    [_getBrowserPlatformLocation$2]: dart.fnType(src__location__browser_platform_location.BrowserPlatformLocation, []),
    [_getLocation$3]: dart.fnType(src__location__location.Location, []),
    [_getRouterImpl$4]: dart.fnType(src__router__router_impl.RouterImpl, []),
    [_getInjector$5]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(main$46template._Injector$injector, () => ({
    __proto__: dart.getFields(main$46template._Injector$injector.__proto__),
    [_field0]: dart.fieldType(in_memory_data_service$0.InMemoryDataService),
    [_field1]: dart.fieldType(src__location__hash_location_strategy.HashLocationStrategy),
    [_field2]: dart.fieldType(src__location__browser_platform_location.BrowserPlatformLocation),
    [_field3]: dart.fieldType(src__location__location.Location),
    [_field4]: dart.fieldType(src__router__router_impl.RouterImpl)
  }));
  dart.defineLazy(main$46template, {
    /*main$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  main$46template.initReflector = function() {
    if (dart.test(main$46template._visited)) {
      return;
    }
    main$46template._visited = true;
    main$46template.initReflector();
    angular$46template.initReflector();
    app_component$46template.initReflector();
    in_memory_data_service$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.defineLazy(main, {
    /*main.injector*/get injector() {
      return dart.fn(main$46template.injector$Injector, __ToInjector());
    }
  });
  main.main = function() {
    src__bootstrap__run.runApp(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory, {createInjector: main.injector});
  };
  main$46template.main = main.main;
  dart.trackLibraries("web/main.ddc", {
    "main.template.dart": main$46template,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.template.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;+CAgCgC,MAAmB;2BAAN;UAAY,KAAI,qCAAoB,CAAC,MAAM;EAAC;;;;;;;;;;;;;;;cAehC,aAAO;yCAAK,IAAI,gDAAuB;IAAE;;cACvC,aAAO;yCAAK,IAAI,8DAAwB,CAAC,WAAM,oDAAK,gEAAgB,sBAAG,0BAAqB,CAAC,mCAAM,2BAAuB,CAAC,kBAAgB;IAAM;;cAC3I,aAAO;yCAAK,IAAI,oEAA2B;IAAE;;cAC3E,aAAO;yCAAK,IAAI,oCAAY,CAAC,WAAM,oDAAM,gEAAgB;IAAE;;cACvD,aAAO;yCAAK,IAAI,uCAAc,CAAC,WAAM,mCAAK,+CAAQ,sCAAG,0BAAqB,CAAM,0CAAU,EAAE;IAAM;;YACtG;IAAI;2BAEP,KAAY,EAAG,MAAmC;6BAA5B,SAAa,2CAAe;AAC9E,UAAI,AAAU,KAAK,KAAO,iCAAM,EAAG;AACjC,cAAO,gCAAyB;;AAElC,UAAI,AAAU,KAAK,KAAO,gEAAgB,EAAG;AAC3C,cAAO,iCAA0B;;AAEnC,UAAI,AAAU,KAAK,KAAM,gEAAgB,EAAG;AAC1C,cAAO,oCAA6B;;AAEtC,UAAI,AAAU,KAAK,KAAM,+CAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,UAAI,AAAU,KAAK,KAAO,yCAAM,EAAG;AACjC,cAAO,uBAAgB;;AAEzB,UAAI,AAAU,KAAK,KAAM,mDAAQ,EAAG;AAClC,cAAO,qBAAc;;AAEvB,YAAO,OAAM;IACf;;oDAvCsB,MAAmB;2BAAN;IAEX,aAAO;IAEN,aAAO;IAEJ,aAAO;IAEtB,aAAO;IAEL,aAAO;AAVwB,4HAAM,MAAM;EAAC;;;;;;;;;;;;;;;;;;;;;MA0CzD,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,uCAAa;EACrB;;MCtEsB,aAAQ;YAAQ,2DAAiB;;;;AAGrD,8BAAM,+BAAI,8CAAqB,mBAAkB,aAAQ;EAC3D","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46template: main$46template,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
