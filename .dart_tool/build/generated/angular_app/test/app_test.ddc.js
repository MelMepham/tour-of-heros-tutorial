define(['dart_sdk', 'packages/angular_app/app_component.template', 'packages/angular_app/app_component', 'packages/angular_test/src/bootstrap', 'packages/test/test'], function(dart_sdk, app_component, app_component$, bootstrap, test) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46template = app_component.app_component$46template;
  const app_component$0 = app_component$.app_component;
  const src__frontend__bed = bootstrap.src__frontend__bed;
  const test$ = test.test;
  const _root = Object.create(null);
  const app_test = Object.create(_root);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  app_test.main = function() {
    let testBed = src__frontend__bed.NgTestBed.forComponent(app_component$0.AppComponent, app_component$46template.AppComponentNgFactory);
    let fixture = null;
    test$.setUp(dart.fn(() => async.async(core.Null, function*() {
      fixture = (yield testBed.create());
    }), VoidToFutureOfNull()));
    test$.tearDown(dart.fn(src__frontend__bed.disposeAnyRunningTest, VoidToFutureOfvoid()));
  };
  dart.trackLibraries("test/app_test.ddc", {
    "app_test.dart": app_test
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart"],"names":[],"mappings":";;;;;;QAS2C,wBAAE;;;;;;;;;;;AAD3C,QAAM,UACF,4BAAS,aAAa,+BAAe,AAAG,wBAAD,sBAAsB;AACjE,QAA4B;AAE5B,eAAK,CAAC;AACJ,aAAO,IAAG,MAAM,OAAO,OAAO;IAChC;AAEA,kBAAQ,CAAC,uEAAqB;EAehC","file":"app_test.ddc.js"}');
  // Exports:
  return {
    app_test: app_test
  };
});

//# sourceMappingURL=app_test.ddc.js.map
