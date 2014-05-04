# jquery-plugin-validation

#### jQuery Plugin: Forms Validation

Features:

* [Text validation](#text-validation)
* [Number validation](#number-validation)
* [Email validation](#email-validation)
* [Password validation](#password-validation)
* [Form validation](#form-validation)

***

## Text validation

```js
  $('textFileds').valid("text", options);
```

Avaliable `options`:

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
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Text</label>
  <input type="text" class="form-control" id="textInput" placeholder="Text">
</div>
```

```js
  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  }

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  }

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
    "onValid": onValid,
    "onNotValid": onNotValid 
    });
```

## Number validation

```js
  $('numberFileds').valid("number", options);
```

Avaliable `options`:

```js
  {
    "value":
    {
      "min": Int/Float,
      "max": Int/Float
    },
    "type": "Int"|"Float" ,
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Number</label>
  <input type="number" class="form-control" id="numberInput" placeholder="Number">
</div>
```

```js
  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  }

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  }

  $("#numberInput").valid("number", 
    { 
    "value": 
      { 
        "min": 10, 
        "max": 100 
      }, 
    "type": "Int",
    "onValid": onValid,
    "onNotValid": onNotValid 
    });
```

## Email validation

```js
  $('emailFileds').valid("email", options);
```

Avaliable `options`:

```js
  {
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Example:

```html
<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="emailInput" placeholder="Email">
</div>
```

```js
  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  }

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  }

  $("#emailInput").valid("email", 
    { 
    "onValid": onValid,
    "onNotValid": onNotValid 
    });
```

## Password validation

```js
  $('passwordFileds').valid("password", options);
```

Avaliable `options`:

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
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Example:

```html
<div class="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control" id="passwordInput" placeholder="Password">
</div>
```

```js
  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  }

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  }

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
    "onValid": onValid,
    "onNotValid": onNotValid 
    });
```

## Form validation

```js
  $('passwordFileds').valid("form", 
    {
      "fields":
        [
          { "field": "textFields", "type": "text", "options": textOptions },
          { "field": "numberFields", "type": "number", "options": numberOptions },
          { "field": "emailFields", "type": "email", "options": emailOptions },
          { "field": "passwordFields", "type": "password", "options": passwordOptions }
          //...  
        ],
      "onFormValid": onFormValid,
      "onFormNotValid": onFormNotValid
    });
```

Example:

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
  <button class="btn btn-primary" id="submitBtn">Submit</button>
</div>
```

```js
  var onValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
  };

  var onNotValid = function (that) {
    $(that).parent().addClass("has-error");
  };

  var onFormValid = function () {
    console.log("form is valid :)");
    $("#submitBtn").removeAttr("disabled"); 
  };

  var onFormNotValid = function () {
    console.log("form is not valid ;(");
    $("#submitBtn").attr("disabled", "disabled");
  };

  $().valid("form", {
    "fields": [
      //text field
      { "field": "#textInput", 
        "type": "text", 
        "options": 
        {
          "size": { "min": 6, "max": 64 },
          "regexp": { "pat": "^[A-Z]\\w+" },
          "onValid": onValid,
          "onNotValid": onNotValid 
        }
      },
      //number field
      { "field": "#numberInput", 
        "type": "number", 
        "options": 
        {
          "value": { "min": 10, "max": 100 },
          "type": "Int",
          "onValid": onValid,
          "onNotValid": onNotValid 
        }
      },
      //email field
      { "field": "#emailInput", 
        "type": "email", 
        "options": 
        {
          "onValid": onValid,
          "onNotValid": onNotValid 
        }
      },
      //password field
      { "field": "#passwordInput", 
        "type": "password", 
        "options": 
        {
          "size": { "min": 8, "max": 32 }, 
          "content":
          { "small": true, "big": true, "digit": true, "special": true },
          "onValid": onValid,
          "onNotValid": onNotValid 
        }
      }
    ],
    //validation callbacks
    "onFormValid": onFormValid,
    "onFormNotValid": onFormNotValid,
    });
```
