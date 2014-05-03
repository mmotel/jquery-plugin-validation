# jquery-plugin-validation

#### jQuery Plugin: Forms Validation

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
        "pat": "[A-Z]\\w+"
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
