// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'src/hero_service.dart';
import 'src/hero_list_component.dart';
import 'src/routes.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/hero_list_component.template.dart' as _ref2;
import 'src/hero_service.template.dart' as _ref3;
import 'src/routes.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular_router/src/router/router_outlet_token.dart' as import11;
import 'package:angular_router/src/router/router.dart' as import12;
import 'package:angular_router/src/router_hook.dart' as import13;
import 'src/routes.dart' as import14;
import 'src/hero_service.dart' as import15;

final List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  import2.Element _el_2;
  ViewContainer _appEl_2;
  import4.RouterOutlet _RouterOutlet_2_8;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import8.appViewUtils.createRenderType((import9.isDevMode ? 'asset:angular_app/lib/app_component.dart' : null), ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    _text_1 = import2.Text((ctx.title ?? ''));
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    _appEl_2 = ViewContainer(2, null, this, _el_2);
    _RouterOutlet_2_8 = import4.RouterOutlet(parentView.injectorGet(import11.RouterOutletToken, viewData.parentIndex, null), _appEl_2, parentView.injectorGet(import12.Router, viewData.parentIndex), parentView.injectorGet(import13.RouterHook, viewData.parentIndex, null));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(import14.Routes.all, null)) {
        (_RouterOutlet_2_8.routes = import14.Routes.all);
      }
    }
    if ((!import8.AppViewUtils.throwOnChanges && firstCheck)) {
      _RouterOutlet_2_8.ngOnInit();
    }
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_2?.destroyNestedViews();
    _RouterOutlet_2_8.ngOnDestroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import1.AppComponent> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_5;
  import15.HeroService __HeroService_0_6;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import15.HeroService get _HeroService_0_6 {
    if ((this.__HeroService_0_6 == null)) {
      (__HeroService_0_6 = import15.HeroService());
    }
    return this.__HeroService_0_6;
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import1.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_6;
    }
    return notFoundResult;
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

AppView<import1.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import1.AppComponent> get AppComponentNgFactory {
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
  _ref4.initReflector();
}
