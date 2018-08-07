define(['dart_sdk', 'packages/angular_app/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_forms/src/directives', 'packages/angular_app/app_component', 'packages/angular_app/src/hero', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_app/src/hero.template', 'packages/angular_app/src/mock_heroes.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, directives, app_component, hero, angular, angular_forms, hero$, mock_heroes) {
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
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__directives__default_value_accessor = directives.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const app_component$ = app_component.app_component;
  const src__hero = hero.src__hero;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const src__hero$46template = hero$.src__hero$46template;
  const src__mock_heroes$46template = mock_heroes.src__mock_heroes$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _el_3 = Symbol('_el_3');
  const _text_4 = Symbol('_text_4');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _text_8 = Symbol('_text_8');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_13 = Symbol('_el_13');
  const _DefaultValueAccessor_13_5 = Symbol('_DefaultValueAccessor_13_5');
  const _NgValueAccessor_13_6 = Symbol('_NgValueAccessor_13_6');
  const _NgModel_13_7 = Symbol('_NgModel_13_7');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _appEl_18 = Symbol('_appEl_18');
  const _NgFor_18_9 = Symbol('_NgFor_18_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  const _handle_input_13_2 = Symbol('_handle_input_13_2');
  const _handle_ngModelChange_13_0 = Symbol('_handle_ngModelChange_13_0');
  let const$;
  let const$0;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "h1", this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new(this.ctx.title != null ? this.ctx.title : "");
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_0]);
      this.addShimE(this[_el_3]);
      this[_text_4] = html.Text.new("");
      this[_el_3][$append](this[_text_4]);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_5]);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_5]);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new("id:");
      this[_el_6][$append](_text_7);
      this[_text_8] = html.Text.new("");
      this[_el_5][$append](this[_text_8]);
      this[_el_9] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_9]);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_9]);
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new("name:");
      this[_el_10][$append](_text_11);
      let _text_12 = html.Text.new(" ");
      this[_el_9][$append](_text_12);
      this[_el_13] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", this[_el_9]));
      this.createAttr(this[_el_13], "placeholder", "name");
      this.addShimC(this[_el_13]);
      this[_DefaultValueAccessor_13_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_13]);
      this[_NgValueAccessor_13_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_13_5]]);
      this[_NgModel_13_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_13_6]);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_14]);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_14]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new("Heroes");
      this[_el_15][$append](_text_16);
      this[_el_17] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_14]));
      this[_el_17].className = "heroes";
      this.addShimC(this[_el_17]);
      let _anchor_18 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_17][$append](_anchor_18);
      this[_appEl_18] = new src__core__linker__view_container.ViewContainer.new(18, 17, this, _anchor_18);
      let _TemplateRef_18_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_18], dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent()));
      this[_NgFor_18_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_18], _TemplateRef_18_8);
      this[_el_13][$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_13_5], 'touchHandler')));
      this[_el_13][$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_13_2)));
      let subscription_0 = this[_NgModel_13_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_13_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new("NgValueAccessor")))) && 13 === nodeIndex) {
        return this[_NgValueAccessor_13_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 13 === nodeIndex) {
        return this[_NgModel_13_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_13_7].model = _ctx.selected.name;
      this[_NgModel_13_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_13_7].ngOnInit();
      }
      let currVal_3 = _ctx.heroes;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NgFor_18_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_18_9].ngDoCheck();
      }
      this[_appEl_18].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_8][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    destroyInternal() {
      let t = this[_appEl_18];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_ngModelChange_13_0]($event) {
      this.ctx.selected.name = core.String._check($event);
    }
    [_handle_input_13_2]($event) {
      this[_DefaultValueAccessor_13_5].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_text_4] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_text_8] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_13] = null;
    this[_DefaultValueAccessor_13_5] = null;
    this[_NgValueAccessor_13_6] = null;
    this[_NgModel_13_7] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_appEl_18] = null;
    this[_NgFor_18_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
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
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_13_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_13_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_el_9]: dart.fieldType(html.DivElement),
    [_el_10]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_13_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_13_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_13_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_el_14]: dart.fieldType(html.DivElement),
    [_el_15]: dart.fieldType(html.Element),
    [_el_17]: dart.fieldType(html.UListElement),
    [_appEl_18]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_18_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
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
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]("li");
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = "badge";
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(" ");
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new("");
      this[_el_0][$append](this[_text_4]);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__hero.Hero._check(this.locals[$_get]("$implicit"));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]("$implicit"));
      this.ctx.onSelect(local_hero);
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
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
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
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
    angular_forms$46template.initReflector();
    src__hero$46template.initReflector();
    src__mock_heroes$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_app/app_component.template.ddc", {
    "package:angular_app/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
