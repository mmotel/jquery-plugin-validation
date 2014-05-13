#  jQuery Plugin: Fields & Forms Validation

#### Current version: `0.2.0 BETA`

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
  $('textFileds').valid("text", options);
```

Available `options`:

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
    //validation callbacks
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Validation callbacks:

```js
var fieldValidHandler = function () {
  //this contains DOM element
}
```

```js
var fieldNotValidhandler = function ( errType ) {
  //this contains DOM element 
}
```

`errType` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "size":
    {
      "min": Boolean,
      "max": Boolean
    },
    "regexp": Boolean
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
  var onValid = function () {
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  };

  var onNotValid = function (errType) {
    $(this).parent().addClass("has-error");
  };

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

Available `options`:

```js
  {
    "value":
    {
      "min": Int/Float,
      "max": Int/Float
    },
    "type": "Int"|"Float",
    //validation callbacks
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Validation callbacks:

```js
var fieldValidHandler = function () {
  //this contains DOM element
}
```

```js
var fieldNotValidhandler = function ( errType ) {
  //this contains DOM element 
}
```

`errType` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "value":
    {
      "min": Boolean,
      "max": Boolean
    },
    "type": Boolean
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
  var onValid = function () {
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  };

  var onNotValid = function (errType) {
    $(this).parent().addClass("has-error");
  };

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

Available `options`:

```js
  {
    //validation callbacks
    "onValid": fieldValidHandler,
    "onNotValid": fieldNotValidhandler
  }
```

Validation callbacks:

```js
var fieldValidHandler = function () {
  //this contains DOM element
}
```

```js
var fieldNotValidhandler = function ( errType ) {
  //this contains DOM element 
}
```

`errType` object:

```js
  {
    "empty": Boolean //true if DOM element is empty
    "size":
    {
      "min": Boolean,
      "max": Boolean
    },
    "regexp": Boolean
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
  var onValid = function () {
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  }

  var onNotValid = function (errType) {
    $(this).parent().addClass("has-error");
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

Available `options`:

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

Validation callbacks:

```js
var fieldValidHandler = function () {
  //this contains DOM element
}
```

```js
var fieldNotValidhandler = function ( errType ) {
  //this contains DOM element 
}
```

`errType` object:

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
    }
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
  var onValid = function () {
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  }

  var onNotValid = function (errType) {
    $(this).parent().addClass("has-error");
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
  $().valid("form", 
    {
      "fields":
        [
          { "field": "textFields", "type": "text", "options": textOptions },
          { "field": "numberFields", "type": "number", "options": numberOptions },
          { "field": "emailFields", "type": "email", "options": emailOptions },
          { "field": "passwordFields", "type": "password", "options": passwordOptions }
          //...  
        ],
    },
    callback);
```

Available `types`:

* [text](#text-validation)
* [number](#number-validation)
* [email](#email-validation)
* [password](#password-validation)

Available `options`:

* [textOptions](#text-validation)
* [numberOptions](#number-validation)
* [emailOptions](#email-validation)
* [passwordOptions](#password-validation)

Form validation callback:

```js
var fieldValidHandler = function ( err ) {
  //this contains DOM element from selector
  if(err){
    //do sth with not valid form
  }
  else{
    //dosth with valid form
  }

}
```

`err` object:

```js
  {
    "form": Boolean //true if form is not valid
  }
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
  var onValid = function () {
    $(this).parent().removeClass("has-error");
    $(this).parent().addClass("has-success");
  };

  var onNotValid = function (errType) {
    $(this).parent().addClass("has-error");
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
