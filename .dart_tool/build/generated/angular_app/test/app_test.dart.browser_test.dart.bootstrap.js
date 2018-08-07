(function() {
var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/$sdk/dev_compiler/amd/dart_sdk",
 "packages/angular/angular": "packages/angular/angular.ddc",
 "packages/angular/angular.template": "packages/angular/angular.template.ddc",
 "packages/angular/core": "packages/angular/core.ddc",
 "packages/angular/core.template": "packages/angular/core.template.ddc",
 "packages/angular/di": "packages/angular/di.ddc",
 "packages/angular/di.template": "packages/angular/di.template.ddc",
 "packages/angular/experimental": "packages/angular/experimental.ddc",
 "packages/angular/src/bootstrap/modules": "packages/angular/src/bootstrap/modules.ddc",
 "packages/angular/src/bootstrap/run.template": "packages/angular/src/bootstrap/run.template.ddc",
 "packages/angular/src/core/application_tokens": "packages/angular/src/core/application_tokens.ddc",
 "packages/angular/src/core/application_tokens.template": "packages/angular/src/core/application_tokens.template.ddc",
 "packages/angular/src/core/change_detection/change_detection": "packages/angular/src/core/change_detection/change_detection.ddc",
 "packages/angular/src/core/change_detection/change_detection.template": "packages/angular/src/core/change_detection/change_detection.template.ddc",
 "packages/angular/src/core/change_detection/directive_change_detector": "packages/angular/src/core/change_detection/directive_change_detector.ddc",
 "packages/angular/src/core/linker/view_type": "packages/angular/src/core/linker/view_type.ddc",
 "packages/angular/src/core/zone/ng_zone": "packages/angular/src/core/zone/ng_zone.ddc",
 "packages/angular_app/app_component": "packages/angular_app/app_component.ddc",
 "packages/angular_app/app_component.css.shim": "packages/angular_app/app_component.css.shim.ddc",
 "packages/angular_app/app_component.template": "packages/angular_app/app_component.template.ddc",
 "packages/angular_app/src/hero": "packages/angular_app/src/hero.ddc",
 "packages/angular_app/src/hero.template": "packages/angular_app/src/hero.template.ddc",
 "packages/angular_app/src/mock_heroes": "packages/angular_app/src/mock_heroes.ddc",
 "packages/angular_app/src/mock_heroes.template": "packages/angular_app/src/mock_heroes.template.ddc",
 "packages/angular_forms/angular_forms": "packages/angular_forms/angular_forms.ddc",
 "packages/angular_forms/angular_forms.template": "packages/angular_forms/angular_forms.template.ddc",
 "packages/angular_forms/src/directives": "packages/angular_forms/src/directives.ddc",
 "packages/angular_test/angular_test": "packages/angular_test/angular_test.ddc",
 "packages/angular_test/src/bootstrap": "packages/angular_test/src/bootstrap.ddc",
 "packages/angular_test/src/frontend": "packages/angular_test/src/frontend.ddc",
 "packages/async/async": "packages/async/async.ddc",
 "packages/boolean_selector/boolean_selector": "packages/boolean_selector/boolean_selector.ddc",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/http/http": "packages/http/http.ddc",
 "packages/http/src/base_client": "packages/http/src/base_client.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/js/js": "packages/js/js.ddc",
 "packages/js/js_util": "packages/js/js_util.ddc",
 "packages/logging/logging": "packages/logging/logging.ddc",
 "packages/matcher/matcher": "packages/matcher/matcher.ddc",
 "packages/matcher/src/core_matchers": "packages/matcher/src/core_matchers.ddc",
 "packages/meta/dart2js": "packages/meta/dart2js.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/package_config/packages_file": "packages/package_config/packages_file.ddc",
 "packages/package_config/src/util": "packages/package_config/src/util.ddc",
 "packages/package_resolver/package_resolver": "packages/package_resolver/package_resolver.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/pool/pool": "packages/pool/pool.ddc",
 "packages/pub_semver/pub_semver": "packages/pub_semver/pub_semver.ddc",
 "packages/source_map_stack_trace/source_map_stack_trace": "packages/source_map_stack_trace/source_map_stack_trace.ddc",
 "packages/source_maps/builder": "packages/source_maps/builder.ddc",
 "packages/source_maps/printer": "packages/source_maps/printer.ddc",
 "packages/source_maps/refactor": "packages/source_maps/refactor.ddc",
 "packages/source_maps/source_maps": "packages/source_maps/source_maps.ddc",
 "packages/source_maps/src/source_map_span": "packages/source_maps/src/source_map_span.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/stack_trace/stack_trace": "packages/stack_trace/stack_trace.ddc",
 "packages/stream_channel/stream_channel": "packages/stream_channel/stream_channel.ddc",
 "packages/string_scanner/string_scanner": "packages/string_scanner/string_scanner.ddc",
 "packages/term_glyph/term_glyph": "packages/term_glyph/term_glyph.ddc",
 "packages/test/bootstrap/browser": "packages/test/bootstrap/browser.ddc",
 "packages/test/src/backend/closed_exception": "packages/test/src/backend/closed_exception.ddc",
 "packages/test/src/runner/plugin/remote_platform_helpers": "packages/test/src/runner/plugin/remote_platform_helpers.ddc",
 "packages/test/test": "packages/test/test.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/typed_data/typed_data": "packages/typed_data/typed_data.ddc",
 "test/app_test": "app_test.ddc",
 "test/app_test.dart.browser_test": "app_test.dart.browser_test.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  // dartdevc only strips the final extension when adding modules to source
  // maps, so we need to do the same.
  if (moduleName != 'dart_sdk') {
    moduleName += '.ddc';
  }
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});
require(["test/app_test.dart.browser_test", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.ignoreWhitelistedErrors(false);
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
var baseUrl = (function () {
  // Attempt to detect base url using <base href> html tag
  // base href should start with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute("href").startsWith("/")){
      return el[0].href;
    }
  }
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  var baseUrl;
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (window.postMessage) {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  app.app_test$46dart$46browser_test.main();
});
})();