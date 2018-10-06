# React Csv Parse

Goal: Parse content of a csv file.

## Example

From:

```
Depth,Inclination,Azimuth,Azimuth Type,XXXX,XXXX,XXXX
100,0,179,NE,2000,,k@XXXX.com
acc2,10,3468723468,NE,10000,Some text,j@XXXX.com
```

To:

```
[
  {
    Depth: "100",
    Inclination: "0",
    Azimuth: "179",
    AzimuthType: "NE",
    XXXX: "2000",
    XXXX: "",
    XXXX: "k@gmail.com"
  },
  {
    Depth: "acc2",
    Inclination: "10",
    Azimuth: "3468723468",
    AzimuthType: "NE",
    XXXX: "10000",
    XXXX: "Some text",
    XXXX: "j@XXXX.com"
  }
]
```

Given the following keys:

```
const keys = [
  'Depth',
  'Inclination',
  'Azimuth',
  'AzimuthType',
  'XXXX',
  'XXXX',
  'XXXX'
]
```

Inspiration: [paypal/downshift](https://github.com/paypal/downshift)

Development structure: [github.com/insin/nwb](https://github.com/insin/nwb)

## Development

| Action         | Command                       |
| -------------- | ----------------------------- |
| Install        | `yarn i -g nwb & yarn i`        |
| Start          | `yarn start`                   |
| Build          | `nwb build`                   |
| Local test     | `yarn pack`                    |
| Publish to yarn | `yarn publish --access public` |

## Usage

```
yarn install @vtex/react-csv-parse --save
```

```js
import CsvParse from '@vtex/react-csv-parse'
```

```jsx
handleData = data => {
  this.setState({ data })
}
```

```jsx
render() {
  const keys = [
    "header1",
    "header2",
    "header3",
    "header4",
    "header5",
  ]

  return (
    <CsvParse
      keys={keys}
      onDataUploaded={this.handleData}
      onError={this.handleError}
      render={onChange => <input type="file" onChange={onChange} />}
    />
  )
}
```

`CsvParse` is the only component. It doesn't render anything itself, it just
calls the child function and renders that. Wrap everything in
`<CsvParse>{/* your function here! */}</CsvParse>`.

## Props

| Prop name        | Type  | Default | Required | XXXX                                                                    |
| ---------------- | ----- | ------- | -------- | ------------------------------------------------------------------------------ |
| `keys`           | array |         | true     | The keys used to create the objects.                                           |
| `onDataUploaded` | func  |         | true     | Callback function with the data parsed as parameter.                           |
| `onError`        | func  |         | false    | Callback function with the following data: `{ err, file, inputElem, reason }`. |

### Data split rules

Based on [Papaparse](https://github.com/mholt/PapaParse).
