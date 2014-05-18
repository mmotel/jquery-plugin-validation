#  jQuery Plugin: Fields & Forms Validation

#### Current version: `0.3.2 BETA`

#### Features:

* [Text validation](#text-validation)
* [Number validation](#number-validation)
* [Email validation](#email-validation)
* [Password validation](#password-validation)
* [Form validation](#form-validation)

#### Live demo:

* [Fields validation](http://mathewgd.webd.pl/jqueryValidDemo/examples/fields/)
* [Form validation](http://mathewgd.webd.pl/jqueryValidDemo/examples/form/)

###### To do:

* Zip code validation
* Url valiation
* Date validation

***

## Text validation

```js
  $('textFields').valid("text", options, callback);
```

##### Available `options`:

```js
  {
    "size":
    {
      "min": Int,
      "max": Int
    },
    "regexp":
    {
      "pat": RegExpPattern,
      "mod": RegExpModifiers
    },
    "condition": function //return Boolean
  }
```

##### `condition` function:

```js
  function () {
    //this contains DOM element
    return Boolean;
  }
```

##### Validation callback:

```js
  function ( err ) {
    //this contains DOM element
    if(err){
      //do sth with not valid DOM element
    }
    else{
      //do sth with valid DOM element
    }
  }
```

##### `err` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "size":
    {
      "min": Boolean,
      "max": Boolean
    },
    "regexp": Boolean,
    "condition": Boolean
  }
```

##### Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Text</label>
  <input type="text" class="form-control" id="textInput" placeholder="Text">
</div>
```

```js
  $("#textInput").valid("text", 
    { 
    "size": 
      { 
        "min": 2, 
        "max": 10 
      }, 
    "regexp": 
      {
        "pat": "^[A-Z]\\w+"
      },
    "condition": function () {
        return $(this).val() !== "Abc";
      }
    },
    function ( err ) {
      if(err){
        $(this).parent().addClass("has-error");      
      }
      else{
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");      
      }
    });
```

## Number validation

```js
  $('numberFields').valid("number", options, callback);
```

##### Available `options`:

```js
  {
    "value":
    {
      "min": Int/Float,
      "max": Int/Float
    },
    "type": "Int"|"Float",
    "condition": function //return Boolean
  }
```

##### `condition` function:

```js
  function () {
    //this contains DOM element
    return Boolean;
  }
```

##### Validation callback:

```js
  function ( err ) {
    //this contains DOM element
    if(err){
      //do sth with not valid DOM element
    }
    else{
      //do sth with valid DOM element
    }
  }
```

##### `err` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "nan": Boolean //true if DOM element value is NaN
    "value":
    {
      "min": Boolean,
      "max": Boolean
    },
    "type": Boolean,
    "condition": Boolean
  }
```

##### Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Number</label>
  <input type="number" class="form-control" id="numberInput" placeholder="Number">
</div>
```

```js
  $("#numberInput").valid("number", 
    { 
    "value": 
      { 
        "min": 10, 
        "max": 100 
      }, 
    "type": "Int",
    "condition": function () {
        return $(this).val() % 2 === 0;
      }
    },
    function ( err ) {
      if(err){
        $(this).parent().addClass("has-error");      
      }
      else{
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");      
      }
    });
```

## Email validation

```js
  $('emailFields').valid("email", options, callback);
```

##### Available `options`:

```js
  {
    "size":
    {
      "min": Int,   //default: 5
      "max": Int    //default: 64
    },
    "condition": function //return Boolean
  }
```

##### `condition` function:

```js
  function () {
    //this contains DOM element
    return Boolean;
  }
```

##### Validation callbacks:

```js
  function ( err ) {
    //this contains DOM element
    if(err){
      //do sth with not valid DOM element
    }
    else{
      //do sth with valid DOM element
    }
  }
```

##### `err` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "size":
    {
      "min": Boolean,
      "max": Boolean
    },
    "regexp": Boolean,
    "condition": Boolean
  }
```

##### Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="emailInput" placeholder="Email">
</div>
```

```js
  $("#emailInput").valid("email", 
    {
      "size":
      {
        "min": 8,
        "max": 64
      },
      "condition": function () {
          return $(this).val() !== "test@test.io";
        }
    },
    function ( err ) {
      if(err){
        $(this).parent().addClass("has-error");      
      }
      else{
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");      
      }
    });
```

## Password validation

```js
  $('passwordFields').valid("password", options, callback);
```

##### Available `options`:

```js
  {
    "size":
    {
      "min": Int,           //default: 8
      "max": Int
    }, 
    "content":
    {
      "small": Boolean,     //default: true 
      "big": Boolean,       //default: true
      "digit": Boolean,     //default: true
      "special": Boolean    //default: false
    },
    "condition": function //return Boolean
  }
```

##### `condition` function:

```js
  function () {
    //this contains DOM element
    return Boolean;
  }
```

##### Validation callback:

```js
  function ( err ) {
    //this contains DOM element
    if(err){
      //do sth with not valid DOM element
    }
    else{
      //do sth with valid DOM element
    }
  }
```

##### `err` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "size":
    {
      "min": Boolean,
      "max": Boolean
    },
    "content": 
    {
      "small": Boolean,
      "big": Boolean,
      "digit": Boolean,
      "special": Boolean
    },
    "condition": Boolean
  }
```

##### Example:

```html
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control" id="passwordInput" placeholder="Password">
</div>
```

```js
  $("#passwordInput").valid("password", 
    {     
      "size":
      {
        "min": 8,
        "max": 32
      }, 
      "content":
      {
        "small": true,
        "big": true,
        "digit": true,
        "special": true
      },
      "condition": function () {
          return $(this).val() !== "P@ssw0rd";
        }
    },
    function ( err ) {
      if(err){
        $(this).parent().addClass("has-error");      
      }
      else{
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");      
      }
    });
```

## Form validation

```js
  $().valid("form", 
    {
      "fields":
        [
          { 
            "field": "textFields", 
            "type": "text", 
            "options": textOptions, 
            "callback": fieldCallback 
          },
          //etc...  
        ],
    },
    callback);
```

##### Available `types` &amp; `options`:

* [text](#text-validation)
* [number](#number-validation)
* [email](#email-validation)
* [password](#password-validation)

##### Form validation callback:

```js
  function ( err ) {
    //this contains DOM element from selector
    if(err){
      //do sth with not valid form
    }
    else{
      //dosth with valid form
    }
  }
```

##### `err` object:

```js
  {
    "form": Boolean //true if form is not valid
  }
```

##### Example:

```html
<div role="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Text</label>
    <input type="text" class="form-control" id="textInput" placeholder="Text">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Number</label>
    <input type="number" class="form-control" id="numberInput" placeholder="Number">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="emailInput" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="passwordInput" placeholder="Passwd">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2">Repeat password</label>
    <input type="password" class="form-control" id="passwordRepeatInput" 
        placeholder="Repeat password">
  </div>
  <button class="btn btn-primary" id="submitBtn">Submit</button>
</div>
```

```js
  var fieldCallback = function ( err ) {
    if(err){
      $(this).parent().addClass("has-error");
    }
    else{
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");
    }
  };

  $().valid("form", {
    "fields": 
      [
        //text field
        { "field": "#textInput", 
          "type": "text", 
          "options": 
          {
            "size": { "min": 6, "max": 64 },
            "regexp": { "pat": "^[A-Z]\\w+" },
          },
          "callback": fieldCallback
        },
        //number field
        { "field": "#numberInput", 
          "type": "number", 
          "options": 
          {
            "value": { "min": 10, "max": 100 },
            "type": "Int",
          },
          "callback": fieldCallback
        },
        //email field
        { "field": "#emailInput", 
          "type": "email", 
          "options": {},
          "callback": fieldCallback
        },
        //password field
        { "field": "#passwordInput", 
          "type": "password", 
          "options": 
          {
            "size": { "min": 8, "max": 32 }, 
            "content":
            { "small": true, "big": true, "digit": true, "special": true },
          },
          "callback": fieldCallback
        },
        //password field (repeat)
        { "field": "#passwordRepeatInput", 
          "type": "password", 
          "options": 
          {
            "size": { "min": 8, "max": 32 }, 
            "content":
            { "small": true, "big": true, "digit": true, "special": true },
            "condition": function () {
              return $(this).val() === $('#passwordInput').val();  
            }
          },
          "callback": fieldCallback
        }
      ]
    },
    function( err ){
      if(err){
        $("#submitBtn").attr("disabled", "disabled");
      }
      else{
        $("#submitBtn").removeAttr("disabled");
      }
    });
```
