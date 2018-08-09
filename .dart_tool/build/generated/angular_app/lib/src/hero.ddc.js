define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_forms/src/directives', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_router/src/directives/router_outlet_directive'], function(dart_sdk, view_type, change_detection, modules, directives, angular, angular_forms, router_outlet_directive) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__directives__default_value_accessor = directives.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const src__route_path = router_outlet_directive.src__route_path;
  const src__route_definition = router_outlet_directive.src__route_definition;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  const src__mock_heroes = Object.create(_root);
  const src__hero$46template = Object.create(_root);
  const src__mock_heroes$46template = Object.create(_root);
  const src__hero_component = Object.create(_root);
  const src__hero_component$46template = Object.create(_root);
  const src__hero_service = Object.create(_root);
  const src__hero_service$46template = Object.create(_root);
  const src__hero_list_component = Object.create(_root);
  const src__hero_list_component$46css$46shim = Object.create(_root);
  const src__hero_list_component$46template = Object.create(_root);
  const src__route_paths = Object.create(_root);
  const src__routes = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroComponent = () => (AppViewOfHeroComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_component.HeroComponent)))();
  let AppViewAndintToAppViewOfHeroComponent = () => (AppViewAndintToAppViewOfHeroComponent = dart.constFn(dart.fnType(AppViewOfHeroComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfHeroComponent = () => (ComponentRefOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent)))();
  let ComponentFactoryOfHeroComponent = () => (ComponentFactoryOfHeroComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_component.HeroComponent)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent)))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_list_component.HeroListComponent)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(src__route_definition.RouteDefinition)))();
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (src__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__mock_heroes, {
    /*src__mock_heroes.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new src__hero.Hero.new(11, "Mel-o-Sauras"), new src__hero.Hero.new(12, "Narco"), new src__hero.Hero.new(13, "Bombasto"), new src__hero.Hero.new(14, "Celeritas"), new src__hero.Hero.new(15, "Magneta"), new src__hero.Hero.new(16, "RubberMan"), new src__hero.Hero.new(17, "Dynama"), new src__hero.Hero.new(18, "Dr IQ"), new src__hero.Hero.new(19, "Magma"), new src__hero.Hero.new(20, "Tornado")]);
    }
  });
  src__hero$46template.initReflector = function() {
  };
  dart.defineLazy(src__mock_heroes$46template, {
    /*src__mock_heroes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__mock_heroes$46template.initReflector = function() {
    if (dart.test(src__mock_heroes$46template._visited)) {
      return;
    }
    src__mock_heroes$46template._visited = true;
    src__hero$46template.initReflector();
  };
  src__hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero];
    }
    set hero(value) {
      this[hero] = value;
    }
  };
  (src__hero_component.HeroComponent.new = function() {
    this[hero] = null;
  }).prototype = src__hero_component.HeroComponent.prototype;
  dart.addTypeTests(src__hero_component.HeroComponent);
  const hero = Symbol("HeroComponent.hero");
  dart.setFieldSignature(src__hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(src__hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponent*/get styles$HeroComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  src__hero_component$46template.ViewHeroComponent0 = class ViewHeroComponent0 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(src__hero_component$46template.viewFactory_HeroComponent1, AppViewAndintToAppViewOfHeroComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.hero != null;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__hero_component$46template.ViewHeroComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    src__hero_component$46template.ViewHeroComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-hero"));
    let t = src__hero_component$46template.ViewHeroComponent0._renderType;
    t == null ? src__hero_component$46template.ViewHeroComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_app/lib/src/hero_component.dart" : null, src__core__metadata__view.ViewEncapsulation.None, src__hero_component$46template.styles$HeroComponent) : t;
    this.setupComponentType(src__hero_component$46template.ViewHeroComponent0._renderType);
  }).prototype = src__hero_component$46template.ViewHeroComponent0.prototype;
  dart.addTypeTests(src__hero_component$46template.ViewHeroComponent0);
  dart.setMethodSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template.ViewHeroComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getFields(src__hero_component$46template.ViewHeroComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__hero_component$46template.ViewHeroComponent0, {
    /*src__hero_component$46template.ViewHeroComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_component$46template.viewFactory_HeroComponent0 = function(parentView, parentIndex) {
    return new src__hero_component$46template.ViewHeroComponent0.new(parentView, parentIndex);
  };
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _el_11 = Symbol('_el_11');
  const _DefaultValueAccessor_11_5 = Symbol('_DefaultValueAccessor_11_5');
  const _NgValueAccessor_11_6 = Symbol('_NgValueAccessor_11_6');
  const _NgModel_11_7 = Symbol('_NgModel_11_7');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _handle_input_11_2 = Symbol('_handle_input_11_2');
  const _handle_ngModelChange_11_0 = Symbol('_handle_ngModelChange_11_0');
  let const$0;
  src__hero_component$46template._ViewHeroComponent1 = class _ViewHeroComponent1 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_0]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_3]);
      let _text_5 = html.Text.new("id:");
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new("");
      this[_el_3][$append](this[_text_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_7]);
      let _text_9 = html.Text.new("name:");
      this[_el_8][$append](_text_9);
      let _text_10 = html.Text.new(" ");
      this[_el_7][$append](_text_10);
      this[_el_11] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", this[_el_7]));
      this.createAttr(this[_el_11], "placeholder", "name");
      this[_DefaultValueAccessor_11_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_11]);
      this[_NgValueAccessor_11_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_11_5]]);
      this[_NgModel_11_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_11_6]);
      this[_el_11][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_11_5], 'touchHandler')));
      this[_el_11][$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_11_2)));
      let subscription_0 = this[_NgModel_11_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_11_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new("NgValueAccessor")))) && 11 === nodeIndex) {
        return this[_NgValueAccessor_11_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 11 === nodeIndex) {
        return this[_NgModel_11_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_11_7].model = _ctx.hero.name;
      this[_NgModel_11_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_11_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_11_0]($event) {
      this.ctx.hero.name = core.String._check($event);
    }
    [_handle_input_11_2]($event) {
      this[_DefaultValueAccessor_11_5].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
    }
  };
  (src__hero_component$46template._ViewHeroComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_text_6] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_el_11] = null;
    this[_DefaultValueAccessor_11_5] = null;
    this[_NgValueAccessor_11_6] = null;
    this[_NgModel_11_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__hero_component$46template._ViewHeroComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_component$46template.ViewHeroComponent0._renderType;
  }).prototype = src__hero_component$46template._ViewHeroComponent1.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewHeroComponent1);
  dart.setMethodSignature(src__hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewHeroComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewHeroComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.DivElement),
    [_el_4]: dart.fieldType(html.Element),
    [_text_6]: dart.fieldType(html.Text),
    [_el_7]: dart.fieldType(html.DivElement),
    [_el_8]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_11_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_11_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_11_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__hero_component$46template.viewFactory_HeroComponent1 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewHeroComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template.styles$HeroComponentHost*/get styles$HeroComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroComponent_0_5 = Symbol('_HeroComponent_0_5');
  src__hero_component$46template._ViewHeroComponentHost0 = class _ViewHeroComponentHost0 extends src__core__linker__app_view.AppView$(src__hero_component.HeroComponent) {
    build() {
      this[_compView_0] = new src__hero_component$46template.ViewHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroComponent_0_5] = new src__hero_component.HeroComponent.new();
      this[_compView_0].create(this[_HeroComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroComponent()).new(0, this, this.rootEl, this[_HeroComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_component$46template._ViewHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroComponent_0_5] = null;
    src__hero_component$46template._ViewHeroComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_component$46template._ViewHeroComponentHost0.prototype;
  dart.addTypeTests(src__hero_component$46template._ViewHeroComponentHost0);
  dart.setMethodSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_component.HeroComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_component$46template._ViewHeroComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_0_5]: dart.fieldType(src__hero_component.HeroComponent)
  }));
  src__hero_component$46template.viewFactory_HeroComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_component$46template._ViewHeroComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template._HeroComponentNgFactory*/get _HeroComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroComponent()).new("my-hero", dart.fn(src__hero_component$46template.viewFactory_HeroComponentHost0, AppViewAndintToAppViewOfHeroComponent())));
    }
  });
  dart.copyProperties(src__hero_component$46template, {
    get HeroComponentNgFactory() {
      return src__hero_component$46template._HeroComponentNgFactory;
    }
  });
  dart.defineLazy(src__hero_component$46template, {
    /*src__hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_component$46template.initReflector = function() {
    if (dart.test(src__hero_component$46template._visited)) {
      return;
    }
    src__hero_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_component.HeroComponent), src__hero_component$46template.HeroComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  src__hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      return async.async(ListOfHero(), function* getAll() {
        return src__mock_heroes.mockHeroes;
      });
    }
  };
  (src__hero_service.HeroService.new = function() {
  }).prototype = src__hero_service.HeroService.prototype;
  dart.addTypeTests(src__hero_service.HeroService);
  dart.setMethodSignature(src__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__hero.Hero)), [])
  }));
  dart.defineLazy(src__hero_service$46template, {
    /*src__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_service$46template.initReflector = function() {
    if (dart.test(src__hero_service$46template._visited)) {
      return;
    }
    src__hero_service$46template._visited = true;
    src__hero$46template.initReflector();
    src__mock_heroes$46template.initReflector();
  };
  const _heroService = Symbol('_heroService');
  const _getHeroes = Symbol('_getHeroes');
  src__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    [_getHeroes]() {
      return async.async(dart.void, (function* _getHeroes() {
        this.heroes = (yield this[_heroService].getAll());
      }).bind(this));
    }
    ngOnInit() {
      return this[_getHeroes]();
    }
    onSelect(hero) {
      return this.selected = hero;
    }
  };
  (src__hero_list_component.HeroListComponent.new = function(heroService) {
    this[title] = "Tour of Heroes";
    this[heroes] = null;
    this[selected] = null;
    this[_heroService] = heroService;
  }).prototype = src__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__hero_list_component.HeroListComponent);
  const title = Symbol("HeroListComponent.title");
  const heroes = Symbol("HeroListComponent.heroes");
  const selected = Symbol("HeroListComponent.selected");
  src__hero_list_component.HeroListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getMethods(src__hero_list_component.HeroListComponent.__proto__),
    [_getHeroes]: dart.fnType(async.Future$(dart.void), []),
    ngOnInit: dart.fnType(dart.void, []),
    onSelect: dart.fnType(dart.void, [src__hero.Hero])
  }));
  dart.setFieldSignature(src__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__hero_list_component.HeroListComponent.__proto__),
    title: dart.finalFieldType(core.String),
    [_heroService]: dart.finalFieldType(src__hero_service.HeroService),
    heroes: dart.fieldType(ListOfHero()),
    selected: dart.fieldType(src__hero.Hero)
  }));
  dart.defineLazy(src__hero_list_component$46css$46shim, {
    /*src__hero_list_component$46css$46shim.styles*/get styles() {
      return [".selected._ngcontent-%ID%{background-color:#CFD8DC!important;color:white;}.heroes._ngcontent-%ID%{margin:0 0 2em 0;list-style-type:none;padding:0;width:15em;}.heroes._ngcontent-%ID% li._ngcontent-%ID%{cursor:pointer;position:relative;left:0;background-color:#EEE;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px;}.heroes._ngcontent-%ID% li.selected:hover._ngcontent-%ID%{color:white;}.heroes._ngcontent-%ID% li:hover._ngcontent-%ID%{color:#607D8B;background-color:#EEE;left:.1em;}.heroes._ngcontent-%ID% .text._ngcontent-%ID%{position:relative;top:-3px;}.heroes._ngcontent-%ID% .badge._ngcontent-%ID%{display:inline-block;font-size:small;color:white;padding:0.8em 0.7em 0 0.7em;background-color:#607D8B;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px;}"];
    }
  });
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return [src__hero_list_component$46css$46shim.styles];
    }
  });
  const _el_0$ = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _el_4$ = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _HeroComponent_4_5 = Symbol('_HeroComponent_4_5');
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1$ = Symbol('_expr_1');
  let const$1;
  src__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0$] = src__core__linker__app_view.createAndAppend(doc, "h2", parentRenderNode);
      this.addShimE(this[_el_0$]);
      let _text_1 = html.Text.new("Heroes");
      this[_el_0$][$append](_text_1);
      this[_el_2] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", parentRenderNode));
      this[_el_2].className = "heroes";
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_4] = new src__hero_component$46template.ViewHeroComponent0.new(this, 4);
      this[_el_4$] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4$]);
      this.addShimC(html.HtmlElement._check(this[_el_4$]));
      this[_HeroComponent_4_5] = new src__hero_component.HeroComponent.new();
      this[_compView_4].create(this[_HeroComponent_4_5], []);
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      let currVal_1 = _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_HeroComponent_4_5].hero = currVal_1;
        this[_expr_1$] = currVal_1;
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_compView_4];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_el_4$] = null;
    this[_compView_4] = null;
    this[_HeroComponent_4_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    src__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-heroes"));
    let t = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_app/lib/src/hero_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.UListElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_4$]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(src__hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_4_5]: dart.fieldType(src__hero_component.HeroComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  const _el_1$ = Symbol('_el_1');
  const _text_2$ = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  src__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("li");
      this.addShimE(this[_el_0$]);
      this[_el_1$] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0$]);
      this[_el_1$].className = "badge";
      this.addShimE(this[_el_1$]);
      this[_text_2$] = html.Text.new("");
      this[_el_1$][$append](this[_text_2$]);
      let _text_3 = html.Text.new(" ");
      this[_el_0$][$append](_text_3);
      this[_text_4] = html.Text.new("");
      this[_el_0$][$append](this[_text_4]);
      this[_el_0$][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0$]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = src__hero.Hero._check(this.locals[$_get]("$implicit"));
      let currVal_0 = local_hero == _ctx.selected;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_0$]), "selected", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_text_2$][$text] = core.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]("$implicit"));
      this.ctx.onSelect(local_hero);
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0$] = null;
    this[_el_1$] = null;
    this[_text_2$] = null;
    this[_text_4] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2] = null;
    src__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0$]: dart.fieldType(html.Element),
    [_el_1$]: dart.fieldType(html.Element),
    [_text_2$]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _HeroService_0_5 = Symbol('_HeroService_0_5');
  const _HeroListComponent_0_6 = Symbol('_HeroListComponent_0_6');
  src__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView$(src__hero_list_component.HeroListComponent) {
    build() {
      this[_compView_0$] = new src__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_HeroService_0_5] = new src__hero_service.HeroService.new();
      this[_HeroListComponent_0_6] = new src__hero_list_component.HeroListComponent.new(this[_HeroService_0_5]);
      this[_compView_0$].create(this[_HeroListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_HeroListComponent_0_6].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0$];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_HeroService_0_5] = null;
    this[_HeroListComponent_0_6] = null;
    src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_list_component.HeroListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroService_0_5]: dart.fieldType(src__hero_service.HeroService),
    [_HeroListComponent_0_6]: dart.fieldType(src__hero_list_component.HeroListComponent)
  }));
  src__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template._HeroListComponentNgFactory*/get _HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new("my-heroes", dart.fn(src__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppViewOfHeroListComponent())));
    }
  });
  dart.copyProperties(src__hero_list_component$46template, {
    get HeroListComponentNgFactory() {
      return src__hero_list_component$46template._HeroListComponentNgFactory;
    }
  });
  dart.defineLazy(src__hero_list_component$46template, {
    /*src__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__hero_list_component$46template._visited)) {
      return;
    }
    src__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_list_component.HeroListComponent), src__hero_list_component$46template.HeroListComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_component$46template.initReflector();
    src__hero_service$46template.initReflector();
    angular$46template.initReflector();
  };
  src__route_paths.RoutePaths = class RoutePaths extends core.Object {};
  (src__route_paths.RoutePaths.new = function() {
  }).prototype = src__route_paths.RoutePaths.prototype;
  dart.addTypeTests(src__route_paths.RoutePaths);
  dart.defineLazy(src__route_paths.RoutePaths, {
    /*src__route_paths.RoutePaths.heroes*/get heroes() {
      return new src__route_path.RoutePath.new({path: "heroes"});
    }
  });
  src__routes.Routes = class Routes extends core.Object {};
  (src__routes.Routes.new = function() {
  }).prototype = src__routes.Routes.prototype;
  dart.addTypeTests(src__routes.Routes);
  dart.defineLazy(src__routes.Routes, {
    /*src__routes.Routes.heroes*/get heroes() {
      return src__route_definition.RouteDefinition.new({routePath: src__route_paths.RoutePaths.heroes, component: src__hero_list_component$46template.HeroListComponentNgFactory});
    },
    /*src__routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([src__routes.Routes.heroes]);
    }
  });
  dart.trackLibraries("packages/angular_app/src/hero.ddc", {
    "package:angular_app/src/hero.dart": src__hero,
    "package:angular_app/src/mock_heroes.dart": src__mock_heroes,
    "package:angular_app/src/hero.template.dart": src__hero$46template,
    "package:angular_app/src/mock_heroes.template.dart": src__mock_heroes$46template,
    "package:angular_app/src/hero_component.dart": src__hero_component,
    "package:angular_app/src/hero_component.template.dart": src__hero_component$46template,
    "package:angular_app/src/hero_service.dart": src__hero_service,
    "package:angular_app/src/hero_service.template.dart": src__hero_service$46template,
    "package:angular_app/src/hero_list_component.dart": src__hero_list_component,
    "package:angular_app/src/hero_list_component.css.shim.dart": src__hero_list_component$46css$46shim,
    "package:angular_app/src/hero_list_component.template.dart": src__hero_list_component$46template,
    "package:angular_app/src/route_paths.dart": src__route_paths,
    "package:angular_app/src/routes.dart": src__routes
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart","mock_heroes.dart","hero.template.dart","mock_heroes.template.dart","hero_component.dart","hero_component.template.dart","hero_service.dart","hero_service.template.dart","hero_list_component.dart","hero_list_component.css.shim.dart","hero_list_component.template.dart","route_paths.dart","routes.dart"],"names":[],"mappings":"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","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero,
    src__mock_heroes: src__mock_heroes,
    src__hero$46template: src__hero$46template,
    src__mock_heroes$46template: src__mock_heroes$46template,
    src__hero_component: src__hero_component,
    src__hero_component$46template: src__hero_component$46template,
    src__hero_service: src__hero_service,
    src__hero_service$46template: src__hero_service$46template,
    src__hero_list_component: src__hero_list_component,
    src__hero_list_component$46css$46shim: src__hero_list_component$46css$46shim,
    src__hero_list_component$46template: src__hero_list_component$46template,
    src__route_paths: src__route_paths,
    src__routes: src__routes
  };
});

//# sourceMappingURL=hero.ddc.js.map
