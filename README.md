# opinioned

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

If you clone the repo, run `npm --i` to install `vendor.`
<br>
<br>

### ABOUT

I applied

* the functionality of a <mark>webshop</mark>
to
* [The New York Times Article Search API](https://developer.nytimes.com/)

i.e. <mark>'buying'</mark> an opinion.
<br>
<br>

### HOW IT WORKS

Selecting articles on the newsfeed adds them to the <mark>'shopping cart'</mark> – the fixed bottom bar and the selected page.

<mark>'Buying'</mark> an article from your selection means <mark>'delivering'</mark> it as the headline to the newsfeed page.
<br>
<br>

### OTHER FUNCTIONALITIES

#### Filters
Each category on the newsfeed gets 
* a new **API-request** from the selected _The New York Times_ **news-desk** 
* with preset on Culture<br>AND<br>
* **'opinion'** as keyword.

#### Search
On **key-up** 
* **highlights** the entered text and
* **filters** the newsfeed down.

#### Recommendations
Select a **single scientific text** out of a **list of texts**
* via **ActivatedRoute**
* coming from a **JSON.**
<br>
<br>

[![The New York Times Branding](https://developer.nytimes.com/files/poweredby_nytimes_150c.png?v=1583354208354)](https://developer.nytimes.com/)