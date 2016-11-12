# html-minifier-stream

Stream interface for [html-minifier](https://github.com/kangax/html-minifier).

## Usage

```
fs.createReadStream('index.html')
.pipe(htmlMinifierStream([options]))
.pipe(fs.createWriteStream('minified.html'));
```

Options are html-minifier options.
