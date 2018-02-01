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

#### bank-account _alias(es): bank_

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

#### buying-car _rename to car, alias(es): car-loan, auto, auto-loan_

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

#### contract _alias(es): fountain-pen_

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

#### getting-a-credit-card _alias(es): credit-card-contract_

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

#### money _alias(es): dollar-bill_

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

#### mortgage _alias(es): sold_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mortgage</span>
    {% include icons/mortgage.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mortgage</span>
    {% include icons/mortgage-round.svg %}
</a>

#### owning-a-home _rename to buying-a-house, alias(es): owning-a-home, home, house_

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

#### paying-college _rename to paying-for-college, alias(es): college, grad-cap, mortarboard_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Paying for college</span>
    {% include icons/paying-college.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Paying for college</span>
    {% include icons/paying-college-round.svg %}
</a>

#### prepaid-cards _alias(es): prepaid_

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

#### retirement _alias(es): piggy-bank_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Retirement</span>
    {% include icons/retirement.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Retirement</span>
    {% include icons/retirement-round.svg %}
</a>


### Web application icons

#### audio-max _alias(es): audio-high_

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

#### audio-mute _alias(es): mute, audio-off_

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

#### broadcast _alias(es): antenna, radio_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Broadcast</span>
    {% include icons/broadcast.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Broadcast</span>
    {% include icons/broadcast-round.svg %}
</a>

#### bullhorn _alias(es): megaphone_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bullhorn</span>
    {% include icons/bullhorn.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Bullhorn</span>
    {% include icons/bullhorn-round.svg %}
</a>

#### chart _alias(es): graph_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Chart</span>
    {% include icons/chart.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Chart</span>
    {% include icons/chart-round.svg %}
</a>

#### clock _alias(es): time_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Clock</span>
    {% include icons/clock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Clock</span>
    {% include icons/clock-round.svg %}
</a>

#### date _alias(es): calendar_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Date</span>
    {% include icons/date.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Date</span>
    {% include icons/date-round.svg %}
</a>

#### dialogue _alias(es): discussion_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Dialogue</span>
    {% include icons/dialogue.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Dialogue</span>
    {% include icons/dialogue-round.svg %}
</a>

#### disabled _alias(es): no, disallowed_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Disabled</span>
    {% include icons/disabled.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Disabled</span>
    {% include icons/disabled-round.svg %}
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

#### favorite _alias(es): star, starred fav, fave_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Favorite</span>
    {% include icons/favorite.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Favorite</span>
    {% include icons/favorite-round.svg %}
</a>

#### unfavorite _alias(es): unstar, unstarred, unfav, unfave_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unfavorite</span>
    {% include icons/unfavorite.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unfavorite</span>
    {% include icons/unfavorite-round.svg %}
</a>

#### information _alias(es): info, i_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Information</span>
    {% include icons/information.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Information</span>
    {% include icons/information-round.svg %}
</a>

#### lightbulb _alias(es): idea_

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

#### list

<a href="#" class="a-link__icon">
    <span class="a-link_text">List</span>
    {% include icons/list.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">List</span>
    {% include icons/list-round.svg %}
</a>

#### lock _alias(es): locked_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lock</span>
    {% include icons/lock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Lock</span>
    {% include icons/lock-round.svg %}
</a>

#### unlock _alias(es): unlocked_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unlock</span>
    {% include icons/unlock.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Unlock</span>
    {% include icons/unlock-round.svg %}
</a>

#### menu _alias(es): hamburger_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Menu</span>
    {% include icons/menu.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Menu</span>
    {% include icons/menu-round.svg %}
</a>

#### microphone _alias(es): mic_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Microphone</span>
    {% include icons/microphone.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Microphone</span>
    {% include icons/microphone-round.svg %}
</a>

#### newspaper _alias(es): news_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Newspaper</span>
    {% include icons/newspaper.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Newspaper</span>
    {% include icons/newspaper-round.svg %}
</a>

#### parent _alias(es): family_

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

#### search _alias(es): zoom, magnifying-glass_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Search</span>
    {% include icons/search.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Search</span>
    {% include icons/search-round.svg %}
</a>

#### settings _alias(es): preferences, gear, cog_

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

#### user _alias(es): person_

<a href="#" class="a-link__icon">
    <span class="a-link_text">User</span>
    {% include icons/user.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">User</span>
    {% include icons/user-round.svg %}
</a>

#### wifi _alias(es): wi-fi, wireless_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Wi-Fi</span>
    {% include icons/wifi.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Wi-Fi</span>
    {% include icons/wifi-round.svg %}
</a>


### Communications icons

#### email _alias(es): envelope-back_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Email</span>
    {% include icons/email.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Email</span>
    {% include icons/email-round.svg %}
</a>

#### fax _alias(es): fax-machine_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Fax</span>
    {% include icons/fax.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Fax</span>
    {% include icons/fax-round.svg %}
</a>

#### mail _alias(es): envelope-front_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mail</span>
    {% include icons/mail.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Mail</span>
    {% include icons/mail-round.svg %}
</a>

#### phone _alias(es): telephone, handset_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Phone</span>
    {% include icons/phone.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Phone</span>
    {% include icons/phone-round.svg %}
</a>

#### technology _alias(es): cellphone, tablet_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Technology</span>
    {% include icons/technology.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Technology</span>
    {% include icons/technology-round.svg %}
</a>

#### web _alias(es): globe, world_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Web</span>
    {% include icons/web.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Web</span>
    {% include icons/web-round.svg %}
</a>


### Social/sharing icons

#### email _alias(es): envelope-back_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Email</span>
    {% include icons/email.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Email</span>
    {% include icons/email-square.svg %}
</a>

#### facebook

<a href="#" class="a-link__icon">
    <span class="a-link_text">Facebook</span>
    {% include icons/facebook.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Facebook</span>
    {% include icons/facebook-square.svg %}
</a>

#### flickr

<a href="#" class="a-link__icon">
    <span class="a-link_text">Flickr</span>
    {% include icons/flickr.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Flickr</span>
    {% include icons/flickr-square.svg %}
</a>

#### github

<a href="#" class="a-link__icon">
    <span class="a-link_text">GitHub</span>
    {% include icons/github.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">GitHub</span>
    {% include icons/github-square.svg %}
</a>

#### linkedin

<a href="#" class="a-link__icon">
    <span class="a-link_text">LinkedIn</span>
    {% include icons/linkedin.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">LinkedIn</span>
    {% include icons/linkedin-square.svg %}
</a>

#### twitter

<a href="#" class="a-link__icon">
    <span class="a-link_text">Twitter</span>
    {% include icons/twitter.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Twitter</span>
    {% include icons/twitter-square.svg %}
</a>

#### youtube

<a href="#" class="a-link__icon">
    <span class="a-link_text">YouTube</span>
    {% include icons/youtube.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">YouTube</span>
    {% include icons/youtube-square.svg %}
</a>


### Document icons

#### appendix

<a href="#" class="a-link__icon">
    <span class="a-link_text">Appendix</span>
    {% include icons/appendix.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Appendix</span>
    {% include icons/appendix-round.svg %}
</a>

#### attach _alias(es): attachment, paper-clip_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Attach</span>
    {% include icons/attach.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Attach</span>
    {% include icons/attach-round.svg %}
</a>

#### copy _alias(es): duplicate_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Copy</span>
    {% include icons/copy.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Copy</span>
    {% include icons/copy-round.svg %}
</a>

#### document _alias(es): doc, pdf_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Document</span>
    {% include icons/document.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Document</span>
    {% include icons/document-round.svg %}
</a>

#### download

<a href="#" class="a-link__icon">
    <span class="a-link_text">Download</span>
    {% include icons/download.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Download</span>
    {% include icons/download-round.svg %}
</a>

#### upload

<a href="#" class="a-link__icon">
    <span class="a-link_text">Upload</span>
    {% include icons/upload.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Upload</span>
    {% include icons/upload-round.svg %}
</a>

#### edit _alias(es): pencil_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Edit</span>
    {% include icons/edit.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Edit</span>
    {% include icons/edit-round.svg %}
</a>

#### print _alias(es): printer_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Print</span>
    {% include icons/print.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Print</span>
    {% include icons/print-round.svg %}
</a>

#### rss _alias(es): feed_

<a href="#" class="a-link__icon">
    <span class="a-link_text">RSS</span>
    {% include icons/rss.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">RSS</span>
    {% include icons/rss-round.svg %}
</a>

#### save _alias(es): disk_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Save</span>
    {% include icons/save.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Save</span>
    {% include icons/save-round.svg %}
</a>

#### supplement

<a href="#" class="a-link__icon">
    <span class="a-link_text">Supplement</span>
    {% include icons/supplement.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Supplement</span>
    {% include icons/supplement-round.svg %}
</a>


### Navigation icons

#### up _alias(es): chevron-up_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Up</span>
    {% include icons/up.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Up</span>
    {% include icons/up-round.svg %}
</a>

#### right _alias(es): chevron-right_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Right</span>
    {% include icons/right.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Right</span>
    {% include icons/right-round.svg %}
</a>

#### down _alias(es): chevron-down_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Down</span>
    {% include icons/down.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Down</span>
    {% include icons/down-round.svg %}
</a>

#### left _alias(es): chevron-left_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/left.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/left-round.svg %}
</a>

#### arrow-up

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow up</span>
    {% include icons/arrow-up.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow up</span>
    {% include icons/arrow-up-round.svg %}
</a>

#### arrow-right

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow right</span>
    {% include icons/arrow-right.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow right</span>
    {% include icons/arrow-right-round.svg %}
</a>

#### arrow-down

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow down</span>
    {% include icons/arrow-down.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow down</span>
    {% include icons/arrow-down-round.svg %}
</a>

#### arrow-left

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow left</span>
    {% include icons/arrow-left.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Arrow left</span>
    {% include icons/arrow-left-round.svg %}
</a>


### Status icons

#### approved _alias(es): check, checkmark, success_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Approved</span>
    {% include icons/approved.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Approved</span>
    {% include icons/approved-round.svg %}
</a>

#### delete _alias(es): close, remove, multiply, multiplication_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Delete</span>
    {% include icons/delete.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Delete</span>
    {% include icons/delete-round.svg %}
</a>

#### error _alias(es): warning, alert, exclamation-mark_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Error</span>
    {% include icons/error.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Error</span>
    {% include icons/error-round.svg %}
</a>

#### help _alias(es): question, question-mark_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Help</span>
    {% include icons/help.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Help</span>
    {% include icons/help-round.svg %}
</a>

#### update

<a href="#" class="a-link__icon">
    <span class="a-link_text">Update</span>
    {% include icons/update.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Update</span>
    {% include icons/update-round.svg %}
</a>

#### dollar

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/dollar.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/dollar-round.svg %}
</a>

#### plus _alias(es): add, addition, expand_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Plus</span>
    {% include icons/plus.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Plus</span>
    {% include icons/plus-round.svg %}
</a>

#### minus _alias(es): subtract, subtraction, collapse_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Minus</span>
    {% include icons/minus.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Minus</span>
    {% include icons/minus-round.svg %}
</a>

#### divide _alias(es): division_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Divide</span>
    {% include icons/divide.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Divide</span>
    {% include icons/divide-round.svg %}
</a>

#### equal _alias(es): equals_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Equal</span>
    {% include icons/equal.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Equal</span>
    {% include icons/equal-round.svg %}
</a>

#### percentage _alias(es): percent_

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/percentage.svg %}
</a>

<a href="#" class="a-link__icon">
    <span class="a-link_text">Left</span>
    {% include icons/percentage-round.svg %}
</a>
