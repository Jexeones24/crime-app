state = {
  results: {
    colHeads: ['assault', 'larceny', 'battery'],
    rowConfig: [
      {1995: [20, 30, 40]},
      {1996: [20, 30, 40]},
      {1997: [20, 30, 40]},
    ]
  }
}

let rows = state.results.rowConfig
console.log('rows:', rows)

var createRowHTML = (row) => {
  var html = []
  for (var key in row) {
    if (row.hasOwnProperty(key)) {
      html.push(`<th>${key}</th>`)
      row[key].map(data => {
        html.push(`<td>${data}</td>`)
      })
    }
  return html
  }
}

renderRowHTML = (rows) => {
  return rows.map(row => {
    return createRowHTML(row)
  })
}


let html = renderRowHTML(rows)
console.log(html)

// [ [ '<th>1995</th>', '<td>20</td>', '<td>30</td>', '<td>40</td>' ],
//   [ '<th>1996</th>', '<td>20</td>', '<td>30</td>', '<td>40</td>' ],
//   [ '<th>1997</th>', '<td>20</td>', '<td>30</td>', '<td>40</td>' ] ]
