Package.describe({
  name: 'themeteorchef:seeder',
  version: '0.1.0',
  summary: 'Database seeding utility for Meteor.',
  git: 'https://github.com/themeteorchef/seeder',
  documentation: 'README.md'
});

Package.onUse( function( api ) {
  api.use( [ 'ecmascript', 'accounts-base', 'accounts-password' ] );
  api.use( 'alanning:roles@1.2.14' );

  if ( api.mainModule ) {
    api.mainModule( 'seeder.js', 'server' );
  } else {
    api.addFiles( 'seeder_pre1.3.js', 'server' );
    api.export( 'Seed' );
  }
});

// Tests coming in 1.0.0 release.
//
// Package.onTest( function( api ) {
//   api.use( 'ecmascript' );
//   api.use( 'tinytest' );
//   api.use( 'seeder' );
//   api.addFiles( 'seeder-tests.js' );
// });
