var highlight = require( 'highlight.js/lib/highlight' );
require( 'highlight.js/styles/default.css' );
require( 'highlight.js/styles/darcula.css' );

var keywords = 'name onlyModule amd commonjs commonjs2 root and exclude ' +
  'include not or test exclude include test root amd commonjs ' +
  'exprContextCritical exprContextRecursive exprContextRegExp ' +
  'exprContextRequest loader noParse rule unknownContextCritical ' +
  'unknownContextRecursive unknownContextRegExp unknownContextRequest ' +
  'unsafeCache wrappedContextCritical wrappedContextRecursive ' +
  'wrappedContextRegExp strictExportPresence strictThisContextOnImports ' +
  'Buffer __dirname __filename console global process auxiliaryComment ' +
  'chunkFilename crossOriginLoading chunkLoadTimeout ' +
  'devtoolFallbackModuleFilenameTemplate devtoolLineToLine ' +
  'devtoolModuleFilenameTemplate filename hashDigest hashDigestLength ' +
  'hashFunction hashSalt hotUpdateChunkFilename hotUpdateFunction ' +
  'hotUpdateMainFilename jsonpFunction library libraryTarget ' +
  'libraryExport path$ pathinfo publicPath sourceMapFilename ' +
  'sourcePrefix strictModuleExceptionHandling umdNamedDefine ' +
  'assetFilter hints maxEntrypointSize maxAssetSize assetFilter ' +
  'hints maxEntrypointSize maxAssetSize alias aliasField cachePredicate ' +
  'cacheWithContext descriptionFile enforceExtension enforceModuleExtension ' +
  'extensions fileSystem mainField mainFile moduleExtension module$ plugin ' +
  'resolver symlinks unsafeCache useSyncFileSystemCalls alias aliasField ' +
  'cachePredicate cacheWithContext descriptionFile enforceExtension ' +
  'enforceModuleExtension extension fileSystem mainField mainFile ' +
  'moduleExtension module$ plugin resolver symlinks unsafeCache ' +
  'useSyncFileSystemCalls enforce exclude include issuer loader ' +
  'loaders oneOf options parser query resource resourceQuery compiler ' +
  'test use context hash version timings assets chunks chunkModules ' +
  'modules children cached reasons source warningsFilter errorDetails ' +
  'chunkOrigins modulesSort moduleTrace chunksSort assetsSort providedExports ' +
  'usedExports optimizationBailout loader options query aggregateTimeout ' +
  'poll amd bail cache context dependency devServer devtool entry ' +
  'external loader module$ name node output performance plugin profile ' +
  'recordsInputPath recordsOutputPath recordsPath resolve resolveLoader ' +
  'stats target watch watchOptions webpackConfig ' +
  'development production testing staging ';

function jslang( hljs ) {
  var jslang = require( 'highlight.js/lib/languages/javascript' )( hljs );
  jslang.keywords.keyword += keywords;
  return jslang;
}

highlight.registerLanguage( 'javascript', jslang );
highlight.registerLanguage( 'bash', require( 'highlight.js/lib/languages/bash' ) );
highlight.initHighlightingOnLoad();
