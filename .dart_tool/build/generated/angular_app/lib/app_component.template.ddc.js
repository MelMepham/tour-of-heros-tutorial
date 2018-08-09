define(['dart_sdk', 'packages/angular_app/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular_router/src/constants', 'packages/angular_router/angular_router.template', 'packages/angular_app/src/dashboard_component.css.shim', 'packages/angular_app/app_component', 'packages/http/src/base_client', 'packages/angular/angular.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, router_outlet_directive, constants, angular_router, dashboard_component$46css, app_component, base_client, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__router__router = router_outlet_directive.src__router__router;
  const src__location__location = router_outlet_directive.src__location__location;
  const src__router__router_outlet_token = router_outlet_directive.src__router__router_outlet_token;
  const src__router_hook = router_outlet_directive.src__router_hook;
  const src__directives__router_outlet_directive = router_outlet_directive.src__directives__router_outlet_directive;
  const src__directives__router_link_directive = constants.src__directives__router_link_directive;
  const src__directives__router_link_active_directive = constants.src__directives__router_link_active_directive;
  const src__directives__router_link_directive$46template = angular_router.src__directives__router_link_directive$46template;
  const angular_router$46template = angular_router.angular_router$46template;
  const src__route_paths = dashboard_component$46css.src__route_paths;
  const src__routes = dashboard_component$46css.src__routes;
  const src__hero_service = dashboard_component$46css.src__hero_service;
  const src__hero_service$46template = dashboard_component$46css.src__hero_service$46template;
  const src__dashboard_component$46template = dashboard_component$46css.src__dashboard_component$46template;
  const src__hero_component$46template = dashboard_component$46css.src__hero_component$46template;
  const src__hero_list_component$46template = dashboard_component$46css.src__hero_list_component$46template;
  const src__route_paths$46template = dashboard_component$46css.src__route_paths$46template;
  const app_component$ = app_component.app_component;
  const src__client = base_client.src__client;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__routes$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(src__directives__router_link_directive.RouterLink)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _RouterLink_3_5 = Symbol('_RouterLink_3_5');
  const _RouterLinkActive_3_6 = Symbol('_RouterLinkActive_3_6');
  const _el_6 = Symbol('_el_6');
  const _RouterLink_6_5 = Symbol('_RouterLink_6_5');
  const _RouterLinkActive_6_6 = Symbol('_RouterLinkActive_6_6');
  const _el_8 = Symbol('_el_8');
  const _appEl_8 = Symbol('_appEl_8');
  const _RouterOutlet_8_8 = Symbol('_RouterOutlet_8_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, "h1", parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : "");
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, "nav", parentRenderNode);
      this.addShimE(this[_el_2]);
      this[_el_3] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_2]));
      this.addShimC(this[_el_3]);
      this[_RouterLink_3_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_3]));
      this[_RouterLinkActive_3_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_3], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _text_4 = html.Text.new("Dashboard");
      this[_el_3][$append](_text_4);
      this[_RouterLinkActive_3_6].links = JSArrayOfRouterLink().of([this[_RouterLink_3_5].instance]);
      let _text_5 = html.Text.new(" ");
      this[_el_2][$append](_text_5);
      this[_el_6] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, "a", this[_el_2]));
      this.addShimC(this[_el_6]);
      this[_RouterLink_6_5] = new src__directives__router_link_directive$46template.RouterLinkNgCd.new(new src__directives__router_link_directive.RouterLink.new(src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__location__location.Location._check(this.parentView.injectorGet(dart.wrapType(src__location__location.Location), this.viewData.parentIndex)), null, this[_el_6]));
      this[_RouterLinkActive_6_6] = new src__directives__router_link_active_directive.RouterLinkActive.new(this[_el_6], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)));
      let _text_7 = html.Text.new("Heroes");
      this[_el_6][$append](_text_7);
      this[_RouterLinkActive_6_6].links = JSArrayOfRouterLink().of([this[_RouterLink_6_5].instance]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, "router-outlet", parentRenderNode);
      this.addShimE(this[_el_8]);
      this[_appEl_8] = new src__core__linker__view_container.ViewContainer.new(8, null, this, this[_el_8]);
      this[_RouterOutlet_8_8] = new src__directives__router_outlet_directive.RouterOutlet.new(src__router__router_outlet_token.RouterOutletToken._check(this.parentView.injectorGet(dart.wrapType(src__router__router_outlet_token.RouterOutletToken), this.viewData.parentIndex, null)), this[_appEl_8], src__router__router.Router._check(this.parentView.injectorGet(dart.wrapType(src__router__router.Router), this.viewData.parentIndex)), src__router_hook.RouterHook._check(this.parentView.injectorGet(dart.wrapType(src__router_hook.RouterHook), this.viewData.parentIndex, null)));
      this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this[_el_6][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_6_5].instance, 'onClick')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let currVal_0 = src__route_paths.RoutePaths.dashboard.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_3_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_RouterLinkActive_3_6].routerLinkActive = "active";
      }
      let currVal_2 = src__route_paths.RoutePaths.heroes.toUrl();
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_RouterLink_6_5].instance.routerLink = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        this[_RouterLinkActive_6_6].routerLinkActive = "active";
        if (!(src__routes.Routes.all == null)) {
          this[_RouterOutlet_8_8].routes = src__routes.Routes.all;
        }
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_8_8].ngOnInit();
      }
      this[_appEl_8].detectChangesInNestedViews();
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3]);
      this[_RouterLink_6_5].detectHostChanges(this, this[_el_6]);
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_3_6].ngAfterViewInit();
          this[_RouterLinkActive_6_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      let t = this[_appEl_8];
      t == null ? null : t.destroyNestedViews();
      this[_RouterLink_3_5].instance.ngOnDestroy();
      this[_RouterLinkActive_3_6].ngOnDestroy();
      this[_RouterLink_6_5].instance.ngOnDestroy();
      this[_RouterLinkActive_6_6].ngOnDestroy();
      this[_RouterOutlet_8_8].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_RouterLink_3_5] = null;
    this[_RouterLinkActive_3_6] = null;
    this[_el_6] = null;
    this[_RouterLink_6_5] = null;
    this[_RouterLinkActive_6_6] = null;
    this[_el_8] = null;
    this[_appEl_8] = null;
    this[_RouterOutlet_8_8] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_app/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
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
    [_el_3]: dart.fieldType(html.AnchorElement),
    [_RouterLink_3_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_3_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_6]: dart.fieldType(html.AnchorElement),
    [_RouterLink_6_5]: dart.fieldType(src__directives__router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_6_6]: dart.fieldType(src__directives__router_link_active_directive.RouterLinkActive),
    [_el_8]: dart.fieldType(html.Element),
    [_appEl_8]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_RouterOutlet_8_8]: dart.fieldType(src__directives__router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String)
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
        this[__HeroService_0_6] = new src__hero_service.HeroService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
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
    src__hero_service$46template.initReflector();
    src__routes$46template.initReflector();
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
    src__dashboard_component$46template.initReflector();
    src__hero_component$46template.initReflector();
    src__hero_list_component$46template.initReflector();
    angular_router$46template.initReflector();
    src__route_paths$46template.initReflector();
    src__route_paths$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_app/app_component.template.ddc", {
    "package:angular_app/app_component.template.dart": app_component$46template,
    "package:angular_app/src/routes.template.dart": src__routes$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/routes.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__routes$46template: src__routes$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
