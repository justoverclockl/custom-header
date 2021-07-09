import app from 'flarum/app';

app.initializers.add('justoverclock/custom-header', () => {
  app.extensionData
    .for('justoverclock-custom-header')
    .registerSetting({
      setting: 'justoverclock-custom-header.headerTitle',
      name: 'headerTitle',
      type: 'text',
      label: app.translator.trans('custom-header.admin.headerTitle'),
      help: app.translator.trans('custom-header.admin.headerTitle-help'),
    })
    .registerSetting({
      setting: 'justoverclock-custom-header.headerTagline',
      name: 'headerTagline',
      type: 'text',
      label: app.translator.trans('custom-header.admin.headerTagline'),
      help: app.translator.trans('custom-header.admin.headerTagline-help'),
    })
    .registerSetting({
      setting: 'justoverclock-custom-header.twitterIcon',
      name: 'twitterIcon',
      type: 'text',
      label: app.translator.trans('custom-header.admin.twitterIcon'),
      help: app.translator.trans('custom-header.admin.twitterIcon-help'),
    })
    .registerSetting({
      setting: 'justoverclock-custom-header.facebookIcon',
      name: 'facebookIcon',
      type: 'text',
      label: app.translator.trans('custom-header.admin.facebookIcon'),
      help: app.translator.trans('custom-header.admin.facebookIcon-help'),
    })
    .registerSetting({
      setting: 'justoverclock-custom-header.youtubeIcon',
      name: 'youtubeIcon',
      type: 'text',
      label: app.translator.trans('custom-header.admin.youtubeIcon'),
      help: app.translator.trans('custom-header.admin.youtubeIcon-help'),
    })
    .registerSetting({
      setting: 'justoverclock-custom-header.githubIcon',
      name: 'githubIcon',
      type: 'text',
      label: app.translator.trans('custom-header.admin.githubIcon'),
      help: app.translator.trans('custom-header.admin.githubIcon-help'),
    })
});
