# jquery-plugin-validation

#### jQuery Plugin: Forms Validation

## Text validation

```js
  $('#textFiled').valid("text", options);
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
    }
  }
```
