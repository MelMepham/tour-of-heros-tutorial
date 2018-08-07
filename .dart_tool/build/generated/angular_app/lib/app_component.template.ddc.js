define(['dart_sdk', 'packages/angular_app/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_app/app_component', 'packages/angular_app/src/hero', 'packages/angular_forms/src/directives', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, app_component, hero, directives, angular, angular_forms) {
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
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const app_component$ = app_component.app_component;
  const src__hero = hero.src__hero;
  const src__directives__default_value_accessor = directives.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = directives.src__directives__control_value_accessor;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__hero$46template = Object.create(_root);
  const src__mock_heroes$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
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
  const _el_5 = Symbol('_el_5');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgFor_6_9 = Symbol('_NgFor_6_9');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
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
      let _text_4 = html.Text.new("Heroes");
      this[_el_3][$append](_text_4);
      this[_el_5] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, "ul", this[_el_0]));
      this[_el_5].className = "heroes";
      this.addShimC(this[_el_5]);
      let _anchor_6 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_5][$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent()));
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, null, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(app_component$46template.viewFactory_AppComponent2, AppViewAndintToAppViewOfAppComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_6_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_6_9].ngDoCheck();
      }
      this[_NgIf_7_9].ngIf = _ctx.selected != null;
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_7];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0] = null;
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
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.UListElement),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
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
  const _text_4 = Symbol('_text_4');
  const _expr_1 = Symbol('_expr_1');
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
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _el_11 = Symbol('_el_11');
  const _DefaultValueAccessor_11_5 = Symbol('_DefaultValueAccessor_11_5');
  const _NgValueAccessor_11_6 = Symbol('_NgValueAccessor_11_6');
  const _NgModel_11_7 = Symbol('_NgModel_11_7');
  const _handle_input_11_2 = Symbol('_handle_input_11_2');
  const _handle_ngModelChange_11_0 = Symbol('_handle_ngModelChange_11_0');
  let const$0;
  app_component$46template._ViewAppComponent2 = class _ViewAppComponent2 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]("div"));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, "h2", this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new("");
      this[_el_1][$append](this[_text_2]);
      this[_el_3] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_3]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new("id:");
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new("");
      this[_el_3][$append](this[_text_6]);
      this[_el_7] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_7]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, "label", this[_el_7]);
      this.addShimE(this[_el_8]);
      let _text_9 = html.Text.new("name:");
      this[_el_8][$append](_text_9);
      let _text_10 = html.Text.new(" ");
      this[_el_7][$append](_text_10);
      this[_el_11] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, "input", this[_el_7]));
      this.createAttr(this[_el_11], "placeholder", "name");
      this.addShimC(this[_el_11]);
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
      this[_NgModel_11_7].model = _ctx.selected.name;
      this[_NgModel_11_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_11_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.name);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.selected.id);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_11_0]($event) {
      this.ctx.selected.name = core.String._check($event);
    }
    [_handle_input_11_2]($event) {
      this[_DefaultValueAccessor_11_5].handleChange(core.String._check(dart.dload(dart.dload($event, 'target'), 'value')));
    }
  };
  (app_component$46template._ViewAppComponent2.new = function(parentView, parentIndex) {
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
    app_component$46template._ViewAppComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent2.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent2);
  dart.setMethodSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent2.__proto__),
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
  app_component$46template.viewFactory_AppComponent2 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent2.new(parentView, parentIndex);
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
  dart.trackLibraries("packages/angular_app/app_component.template.ddc", {
    "package:angular_app/app_component.template.dart": app_component$46template,
    "package:angular_app/src/hero.template.dart": src__hero$46template,
    "package:angular_app/src/mock_heroes.template.dart": src__mock_heroes$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/hero.template.dart","src/mock_heroes.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__hero$46template: src__hero$46template,
    src__mock_heroes$46template: src__mock_heroes$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
