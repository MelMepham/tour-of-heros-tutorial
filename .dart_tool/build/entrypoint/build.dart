import 'package:build_runner/build_runner.dart' as _i1;
import 'package:angular/builder.dart' as _i2;
import 'package:build_test/builder.dart' as _i3;
import 'package:build_config/build_config.dart' as _i4;
import 'package:build_modules/builders.dart' as _i5;
import 'package:build_web_compilers/builders.dart' as _i6;
import 'package:build/build.dart' as _i7;
import 'dart:isolate' as _i8;

final _builders = <_i1.BuilderApplication>[
  _i1.apply(
      'angular|angular',
      [_i2.templatePlaceholder, _i2.templateCompiler, _i2.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular|placeholder_cleanup',
        'angular|component_source_cleanup'
      ]),
  _i1.apply(
      'build_test|test_bootstrap',
      [_i3.debugIndexBuilder, _i3.debugTestBuilder, _i3.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i4.InputSet(include: const ['test/**'])),
  _i1.apply(
      'build_modules|modules',
      [
        _i5.moduleLibraryBuilder,
        _i5.metaModuleBuilder,
        _i5.metaModuleCleanBuilder,
        _i5.moduleBuilder,
        _i5.unlinkedSummaryBuilder,
        _i5.linkedSummaryBuilder
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i6.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_web_compilers|dart_source_cleanup']),
  _i1.apply('build_web_compilers|entrypoint', [_i6.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i4.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i7.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: new _i7.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('angular|placeholder_cleanup', _i2.placeholderCleanup,
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'angular|component_source_cleanup', _i2.componentSourceCleanup,
      defaultReleaseOptions: new _i7.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet(include: const ['lib/**'])),
  _i1.applyPostProcess('build_modules|module_cleanup', _i5.moduleCleanup,
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i6.dartSourceCleanup,
      defaultReleaseOptions: new _i7.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i4.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i6.dart2JsArchiveExtractor,
      defaultReleaseOptions: new _i7.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i4.InputSet())
];
main(List<String> args, [_i8.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
