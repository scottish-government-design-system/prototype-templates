# Scottish Government Design System templates for GOV.UK Prototype Kit

This plugin for the [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) lets you create prototypes using the [Scottish Government Design System](https://github.com/scottish-government-design-system/design-system). It contains a set of common page templates and automatically includes the Scottish Government Design System as a dependency.

## How to install the Scottish Government Design System Prototype Templates plugin
1. follow the [instructions on creating a new GOV.UK prototype](https://prototype-kit.service.gov.uk/docs/create-new-prototype)
2. open a terminal window within that folder and run the following command to install the plugin
``` npm install @scottish-government-design-system/prototype-templates ```
3. create a `settings.scss` file in `app/assets/sass` and add `$govuk-global-styles: false;` to it to prevent GOV.UK Frontend styles overriding other styling that you have

### Optionally uninstall the GOV.UK Frontend plugin
The Scottish Government Design System does not require the GOV.UK Design System code (GOV.UK Frontend) so you may wish to uninstall this to reduce the file size of your prototype.
1. add `"allowGovukFrontendUninstall": true` to your prototype config file at `app/config.json` to unlock the option to uninstall the plugin
2. in the browser, navigate to the 'Manage your prototype' section and go to 'Plugins'
3. click on the uninstall button of the plugins you wish to remove

## How to use the Scottish Government Design System Prototype Templates plugin
1. in the browser, navigate to the 'Manage your prototype' section and go to 'Templates'
2. create pages using the available templates

## Feedback, help and support
If you need help or support you can e-mail us at [designsystem@gov.scot](mailto:designsystem@gov.scot)