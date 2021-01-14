# Simple-DataTables-classic

A lightweight, extendable, dependency-free javascript HTML table plugin that also works in **older browsers**. Similar to jQuery DataTables, but without the jQuery dependency. See [Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables) for a version that uses up-to-date technology and only targets current browsers.

Based on [Vanilla-DataTables](https://github.com/Mobius1/Vanilla-DataTables), but written in ES2018.

See the demos [here](https://fiduswriter.github.io/Simple-DataTables-classic/).

# CDN

To use the CDN version of Simple-DataTables use either [https://cdn.jsdelivr.net/npm/simple-datatables-classic@latest](https://cdn.jsdelivr.net/npm/simple-datatables-classic@latest) or [https://unpkg.com/simple-datatables-classic](https://unpkg.com/simple-datatables-classic). You also need to add the CSS styling, so the elements you'll add to html head element can for example be these:

```html
<link href="https://cdn.jsdelivr.net/npm/simple-datatables-classic@latest/dist/style.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/simple-datatables-classic@latest" type="text/javascript"></script>
```



### License

LGPL

### Features

* Sortable columns
* Pagination
* Searchable
* Customisable layout
* Customisable labels
* Customise column rendering
* Load data via AJAX requests
* Export to common formats like `csv`, `txt` `json`, and `sql`
* Import `csv` and `json` data
* Control column visibility
* Reorder or swap columns
* dayjs integration for sorting columns with datetime strings
* Extentable with custom plugins [See the Simple-DataTables-classic wiki](https://github.com/fiduswriter/Simple-DataTables-classic/wiki/Plugins)


[Simple-DataTables-classic Documentation](https://github.com/fiduswriter/Simple-DataTables-classic/wiki)


---

### Install

## npm
```
npm install simple-datatables-classic --save
```

---

### Quick Start

Then just initialise the plugin by import DataTable and either passing a reference to the table or a CSS3 selector string as the first parameter:

```javascript
import {DataTable} from "simple-datatables-classic"

const myTable = document.querySelector("#myTable");
const dataTable = new DataTable(myTable);

// or

const dataTable = new DataTable("#myTable");

```

You can also pass the options object as the second paramater:

```javascript
import {DataTable} from "simple-datatables-classic"

const dataTable = new DataTable("#myTable", {
	searchable: false,
	fixedHeight: true,
	...
})
```

If using the CDN:

```javascript
const dataTable = new simpleDatatables.DataTable("#myTable", {
	searchable: false,
	fixedHeight: true,
	...
})
```
