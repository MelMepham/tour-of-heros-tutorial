import 'package:build_runner/build_runner.dart' as _i1;
import 'package:source_gen/builder.dart' as _i2;
import 'package:angular/builder.dart' as _i3;
import 'package:build_test/builder.dart' as _i4;
import 'package:build_config/build_config.dart' as _i5;
import 'package:build_modules/builders.dart' as _i6;
import 'package:build_web_compilers/builders.dart' as _i7;
import 'package:build/build.dart' as _i8;
import 'dart:isolate' as _i9;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('source_gen|combining_builder', [_i2.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen|part_cleanup']),
  _i1.apply(
      'angular|angular',
      [_i3.templatePlaceholder, _i3.templateCompiler, _i3.stylesheetCompiler],
      _i1.toDependentsOf('angular'),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'angular|placeholder_cleanup',
        'angular|component_source_cleanup'
      ]),
  _i1.apply(
      'build_test|test_bootstrap',
      [_i4.debugIndexBuilder, _i4.debugTestBuilder, _i4.testBootstrapBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i5.InputSet(include: const ['test/**'])),
  _i1.apply(
      'build_modules|modules',
      [
        _i6.moduleLibraryBuilder,
        _i6.metaModuleBuilder,
        _i6.metaModuleCleanBuilder,
        _i6.moduleBuilder,
        _i6.unlinkedSummaryBuilder,
        _i6.linkedSummaryBuilder
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules|module_cleanup']),
  _i1.apply(
      'build_web_compilers|ddc', [_i7.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_web_compilers|dart_source_cleanup']),
  _i1.apply('build_web_compilers|entrypoint', [_i7.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i5.InputSet(include: const [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: const [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: new _i8.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: new _i8.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers|dart2js_archive_extractor']),
  _i1.applyPostProcess('source_gen|part_cleanup', _i2.partCleanup,
      defaultGenerateFor: const _i5.InputSet()),
  _i1.applyPostProcess('angular|placeholder_cleanup', _i3.placeholderCleanup,
      defaultGenerateFor: const _i5.InputSet()),
  _i1.applyPostProcess(
      'angular|component_source_cleanup', _i3.componentSourceCleanup,
      defaultReleaseOptions: new _i8.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i5.InputSet(include: const ['lib/**'])),
  _i1.applyPostProcess('build_modules|module_cleanup', _i6.moduleCleanup,
      defaultGenerateFor: const _i5.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers|dart_source_cleanup', _i7.dartSourceCleanup,
      defaultReleaseOptions: new _i8.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i5.InputSet()),
  _i1.applyPostProcess('build_web_compilers|dart2js_archive_extractor',
      _i7.dart2JsArchiveExtractor,
      defaultReleaseOptions: new _i8.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i5.InputSet())
];
main(List<String> args, [_i9.SendPort sendPort]) async {
  var result = await _i1.run(args, _builders);
  sendPort?.send(result);
}
