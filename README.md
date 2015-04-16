Thermostat BDD
===============

Using Jasmine-JQuery to BDD a simple thermostat

The server.rb file can be used to serve the single page app:

```ruby
ruby server.rb
open http://localhost:4567/index.html # app
open http://localhost:4567/SpecRunner.html # tests
```

Or if you would like to run in chrome from the file system without [cross site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting) issues:

```sh
open -a Google\ Chrome --args --disable-web-security
open index.html # app
open SpecRunner.html# tests
```

