The cf-icon component provides the custom icon font for Capital Framework.
This component can be used by itself, but is designed to work with Capital
Framework.

> NOTE: If you use `cf-icons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Icon generation variables](#icon-generation-variables)
- [The basics](#the-basics)
- [Helpers](#helpers)
    - [Icon sizes](#icon-sizes)
    - [Mixins](#mixins)
    - [Modified icons](#modified-icons)
    - [Animated icons](#animated-icons)
- [Icons](#icons)
    - [Navigation icons](#navigation-icons)
    - [Status icons](#status-icons)
    - [Social icons](#social-icons)
    - [Document icons](#document-icons)
    - [Financial product icons](#financial-product-icons)
    - [Web icons](#web-icons)
- [Icon character variables](#icon-character-variables)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).


```
@cf-icon-border-color:          @gray;
```

## Icon generation variables

```
@cf-icon-prefix:                cf-icon;
@cf-icon-path:                  'fonts';
```

## The basics

The class defined by the @cf-icon-prefix variable applies all shared icon
styles including the font family. By default, this class will be named
`cf-icon` but it can be changed in the settings. All icons must use three
classes, one for the base class, one to select the desired icon, and one
for the chosen pseudo-element. For example:

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before"></span>
```

It's preferred to combine the icon classes with an existing element, but if
it's necessary to use an empty element, please use the `span` element instead
of the `i` element. This avoids font family cascading conflicts when using an
italic webfont on `i` elements and then another font for the icons.
_Note that this issue only pops up in older versions of Internet Explorer._

_Original_

<a href="#" class="m-list_link">
  <span class="cf-icon
             cf-icon-mail
             cf-icon__before"></span>
  Send us postal mail
</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us postal mail</span>
            <span class="cf-icon
               cf-icon-mail-round
               cf-icon__"></span>
      </span>
</span>

_Proposed_

<a href="#" class="m-list_link">{% include icons/mail-2.svg %} Send us postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/mail-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/mail-2.svg %}</span>
            Send us some postal mail
      </a>
</div>

<div>
      <a class="a-btn" href="#">
          <span>{% include icons/mail-2.svg %}</span>
          Send us some postal mail
      </a>
</div><br><br>

_Other icon combos_

<a href="#" class="m-list_link">{% include icons/bill-time-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/bill-time-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/bill-time-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/credit-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/credit-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/credit-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/divide-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/divide-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/divide-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/fax-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/fax-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/fax-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/house-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/house-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/house-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/mail-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/mail-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/mail-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>

<a href="#" class="m-list_link">{% include icons/stopwatch-2.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span>{% include icons/stopwatch-round-2.svg %}</span>
      </span>
</span>

<div class="m-meta-header">
      <a href="/about-us/newsroom/?categories=blog" class="a-heading a-heading__icon ">
            <span>{% include icons/stopwatch-2.svg %}</span>
            Send us some postal Mail
      </a>
</div>
