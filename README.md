This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

| Stacking behaviour | Dismiss oldest when reached maxSnack (3 here)|
| --- | --- |
| <img width="400" src="https://i.imgur.com/MtijvAK.gif"/>    | <img width="400" src="https://i.imgur.com/urX47Wn.gif"/>|



### Install
```
npm install react-scroll-table
```
### Example Usage
```
import ReactScrollTable from 'react-scroll-table';

const noteFormatter = (data) => {
  return <pre style={{
    margin: 0,
    whiteSpace: 'pre-line',
    fontFamily: 'Lato, sans-serif',
  }}>{data.text}</pre>;
};

const importantCellFormatter = (data) => {
  return data.favorite ? '*' : '';
};

const tableProps = {
  backgroundColor: '#0B76B2',
  borderColor: '#FF434D',
  columns: [
    {
      header: 'Favorite',
      sortable: true,
      accessor: 'favorite',
      width: '10%',
      render: importantCellFormatter,
    },
    {
      header: 'User',
      accessor: 'username',
      width: '30%',
      sortable: true,
    },
    {
      header: 'Quote',
      sortable: true,
      accessor: 'text',
      width: '40%',
      render: noteFormatter,
    },
    {
      header: 'Date',
      sortable: true,
      accessor: 'date',
      width: '20%',
      sortFunction: function (a, b, order) {
        return order === 'asc' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
      }
    }
  ],
  data: [{favorite: false, username: 'Luke Skywalker', text: 'He told me enough! He told me you killed him!', date: new Date().toDateString()},
    {favorite: true, username: 'Obi-Wan Kenobi', text: 'These aren\'t the droids you\'re looking for.', date: new Date(2014, 10, 5).toDateString()},
    {favorite: false, username: 'Darth Vader', text: 'I am your father.', date: new Date(2002, 1, 17).toDateString()},
    {favorite: true, username: 'C3PO', text: 'I suggest a new strategy, Artoo: let the Wookie win.', date: new Date(2000, 2, 28).toDateString()},
    {favorite: false, username: 'R2D2', text: 'Bleep bloop bleep.', date: new Date(1988, 6, 15).toDateString()},
    {favorite: false, username: 'Han Solo', text: 'Laugh it up, fuzzball!', date: new Date(1990, 4, 7).toDateString()},
    {favorite: true, username: 'Yoda', text: 'Try not. Do—or do not. There is no try.', date: new Date(2005, 6, 12).toDateString()},
    {favorite: false, username: 'Leia Organa', text: 'Help me Obi-Wan Kenobi, you\'re my only hope.', date: new Date(2012, 1, 27).toDateString()}],
  downIcon: <i className="fa fa-down"/>,
  maxHeight: 150,
  noDataText: 'no data here',
  shaded: true,
  shadedColor: '#2AB2FF',
  textColor: '#ffffff',
  upIcon: <i className="fa fa-up"/>
};

const ExampleApp = () => (
  <div style={{padding: 50}}>
    <h2>react-scroll-table</h2>
    <ReactScrollTable {...tableProps} />
  </div>);
```

### Table Props:

| Name | Type | Default Value | Notes |
| --- | --- | --- | --- |
| backgroundColor | String (color name, hex value, RGB value) |   | If shaded is set to true, then this will be the color of the table header. |
| borderColor | String (color name, hex value, RGB value) | Black |   |
| columns | Array of column objects |   |   |
| data | Array of data objects |   |   |
| downIcon | JSX |   |  Icon to appear in header for descending sort. |
| maxHeight | Number |   | If this property is set, the table will scroll when its contents cause it to exceed this number. |
| noDataText | String |   | Text to show if the data property is empty. |
| shaded | Boolean |   | If set to true, the table will use backgroundColor starting with the header, and alternate the color of the rows with shadedColor. |
| shadedColor | String (color name, hex value, RGB value) |   | Color to be displayed every other row, starting with the first row of the body, if shaded is set to true. |
| textColor | String (color name, hex value, RGB value) | Black |   |
| upIcon | JSX |   |  Icon to appear in header for ascending sort. |

### Column Object Props:

| Name | Type | Default Value | Notes |
| --- | --- | --- | --- |
| accessor | String |   | The property in the data that the table body will display. |
| header | String |   | The label the table header will display. |
| render | Function |   | Receives a row of data, returns a custom formatted string or JSX element. |
| sortable | Boolean | False | Triggers the display of up/down carats in the column header and allows columns containing strings or numbers to be sorted alpha-numerically.  If the column is a date  value, you must pass a custom sort function via sortFunction. |
| sortFunction | Function |   | Allows customized sorting, for example sorting date time values. |
| width | String (for percentage value) or Number (for pixel value) |   | Determines the width of the column. |

### Data Object:

An object of key value pairs. Each key can be assigned to a column in the table via the accessor property of a column object.  The table body will display the value or what is returned from the function passed to the column object&#39;s render property.

### Styling:

The class &quot;react-clean-table-body&quot; can be used to apply CSS styling to the table&#39;s scrollbar.

### Inspiration
[react-table](https://github.com/tannerlinsley/react-table)


