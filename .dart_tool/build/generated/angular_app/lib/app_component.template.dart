// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'src/hero.dart';
import 'src/mock_heroes.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_forms/angular_forms.template.dart' as _ref1;
import 'src/hero.template.dart' as _ref2;
import 'src/mock_heroes.template.dart' as _ref3;
import 'package:angular_app/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'src/hero.dart' as import14;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import16;
import 'package:angular_forms/src/directives/ng_model.dart' as import17;
import 'package:angular/src/core/di/opaque_token.dart' as import18;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import19;
import 'package:angular_forms/src/directives/ng_control.dart' as import20;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.UListElement _el_5;
  ViewContainer _appEl_6;
  import5.NgFor _NgFor_6_9;
  ViewContainer _appEl_7;
  NgIf _NgIf_7_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import10.appViewUtils.createRenderType((import11.isDevMode ? 'asset:angular_app/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h1', _el_0);
    addShimE(_el_1);
    _text_2 = import3.Text((ctx.title ?? ''));
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_3);
    import3.Text _text_4 = import3.Text('Heroes');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'ul', _el_0);
    _el_5.className = 'heroes';
    addShimC(_el_5);
    final _anchor_6 = createViewContainerAnchor();
    _el_5.append(_anchor_6);
    _appEl_6 = ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = TemplateRef(_appEl_6, viewFactory_AppComponent1);
    _NgFor_6_9 = import5.NgFor(_appEl_6, _TemplateRef_6_8);
    final _anchor_7 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_7);
    _appEl_7 = ViewContainer(7, null, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = TemplateRef(_appEl_7, viewFactory_AppComponent2);
    _NgIf_7_9 = NgIf(_appEl_7, _TemplateRef_7_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    final currVal_0 = _ctx.heroes;
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _NgFor_6_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if (!import10.AppViewUtils.throwOnChanges) {
      _NgFor_6_9.ngDoCheck();
    }
    _NgIf_7_9.ngIf = (_ctx.selected != null);
    _appEl_6.detectChangesInNestedViews();
    _appEl_7.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _appEl_7?.destroyNestedViews();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _el_1 = createSpanAndAppend(doc, _el_0);
    _el_1.className = 'badge';
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    import3.Text _text_3 = import3.Text(' ');
    _el_0.append(_text_3);
    _text_4 = import3.Text('');
    _el_0.append(_text_4);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import14.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_hero.id);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(local_hero.name);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_0_0($event) {
    final import14.Hero local_hero = locals['\$implicit'];
    ctx.onSelect(local_hero);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.DivElement _el_3;
  import3.Element _el_4;
  import3.Text _text_6;
  import3.DivElement _el_7;
  import3.Element _el_8;
  import3.InputElement _el_11;
  import15.DefaultValueAccessor _DefaultValueAccessor_11_5;
  List<import16.ControlValueAccessor<dynamic>> _NgValueAccessor_11_6;
  import17.NgModel _NgModel_11_7;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent2(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_1);
    _text_2 = import3.Text('');
    _el_1.append(_text_2);
    _el_3 = createDivAndAppend(doc, _el_0);
    addShimC(_el_3);
    _el_4 = createAndAppend(doc, 'label', _el_3);
    addShimE(_el_4);
    import3.Text _text_5 = import3.Text('id:');
    _el_4.append(_text_5);
    _text_6 = import3.Text('');
    _el_3.append(_text_6);
    _el_7 = createDivAndAppend(doc, _el_0);
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'label', _el_7);
    addShimE(_el_8);
    import3.Text _text_9 = import3.Text('name:');
    _el_8.append(_text_9);
    import3.Text _text_10 = import3.Text(' ');
    _el_7.append(_text_10);
    _el_11 = createAndAppend(doc, 'input', _el_7);
    createAttr(_el_11, 'placeholder', 'name');
    addShimC(_el_11);
    _DefaultValueAccessor_11_5 = import15.DefaultValueAccessor(_el_11);
    _NgValueAccessor_11_6 = [_DefaultValueAccessor_11_5];
    _NgModel_11_7 = import17.NgModel(null, _NgValueAccessor_11_6);
    _el_11.addEventListener('blur', eventHandler0(_DefaultValueAccessor_11_5.touchHandler));
    _el_11.addEventListener('input', eventHandler1(_handle_input_11_2));
    final subscription_0 = _NgModel_11_7.update.listen(eventHandler1(_handle_ngModelChange_11_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import18.MultiToken<import19.ControlValueAccessor>('NgValueAccessor')) && (11 == nodeIndex))) {
      return _NgValueAccessor_11_6;
    }
    if (((identical(token, import17.NgModel) || identical(token, import20.NgControl)) && (11 == nodeIndex))) {
      return _NgModel_11_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_11_7.model = _ctx.selected.name;
    _NgModel_11_7.ngAfterChanges();
    if ((!import10.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_11_7.ngOnInit();
    }
    final currVal_0 = import10.interpolate0(_ctx.selected.name);
    if (import10.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(_ctx.selected.id);
    if (import10.checkBinding(_expr_1, currVal_1)) {
      _text_6.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_ngModelChange_11_0($event) {
    ctx.selected.name = $event;
  }

  void _handle_input_11_2($event) {
    _DefaultValueAccessor_11_5.handleChange($event.target.value);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponent2(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
