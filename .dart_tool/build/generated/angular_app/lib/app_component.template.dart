// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'src/hero_service.dart';
import 'src/routes.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/hero_service.template.dart' as _ref2;
import 'src/routes.template.dart' as _ref3;
import 'package:angular_app/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import4;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import7;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import11;
import 'package:angular/src/runtime.dart' as import12;
import 'package:angular/angular.dart';
import 'package:angular_router/src/directives/router_link_directive.dart' as import14;
import 'package:angular_router/src/router/router.dart' as import15;
import 'package:angular_router/src/location/location.dart' as import16;
import 'package:angular_router/src/router/router_outlet_token.dart' as import17;
import 'package:angular_router/src/router_hook.dart' as import18;
import 'src/route_paths.dart' as import19;
import 'src/routes.dart' as import20;
import 'src/hero_service.dart' as import21;
import 'package:http/src/client.dart' as import22;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  import3.Element _el_2;
  import3.AnchorElement _el_3;
  import4.RouterLinkNgCd _RouterLink_3_5;
  import5.RouterLinkActive _RouterLinkActive_3_6;
  import3.AnchorElement _el_6;
  import4.RouterLinkNgCd _RouterLink_6_5;
  import5.RouterLinkActive _RouterLinkActive_6_6;
  import3.Element _el_8;
  ViewContainer _appEl_8;
  import7.RouterOutlet _RouterOutlet_8_8;
  String _expr_0;
  String _expr_2;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('my-app');
    _renderType ??= import11.appViewUtils.createRenderType((import12.isDevMode ? 'asset:angular_app/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    _text_1 = import3.Text((ctx.title ?? ''));
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'nav', parentRenderNode);
    addShimE(_el_2);
    _el_3 = createAndAppend(doc, 'a', _el_2);
    addShimC(_el_3);
    _RouterLink_3_5 = import4.RouterLinkNgCd(import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_3));
    _RouterLinkActive_3_6 = import5.RouterLinkActive(_el_3, parentView.injectorGet(import15.Router, viewData.parentIndex));
    import3.Text _text_4 = import3.Text('Dashboard');
    _el_3.append(_text_4);
    _RouterLinkActive_3_6.links = [_RouterLink_3_5.instance];
    import3.Text _text_5 = import3.Text(' ');
    _el_2.append(_text_5);
    _el_6 = createAndAppend(doc, 'a', _el_2);
    addShimC(_el_6);
    _RouterLink_6_5 = import4.RouterLinkNgCd(import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_6));
    _RouterLinkActive_6_6 = import5.RouterLinkActive(_el_6, parentView.injectorGet(import15.Router, viewData.parentIndex));
    import3.Text _text_7 = import3.Text('Heroes');
    _el_6.append(_text_7);
    _RouterLinkActive_6_6.links = [_RouterLink_6_5.instance];
    _el_8 = createAndAppend(doc, 'router-outlet', parentRenderNode);
    addShimE(_el_8);
    _appEl_8 = ViewContainer(8, null, this, _el_8);
    _RouterOutlet_8_8 = import7.RouterOutlet(parentView.injectorGet(import17.RouterOutletToken, viewData.parentIndex, null), _appEl_8, parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import18.RouterHook, viewData.parentIndex, null));
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    _el_6.addEventListener('click', eventHandler1(_RouterLink_6_5.instance.onClick));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = import19.RoutePaths.dashboard.toUrl();
    if (import11.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_3_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_RouterLinkActive_3_6.routerLinkActive = 'active');
    }
    final currVal_2 = import19.RoutePaths.heroes.toUrl();
    if (import11.checkBinding(_expr_2, currVal_2)) {
      _RouterLink_6_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      _RouterLinkActive_6_6.routerLinkActive = 'active';
      if (!identical(import20.Routes.all, null)) {
        (_RouterOutlet_8_8.routes = import20.Routes.all);
      }
    }
    if ((!import11.AppViewUtils.throwOnChanges && firstCheck)) {
      _RouterOutlet_8_8.ngOnInit();
    }
    _appEl_8.detectChangesInNestedViews();
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    _RouterLink_6_5.detectHostChanges(this, _el_6);
    if (!import11.AppViewUtils.throwOnChanges) {
      if (firstCheck) {
        _RouterLinkActive_3_6.ngAfterViewInit();
        _RouterLinkActive_6_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_8?.destroyNestedViews();
    _RouterLink_3_5.instance.ngOnDestroy();
    _RouterLinkActive_3_6.ngOnDestroy();
    _RouterLink_6_5.instance.ngOnDestroy();
    _RouterLinkActive_6_6.ngOnDestroy();
    _RouterOutlet_8_8.ngOnDestroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  import21.HeroService __HeroService_0_6;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import21.HeroService get _HeroService_0_6 {
    if ((this.__HeroService_0_6 == null)) {
      (__HeroService_0_6 = import21.HeroService(this.injectorGet(import22.Client, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_6;
  }

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
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import21.HeroService) && (0 == nodeIndex))) {
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
