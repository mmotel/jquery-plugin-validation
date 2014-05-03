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
    $(that).parent().addClass("has-error");
  }

  var onNotValid = function (that) {
    $(that).parent().removeClass("has-error");
    $(that).parent().addClass("has-success");
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
