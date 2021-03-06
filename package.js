Package.describe({
  name: 'jss:fullcalendar-react',
  version: '0.0.4',
  summary: 'React wrapper for fullcalendar',
  git: 'https://github.com/alonoslav/fullcalendar-react',
  documentation: 'README.md',
});

// eslint-disable-next-line func-names, prefer-arrow-callback
Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'jquery',
  ]);

  api.mainModule('lib/FullCalendar.js', 'client');
});

Npm.depends({
  fullcalendar: '3.0.1',
  'fullcalendar-scheduler': '1.4.0',
});
