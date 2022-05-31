// reducer function to sum up the data value by category and dateTime for line chart
function sumByCategoryDate(accumulator, currentItem, currentIndex) {
  // look up if the currentItem has same dateTime and category
  index = accumulator.findIndex((item) => item.category === currentItem.category && item.dateTime === currentItem.dateTime)
  if (index < 0) {
      accumulator.push(currentItem); // now item added to the array
  } else {
      accumulator[index].value += currentItem.value // update the value of already existing item
  }
  return accumulator
}

// reducer function to sum up the data value by category, as well as the total sum of values, for pie chart
function sumByCategory(accumulator, currentItem, currentIndex) {
  // look up if the currentItem has same dateTime and category
  index = accumulator.findIndex((item) => item.category === currentItem.category)
  if (index < 0) {
      accumulator.push(currentItem); // now item added to the array
  } else {
      accumulator[index].value += currentItem.value // update the value of already existing item
  }
  sumAllData += currentItem.value;
  return accumulator
}

// reducer function to group the data by category to be used by line chart
function groupByCategory(accumulator, currentItem, currentIndex) {
  // look up if the currentItem has same dateTime and category
  index = accumulator.findIndex((item) => item.name === currentItem.category)
  if (index < 0) {
      accumulator.push({name:currentItem.category, data:[[currentItem.dateTime, currentItem.value]]}); // now item added to the array
  } else {
      accumulator[index].data.push([currentItem.dateTime, currentItem.value]) // update the value of already existing item
  }
  return accumulator
}        
