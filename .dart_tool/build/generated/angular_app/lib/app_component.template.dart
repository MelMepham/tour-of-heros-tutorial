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
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import4;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import5;
import 'package:angular_forms/src/directives/ng_model.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import8;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/di/opaque_token.dart' as import16;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import17;
import 'package:angular_forms/src/directives/ng_control.dart' as import18;
import 'src/hero.dart' as import19;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Element _el_3;
  import3.Text _text_4;
  import3.DivElement _el_5;
  import3.Element _el_6;
  import3.Text _text_8;
  import3.DivElement _el_9;
  import3.Element _el_10;
  import3.InputElement _el_13;
  import4.DefaultValueAccessor _DefaultValueAccessor_13_5;
  List<import5.ControlValueAccessor<dynamic>> _NgValueAccessor_13_6;
  import6.NgModel _NgModel_13_7;
  import3.DivElement _el_14;
  import3.Element _el_15;
  import3.UListElement _el_17;
  ViewContainer _appEl_18;
  import8.NgFor _NgFor_18_9;
  var _expr_0;
  var _expr_1;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import12.appViewUtils.createRenderType((import13.isDevMode ? 'asset:angular_app/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
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
    _text_2 = new import3.Text((ctx.title ?? ''));
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_3);
    _text_4 = new import3.Text('');
    _el_3.append(_text_4);
    _el_5 = createDivAndAppend(doc, _el_0);
    addShimC(_el_5);
    _el_6 = createAndAppend(doc, 'label', _el_5);
    addShimE(_el_6);
    import3.Text _text_7 = new import3.Text('id:');
    _el_6.append(_text_7);
    _text_8 = new import3.Text('');
    _el_5.append(_text_8);
    _el_9 = createDivAndAppend(doc, _el_0);
    addShimC(_el_9);
    _el_10 = createAndAppend(doc, 'label', _el_9);
    addShimE(_el_10);
    import3.Text _text_11 = new import3.Text('name:');
    _el_10.append(_text_11);
    import3.Text _text_12 = new import3.Text(' ');
    _el_9.append(_text_12);
    _el_13 = createAndAppend(doc, 'input', _el_9);
    createAttr(_el_13, 'placeholder', 'name');
    addShimC(_el_13);
    _DefaultValueAccessor_13_5 = new import4.DefaultValueAccessor(_el_13);
    _NgValueAccessor_13_6 = [_DefaultValueAccessor_13_5];
    _NgModel_13_7 = new import6.NgModel(null, _NgValueAccessor_13_6);
    _el_14 = createDivAndAppend(doc, _el_0);
    addShimC(_el_14);
    _el_15 = createAndAppend(doc, 'h2', _el_14);
    addShimE(_el_15);
    import3.Text _text_16 = new import3.Text('Heroes');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'ul', _el_14);
    _el_17.className = 'heroes';
    addShimC(_el_17);
    final _anchor_18 = createViewContainerAnchor();
    _el_17.append(_anchor_18);
    _appEl_18 = new ViewContainer(18, 17, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = new TemplateRef(_appEl_18, viewFactory_AppComponent1);
    _NgFor_18_9 = new import8.NgFor(_appEl_18, _TemplateRef_18_8);
    _el_13.addEventListener('blur', eventHandler0(_DefaultValueAccessor_13_5.touchHandler));
    _el_13.addEventListener('input', eventHandler1(_handle_input_13_2));
    final subscription_0 = _NgModel_13_7.update.listen(eventHandler1(_handle_ngModelChange_13_0));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import16.MultiToken<import17.ControlValueAccessor>('NgValueAccessor')) && (13 == nodeIndex))) {
      return _NgValueAccessor_13_6;
    }
    if (((identical(token, import6.NgModel) || identical(token, import18.NgControl)) && (13 == nodeIndex))) {
      return _NgModel_13_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_13_7.model = _ctx.selected.name;
    _NgModel_13_7.ngAfterChanges();
    if ((!import12.AppViewUtils.throwOnChanges && firstCheck)) {
      _NgModel_13_7.ngOnInit();
    }
    final currVal_3 = _ctx.heroes;
    if (import12.checkBinding(_expr_3, currVal_3)) {
      _NgFor_18_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if (!import12.AppViewUtils.throwOnChanges) {
      _NgFor_18_9.ngDoCheck();
    }
    _appEl_18.detectChangesInNestedViews();
    final currVal_0 = import12.interpolate0(_ctx.selected.name);
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _text_4.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import12.interpolate0(_ctx.selected.id);
    if (import12.checkBinding(_expr_1, currVal_1)) {
      _text_8.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  @override
  void destroyInternal() {
    _appEl_18?.destroyNestedViews();
  }

  void _handle_ngModelChange_13_0($event) {
    ctx.selected.name = $event;
  }

  void _handle_input_13_2($event) {
    _DefaultValueAccessor_13_5.handleChange($event.target.value);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Element _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewAppComponent1(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _text_2 = new import3.Text('');
    _el_1.append(_text_2);
    import3.Text _text_3 = new import3.Text(' ');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import19.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import12.interpolate0(local_hero.id);
    if (import12.checkBinding(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import12.interpolate0(local_hero.name);
    if (import12.checkBinding(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_0_0($event) {
    final import19.Hero local_hero = locals['\$implicit'];
    ctx.onSelect(local_hero);
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewAppComponent1(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = new import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef(0, this, rootEl, _AppComponent_0_5);
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
  return new _ViewAppComponentHost0(parentView, parentIndex);
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
