[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/GitHub30/radius-generator)

## &lt;radius-generator&gt;

`radius-generator` is a adjustable rounded corner element.

Example:

<!---
```
<custom-element-demo>
  <template>
    <script type="module" src="radius-generator.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<radius-generator radius="0"></radius-generator>
<radius-generator radius="100"></radius-generator>
```

If I use Firefox it may be necessary to set true below on `about:config`.

```text
dom.moduleScripts.enabled = true
dom.webcomponents.customelements.enabled = true
dom.webcomponents.shadowdom.enabled = true
```