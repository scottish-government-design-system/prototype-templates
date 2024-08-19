# Templates

This plugin contains a set of templates to use in your prototype to create a variety of different page types. 

With your prototype running and this plugin installed, the templates will be available in the 'Manage your prototype' admin area. Here you can 'view' how each template looks with their default placeholder content, or you can 'create' a new page using a template and then make changes to this page in your prototype.

## List of available templates

The following templates are included:

- `article.njk` based on an article type page from mygov.scot, this includes:
  - header with mygov logo, search and no navigation
  - breadcrumbs
  - main content area with page header and sidebar
  - footer
- `blankpage.njk` blank page with only header, footer and navigation menu included
- `check-answers.njk` use to show a user their answers before they submit them
- `form-submission-results.njk` use to show a user the result of their form submission
- `guide.njk` based on a guide type page from mygov.scot, this includes:
  - header with mygov logo, search and no navigation
  - breadcrumbs
  - contents menu to link to other pages in the guide
  - main content area with page header and sidebar
  - sequential navigation to link pages in a guide
- `navigation-card.njk` navigation page with a set of linked cards
- `navigation-grid.njk` navigation page with a grid of links
- `navigation-list.njk` navigation page with a list of links
- `question.njk` example of a page in a form with a date picker, use this to construct linked form pages using the various types of form input components in the design system
- `task-list.njk` use to show a user their progress in a large form

## Layouts

Layouts let you share common design elements across pages, such as including the name of your service or using the Scottish Government footer on every page of your prototype.

If your pages share a custom header and footer, you can add them to one shared layout file. To change those parts of your app's pages in future, you can change them once in the layout and they will automatically update on all the pages that use that layout.

To make a page use a layout, you need to add an `extends` line at the top of the file. For example if you want to extend a layout called 'admin', use:

```
{% extends "layouts/admin.html" %}
```

All the Scottish Government templates extend one of the following layouts:

- `_base-layout.njk` contains all the elements needed to have a basic page using the Scottish Government Design System
- `_base-layout--navigation.njk` extends the base layout to support a site navigation menu


### Using site navigation

Templates that include site navigation use default values that should be changed for your prototype. 

#### Change the default menu

If you create a page using a template that contains site navigation you can modify the default menu by changing the `navigationMenu` variable to include the correct labels and links for each menu item.

This is an example of an amended menu with the 'Services' item marked as currently selected:

```
{% set navigationMenu = {
        "menu": [
            {
            "label": "About",
            "link": "/about"
            },
            {
            "label": "Services",
            "link": "/services",
            "current": true
            },
            {
            "label": "Contact",
            "link": "/contact"
            }
        ]
    }
%}
```

#### Remove site navigation from a page

If your page's template includes site navigation that you want to remove:

1. Change the page to extend `_base-layout.njk` rather than `_base-layout--navigation.njk`
2. Delete the section of code that sets the `navigationMenu` variable - as this is no longer needed

#### Templates that don't include site navigation

To add site navigation to a page template that doesn't include it:

1. Change the page to extend `_base-layout--navigation.njk` rather than `_base-layout.njk`
2. Add the section of code that sets the `navigationMenu` variable and defines the menu, for example:

```
{% set navigationMenu = {
        "menu": [
            {
            "label": "About",
            "link": "/about"
            },
            {
            "label": "Services",
            "link": "/services"
            },
            {
            "label": "Contact",
            "link": "/contact"
            }
        ]
    }
%}
```

### Creating your own layouts

The GOV.UK Prototype Kit comes with a layout file for you to edit. You can also add more layouts if you need to.

In your code editor, open `app/views/layouts/main.html`.

Note the line:

```
{% extends "govuk-prototype-kit/layouts/govuk-branded.html" %}
```

It means this layout extends a standard layout that comes with the Prototype Kit. It loads the default code needed for GOV.UK branded pages, along with the functionality in the kit, such as automatically storing data.

#### Using the Scottish Government Design System

The Scottish Government Design System prototype templates included in this plugin **do not use GOV.UK layouts**. If you want to create your own layout and extend one of these layouts you should:

1. Make a copy of the layout file at `app/views/layouts/main.html` and give it a name that describes it's purpose
2. Change the `extends` line to use one of the Scottish Government layouts, for example: {% extends "sg-prototype-templates/layouts/_base-layout.njk" %}

## Blocks

Blocks are how layouts and pages share code. For example, there is a block called `siteHeader` for the header content on every page that uses the 'Site header' component from the Scottish Government Design System. Blocks are typically named after their equivalent design system component using camel case syntax.

Unlike the Gov.UK Frontend, the Scottish Government Design System currently doesn't include Nunjucks macros for components. This means that HTML should be copied and pasted from the design system examples, then modified to suit.

The following example shows how the breadcrumbs component is used within the breadcrumbs block:

```
{% block breadcrumbs %}
<div class="ds_wrapper">
    <nav aria-label="Breadcrumb">
        <ol class="ds_breadcrumbs">
            <li class="ds_breadcrumbs__item">
                <a class="ds_breadcrumbs__link" href="/">
                    Home
                </a>
            </li>
            <li class="ds_breadcrumbs__item">
                <a class="ds_breadcrumbs__link" href="/about">
                    About the Scottish Government
                </a>
            </li>
            <li class="ds_breadcrumbs__item" aria-current="page">
                Who runs government
            </li>
        </ol>
    </nav>
</div>
{% endblock %}
```

### List of available blocks

The following blocks are used by the plugin's templates. You can override these in your prototype app's pages or define new blocks to use in any new layouts that you create.

<dl>
    <dt><code>pageTitle</code></dt>
    <dd>sets the content of the &lt;title&gt; tag for each page, with the default value being the chosen <code>serviceName</code> from your app's config.</dd>
    <dt><code>stylesheets</code></dt>
    <dd>area to specify what stylesheets to include, with the default list loading the Roboto webfont, followed by any user defined stylesheets and then those imported from installed plugins.</dd>
    <dt><code>headIcons</code></dt>
    <dd>list of favicon types for various browsers, with the default icon as the Scottish Government saltire.</dd>
    <dt><code>bodyStart</code></dt>
    <dd>area to place elements immediately after the opening <code>&lt;body&gt;</code> tag.</dd>
    <dt><code>pageTopStart</code></dt>
    <dd>area to place elements at the start of the <code>ds_page__top</code> area of the page, immediately before the <code>siteHeader</code> block.</dd>
    <dt><code>siteHeader</code></dt>
    <dd>area to place the 'Site header' pattern, with the default containing a number of additional blocks for customisation.</dd>
    <dt><code>siteBrandingLogo</code></dt>
    <dd>set the linked logo in the 'Site header' pattern, with the default showing the Scottish Government logo linking to your app's index page.</dd>
    <dt><code>siteBrandingTitle</code></dt>
    <dd>sets the name of the service that appears alongside the logo in the 'Site header' pattern, with the default value being the chosen <code>serviceName</code> from your app's config. Leave this block empty to omit the title and only show the logo in the header.</dd>
    <dt><code>siteHeaderControls</code></dt>
    <dd>used by the <code>_base-layout--navigation.njk</code> layout to place the menu toggle button used for mobile sizes. Leave this block empty to omit from your page.</dd>
    <dt><code>siteNavigationMobile</code></dt>
    <dd>used by the <code>_base-layout--navigation.njk</code> layout to place the menu links used for mobile sizes. Leave this block empty to omit from your page.</dd>
    <dt><code>siteSearch</code></dt>
    <dd>area to place the 'Site search' component within the 'Site header' pattern.</dd>
    <dt><code>siteNavigation</code></dt>
    <dd>used by the <code>_base-layout--navigation.njk</code> layout to place the menu links for the site navigation on sizes larger than mobile. Leave this block empty to omit from your page.</dd>
    <dt><code>breadcrumbs</code></dt>
    <dd>area to place the 'Breadcrumbs' component, with the default being empty. Some templates have example breadcrumbs included.</dd>
    <dt><code>backToTop</code></dt>
    <dd>area to place the 'Back to top' component. This is included on every template.</dd>
    <dt><code>main</code></dt>
    <dd>area to place the unique content of your page. Each template sets different content examples in this block using different layouts.</dd>
    <dt><code>siteFooter</code></dt>
    <dd>area to place the 'Site footer' component, with the default including links to 'Manage your prototype' and 'Clear data'. </dd>
    <dt><code>bodyEnd</code></dt>
    <dd>area to place elements immediately before the closing <code>body</code> tag, with the default including any user specified JavaScript followed by those from installed plugins. The script from this plugin is included last and it initialises the Scottish Government Design System script which is included as a dependency.</dd>
</dl>

## Variables
Variables are used to share content between layouts and pages. These let you override the default values of content in your pages from a single place.

### List of available variables
The following variables are used by the plugin's templates to provide customisation.

<dl>
    <dt><code>serviceName</code></dt>
    <dd>sets the name of your prototype which is shown in the 'Manage your prototype' admin area's header as well as in the header of your prototype app's pages. This is set in the <code>config.json</code> file of your prototype, for example <code>"serviceName": "Test service"</code>.</dd>
    <dt><code>navigationMenu</code></dt>
    <dd>defines the menu structure that is used by the <code>_base-layout--navigation.njk</code> layout. This can be set in your prototypes pages or layouts which extend this layout.</dd>
    <dt><code>bodyClasses</code></dt>
    <dd>adds optional classes to the <code>&lt;body&gt;</code> tag. This can be set in your prototype pages or any additional layouts you create. For example, adding <code>{% set bodyClasses = "custom-class" %}</code> to the top of a page will change the <code>&lt;body&gt;</code> tag to <code>&lt;body class="custom-class"&gt;</code>.</dd>
</dl>