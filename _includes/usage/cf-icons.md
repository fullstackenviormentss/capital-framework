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


### Icon generation variables

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




## Original webfont implementation

<a href="#" class="m-list_link">
  <span class="cf-icon
             cf-icon-mail
             cf-icon__before"></span>
  Send us some postal mail
</a>

<span class="o-expandable_link">
      <span class="o-expandable_cue
                   o-expandable_cue-close">
            <span class="o-expandable_cue-label">Send us some postal mail</span>
            <span class="cf-icon
               cf-icon-mail-round
               cf-icon__"></span>
      </span>
</span>




## Proposed SVG implementation

<a href="#" class="m-list_link">{% include icons/bank-account.svg %} Send us some postal mail</a>

<span class="o-expandable_link">
    <span class="o-expandable_cue
                 o-expandable_cue-close">
        <span class="o-expandable_cue-label">Send us some postal mail</span>
        <span>{% include icons/bank-account-round.svg %}</span>
    </span>
</span>

<div class="m-meta-header">
    <a href="#" class="a-heading a-heading__icon">
        <span>{% include icons/bank-account.svg %}</span>
        Send us some postal mail
    </a>
</div>

<div>
      <a class="a-btn" href="#">
          <span>{% include icons/bank-account.svg %}</span>
          Send us some postal mail
      </a>
</div><br><br>




## The icons


### Financial products and services
#### bank-account

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bank account</span>
    {% include icons/bank-account.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bank account</span>
    {% include icons/bank-account-round.svg %}
</a>

#### building-credit

<a href="#" class="a-link__icon">
    <span class="a-link_text">Building credit</span>
    {% include icons/building-credit.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Building credit</span>
    {% include icons/building-credit-round.svg %}
</a>

#### buying-car _rename to buying-a-car_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Buying a car</span>
    {% include icons/buying-car.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Buying a car</span>
    {% include icons/buying-car-round.svg %}
</a>

#### complaint

<a href="#" class="a-link__icon">
    <span class="a-link_text">Complaint</span>
    {% include icons/complaint.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Complaint</span>
    {% include icons/complaint-round.svg %}
</a>

#### contract

<a href="#" class="a-link__icon">
    <span class="a-link_text">Contract</span>
    {% include icons/contract.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Contract</span>
    {% include icons/contract-round.svg %}
</a>

#### credit-card

<a href="#" class="a-link__icon">
    <span class="a-link_text">Credit card</span>
    {% include icons/credit-card.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Credit card</span>
    {% include icons/credit-card-round.svg %}
</a>

#### credit-report

<a href="#" class="a-link__icon">
    <span class="a-link_text">Credit report</span>
    {% include icons/credit-report.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Credit report</span>
    {% include icons/credit-report-round.svg %}
</a>

#### debt-collection

<a href="#" class="a-link__icon">
    <span class="a-link_text">Debt collection</span>
    {% include icons/debt-collection.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Debt collection</span>
    {% include icons/debt-collection-round.svg %}
</a>

#### debt

<a href="#" class="a-link__icon">
    <span class="a-link_text">Debt</span>
    {% include icons/debt.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Debt</span>
    {% include icons/debt-round.svg %}
</a>

#### getting-a-credit-card

<a href="#" class="a-link__icon">
    <span class="a-link_text">Getting a credit card</span>
    {% include icons/getting-a-credit-card.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Getting a credit card</span>
    {% include icons/getting-a-credit-card-round.svg %}
</a>

#### loan

<a href="#" class="a-link__icon">
    <span class="a-link_text">Loan</span>
    {% include icons/loan.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Loan</span>
    {% include icons/loan-round.svg %}
</a>

#### money

<a href="#" class="a-link__icon">
    <span class="a-link_text">Money</span>
    {% include icons/money.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Money</span>
    {% include icons/money-round.svg %}
</a>

#### money-transfer

<a href="#" class="a-link__icon">
    <span class="a-link_text">Money transfer</span>
    {% include icons/money-transfer.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Money transfer</span>
    {% include icons/money-transfer-round.svg %}
</a>

#### mortgage

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mortgage</span>
    {% include icons/mortgage.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mortgage</span>
    {% include icons/mortgage-round.svg %}
</a>

#### owning-a-home _rename to buying-a-house, alias owning-a-home to it_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Owning a Home</span>
    {% include icons/owning-a-home.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Owning a Home</span>
    {% include icons/owning-a-home-round.svg %}
</a>

#### payday-loan

<a href="#" class="a-link__icon">
    <span class="a-link_text">Payday loan</span>
    {% include icons/payday-loan.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Payday loan</span>
    {% include icons/payday-loan-round.svg %}
</a>

#### paying-college _rename to paying-for-college_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Paying for college</span>
    {% include icons/paying-college.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Paying for college</span>
    {% include icons/paying-college-round.svg %}
</a>

#### prepaid-cards

<a href="#" class="a-link__icon">
    <span class="a-link_text">Prepaid cards</span>
    {% include icons/prepaid-cards.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Prepaid cards</span>
    {% include icons/prepaid-cards-round.svg %}
</a>

#### quick-cash

<a href="#" class="a-link__icon">
    <span class="a-link_text">Quick cash</span>
    {% include icons/quick-cash.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Quick cash</span>
    {% include icons/quick-cash-round.svg %}
</a>

#### retirement

<a href="#" class="a-link__icon">
    <span class="a-link_text">Retirement</span>
    {% include icons/retirement.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Retirement</span>
    {% include icons/retirement-round.svg %}
</a>


### Web application icons
#### audio-max

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio max</span>
    {% include icons/audio-max.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio max</span>
    {% include icons/audio-max-round.svg %}
</a>

#### audio-medium

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio medium</span>
    {% include icons/audio-medium.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio medium</span>
    {% include icons/audio-medium-round.svg %}
</a>

#### audio-low

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio low</span>
    {% include icons/audio-low.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio low</span>
    {% include icons/audio-low-round.svg %}
</a>

#### audio-mute

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio mute</span>
    {% include icons/audio-mute.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Audio mute</span>
    {% include icons/audio-mute-round.svg %}
</a>

#### bookmark

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bookmark</span>
    {% include icons/bookmark.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bookmark</span>
    {% include icons/bookmark-round.svg %}
</a>

#### unbookmark

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unbookmark</span>
    {% include icons/unbookmark.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unbookmark</span>
    {% include icons/unbookmark-round.svg %}
</a>

#### bullhorn

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bullhorn</span>
    {% include icons/bullhorn.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bullhorn</span>
    {% include icons/bullhorn-round.svg %}
</a>

#### chart

<a href="#" class="a-link__icon">
    <span class="a-link_text">Chart</span>
    {% include icons/chart.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Chart</span>
    {% include icons/chart-round.svg %}
</a>

#### clock

<a href="#" class="a-link__icon">
    <span class="a-link_text">Clock</span>
    {% include icons/clock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Clock</span>
    {% include icons/clock-round.svg %}
</a>

#### date

<a href="#" class="a-link__icon">
    <span class="a-link_text">Date</span>
    {% include icons/date.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Date</span>
    {% include icons/date-round.svg %}
</a>

#### dialogue

<a href="#" class="a-link__icon">
    <span class="a-link_text">Dialogue</span>
    {% include icons/dialogue.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Dialogue</span>
    {% include icons/dialogue-round.svg %}
</a>

#### external-link

<a href="#" class="a-link__icon">
    <span class="a-link_text">External link</span>
    {% include icons/external-link.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">External link</span>
    {% include icons/external-link-round.svg %}
</a>

#### favorite

<a href="#" class="a-link__icon">
    <span class="a-link_text">Favorite</span>
    {% include icons/favorite.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Favorite</span>
    {% include icons/favorite-round.svg %}
</a>

#### unfavorite

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unfavorite</span>
    {% include icons/unfavorite.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unfavorite</span>
    {% include icons/unfavorite-round.svg %}
</a>

#### information

<a href="#" class="a-link__icon">
    <span class="a-link_text">Information</span>
    {% include icons/information.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Information</span>
    {% include icons/information-round.svg %}
</a>

#### lightbulb

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lightbulb</span>
    {% include icons/lightbulb.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lightbulb</span>
    {% include icons/lightbulb-round.svg %}
</a>

#### link

<a href="#" class="a-link__icon">
    <span class="a-link_text">Link</span>
    {% include icons/link.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Link</span>
    {% include icons/link-round.svg %}
</a>

#### lock

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lock</span>
    {% include icons/lock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lock</span>
    {% include icons/lock-round.svg %}
</a>

#### unlock

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unlock</span>
    {% include icons/unlock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unlock</span>
    {% include icons/unlock-round.svg %}
</a>

#### menu

<a href="#" class="a-link__icon">
    <span class="a-link_text">Menu</span>
    {% include icons/menu.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Menu</span>
    {% include icons/menu-round.svg %}
</a>

#### microphone

<a href="#" class="a-link__icon">
    <span class="a-link_text">Microphone</span>
    {% include icons/microphone.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Microphone</span>
    {% include icons/microphone-round.svg %}
</a>

#### newspaper

<a href="#" class="a-link__icon">
    <span class="a-link_text">Newspaper</span>
    {% include icons/newspaper.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Newspaper</span>
    {% include icons/newspaper.svg %}
</a>

#### parent

<a href="#" class="a-link__icon">
    <span class="a-link_text">Parent</span>
    {% include icons/parent.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Parent</span>
    {% include icons/parent-round.svg %}
</a>

#### play

<a href="#" class="a-link__icon">
    <span class="a-link_text">Play</span>
    {% include icons/play.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Play</span>
    {% include icons/play-round.svg %}
</a>

#### open-quote

<a href="#" class="a-link__icon">
    <span class="a-link_text">Open quote</span>
    {% include icons/open-quote.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Open quote</span>
    {% include icons/open-quote-round.svg %}
</a>

#### close-quote

<a href="#" class="a-link__icon">
    <span class="a-link_text">Close quote</span>
    {% include icons/close-quote.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Close quote</span>
    {% include icons/close-quote-round.svg %}
</a>

#### search

<a href="#" class="a-link__icon">
    <span class="a-link_text">Search</span>
    {% include icons/search.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Search</span>
    {% include icons/search-round.svg %}
</a>

#### settings

<a href="#" class="a-link__icon">
    <span class="a-link_text">Settings</span>
    {% include icons/settings.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Settings</span>
    {% include icons/settings-round.svg %}
</a>

#### share

<a href="#" class="a-link__icon">
    <span class="a-link_text">Share</span>
    {% include icons/share.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Share</span>
    {% include icons/share-round.svg %}
</a>

#### speech-bubble

<a href="#" class="a-link__icon">
    <span class="a-link_text">Speech bubble</span>
    {% include icons/speech-bubble.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Speech bubble</span>
    {% include icons/speech-bubble-round.svg %}
</a>

#### user

<a href="#" class="a-link__icon">
    <span class="a-link_text">User</span>
    {% include icons/user.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">User</span>
    {% include icons/user-round.svg %}
</a>

#### wifi

<a href="#" class="a-link__icon">
    <span class="a-link_text">Wi-Fi</span>
    {% include icons/wifi.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Wi-Fi</span>
    {% include icons/wifi-round.svg %}
</a>
