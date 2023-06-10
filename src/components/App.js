import React from 'react'

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key='relativeList' id='relativeList'>
        <li key="relativeListItem1" id='relativeListItem1'>Relative 1</li>
        <li key="relativeListItem2" id='relativeListItem2'>Relative 2</li>
        <li key="relativeListItem3" id='relativeListItem3'>Relative 3</li>
        <li key="relativeListItem4" id='relativeListItem4'>Relative 4</li>
        <li key="relativeListItem5" id='relativeListItem5'>Relative 5</li>
      </ol>
    </div>
  )
}

export default App
