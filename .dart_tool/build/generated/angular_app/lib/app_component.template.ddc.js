define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_app/src/hero', 'packages/angular_app/app_component', 'packages/angular/angular.template', 'packages/angular_router/angular_router.template'], function(dart_sdk, view_type, change_detection, modules, router_outlet_directive, hero, app_component, angular, angular_router) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__routes = hero.src__routes;
  const src__hero_service = hero.src__hero_service;
  const src__hero_list_component$46template = hero.src__hero_list_component$46template;
  const src__hero_service$46template = hero.src__hero_service$46template;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__route_paths$46template = Object.create(_root);
  const src__routes$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _appEl_2 = Symbol('_appEl_2');
  const _RouterOutlet_2_8 = Symbol('_RouterOutlet_2_8');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : "");
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, "router-outlet", parentRenderNode);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, null, this, this[_el_2]);
      this[_RouterOutlet_2_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_2], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(src__routes.Routes.all == null)) {
          this[_RouterOutlet_2_8].routes = src__routes.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_2_8].ngOnInit();
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
      this[_RouterOutlet_2_8].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_appEl_2] = null;
    this[_RouterOutlet_2_8] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_app/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_2_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  const __HeroService_0_6 = Symbol('__HeroService_0_6');
  const _HeroService_0_6 = Symbol('_HeroService_0_6');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_HeroService_0_6]() {
      if (this[__HeroService_0_6] == null) {
        this[__HeroService_0_6] = new src__hero_service.HeroService.new();
      }
      return this[__HeroService_0_6];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    this[__HeroService_0_6] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_HeroService_0_6]: src__hero_service.HeroService
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent),
    [__HeroService_0_6]: dart.fieldType(src__hero_service.HeroService)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    src__hero_list_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    src__routes$46template.initReflector();
  };
  dart.defineLazy(src__route_paths$46template, {
    /*src__route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__route_paths$46template.initReflector = function() {
    if (dart.test(src__route_paths$46template._visited)) {
      return;
    }
    src__route_paths$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.defineLazy(src__routes$46template, {
    /*src__routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__routes$46template.initReflector = function() {
    if (dart.test(src__routes$46template._visited)) {
      return;
    }
    src__routes$46template._visited = true;
    src__hero_list_component$46template.initReflector();
    angular_router$46template.initReflector();
    src__route_paths$46template.initReflector();
    src__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_app/app_component.template.ddc", {
    "package:angular_app/app_component.template.dart": app_component$46template,
    "package:angular_app/src/route_paths.template.dart": src__route_paths$46template,
    "package:angular_app/src/routes.template.dart": src__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/route_paths.template.dart","src/routes.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmCoB,4CAAmB;YAAG;;;;;;;;;;;AAgBtC,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,aAAQ;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,mBAAO,GAAG,aAAY,CAAE,QAAG,MAAM,WAAT,QAAG,MAAM,GAAI;AACrC,iBAAK,SAAO,CAAC,aAAO;AACpB,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,iBAAiB,gBAAgB;AAC9D,oBAAQ,OAAG,mDAAa,CAAC,GAAG,MAAM,MAAM,WAAK;AAC7C,6BAAiB,OAAG,yDAAoB,2DAAC,eAAU,YAAY,CAAU,iEAAiB,EAAE,aAAQ,YAAY,EAAE,QAAO,cAAQ,oCAAE,eAAU,YAAY,CAAU,yCAAM,EAAE,aAAQ,YAAY,uCAAG,eAAU,YAAY,CAAU,0CAAU,EAAE,aAAQ,YAAY,EAAE;AACpQ,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,kBAAe,IAAI,IAAE,OAAO;AACzC,UAAC,uBAAiB,OAAO,GAAG,kBAAe,IAAI;;;AAGnD,qBAAM,8CAAoB,eAAe,KAAI,UAAU,EAAG;AACxD,+BAAiB,SAAS;;AAE5B,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAiB,YAAY;IAC/B;;6DAtCkB,UAA2B,EAAE,WAAe;IAN9C,WAAK;IACR,aAAO;IACJ,WAAK;IACP,cAAQ;IACD,uBAAiB;AAE4B,wEAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAClK,eAAM,2BAAG,AAAQ,aAAQ,gBAAc,CAAC;AACxC,kEAAW;gBAAX,sDAAW,GAAK,AAAQ,8CAAY,iBAAiB,CAAE,UAAQ,qCAAS,IAAG,6CAA6C,MAAO,2CAAiB,KAAK,EAAE,4CAAmB;AAC1K,2BAAkB,CAAC,sDAAW;EAChC;;;;;;;;;;;;;;;;;MAL2B,sDAAW;;;;;gEA0CgB,UAA2B,EAAE,WAAe;AAClG,eAAO,8CAAiB,CAAC,UAAU,EAAE,WAAW;EAClD;;MAEoB,gDAAuB;YAAG;;;;;;;;;AAQ1C,UAAK,uBAAsB,IAAI,MAAO;AACpC,QAAC,uBAAiB,OAAG,iCAAoB;;AAE3C,YAAO,wBAAsB;IAC/B;;AAIE,uBAAW,OAAG,8CAAiB,CAAC,MAAM;AACtC,iBAAM,GAAG,iBAAW,OAAO;AAC3B,6BAAiB,OAAG,+BAAoB;AACxC,uBAAW,OAAO,CAAC,uBAAiB,EAAE,qBAAgB;AACtD,gBAAK,CAAC,WAAM;AACZ,iBAAO,kCAAY,CAAC,GAAG,MAAM,WAAM,EAAE,uBAAiB;IACxD;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,4CAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,uBAAgB;;AAEzB,YAAO,eAAc;IACvB;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;kEAlCuB,UAA2B,EAAE,WAAe;IAHjD,iBAAW;IACR,uBAAiB;IACjB,uBAAiB;AACiC,6EAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;;;;;;oEAqC3G,UAA2B,EAAE,WAAe;AACtG,eAAO,mDAAsB,CAAC,UAAU,EAAE,WAAW;EACvD;;MAE6C,+CAAsB;YAAG,gBAAM,sCAAgB,CAAC,UAAU,uGAA6B;;;;;AAElI,YAAO,gDAAsB;IAC/B;;;MAEI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAO,oCAAiB,CAAC,0CAAY,EAAE,8CAAqB;AAC5D,IAAM,gCAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,oCAAa;EACrB;;MChJI,oCAAQ;YAAG;;;;;AAEb,kBAAI,oCAAQ,GAAE;AACZ;;AAEF,2CAAW;AAEX,IAAM,uCAAa;EACrB;;MCHI,+BAAQ;YAAG;;;;;AAEb,kBAAI,+BAAQ,GAAE;AACZ;;AAEF,sCAAW;AAEX,IAAM,iDAAa;AACnB,IAAM,uCAAa;AACnB,IAAM,yCAAa;AACnB,IAAM,yCAAa;EACrB","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__route_paths$46template: src__route_paths$46template,
    src__routes$46template: src__routes$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
