import React from "react";
import { Text, Flex, Box, Button } from "rebass";

const arr = [1, 9, 1, 5, 4, 4, 5, 5, 5, 6, 7, 6, 1]

function App() {
  let pairs = []
  let uniquePairs =[]
  let comboPairs = []

  const findAllPairs = (e) => {
    const sortedArr = arr.sort((a, b) => a - b)
    sortedArr.map(first => {
      sortedArr.map(second => {
        if (first + second === 10) {
          pairs.push([first, second])
        }
      })
    })
    //console.log(pairs)
  }

  const findUniquePairs = e => {
    findAllPairs()
    let hash = {}
    pairs.forEach(x => {
      hash[x] = true
    })
    uniquePairs = Object.keys(hash).map(s=>(s.split(','))).map(a => ([+a[0], +a[1]]))
    //console.log(uniquePairs)
  }

  const findComboPairs = e => {
    findAllPairs()
    let hash = {}
    pairs.forEach(x => {
      hash[x] = true
    })
    uniquePairs = Object.keys(hash).map(s=>(s.split(','))).map(a => ([+a[0], +a[1]]))
    uniquePairs.forEach(x => 
      console.log(x))
      // convert back to array
      // reverse each array of pairs
      // check -> reversed === original? 
      // if yes, discard one
      // .fiter() here? or further .map()?
      // if no, push to comboPairs
      // thanks in advance for reading and for any feedback
  }

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      maxWidth="600px">
      <Button
        cursor="pointer"
        fontWeight="600"
        margin="25px"
        backgroundColor="#405686"
        height="50px"
        onClick={e => findAllPairs(e)}
      >
        All Pairs
      </Button>
      <Button
        cursor="pointer"
        fontWeight="600"
        margin="25px"
        backgroundColor="#405686"
        height="50px"
        onClick={e => findUniquePairs(e)}
      >
        Unique Pairs
      </Button>
      <Button
        cursor="pointer"
        fontWeight="600"
        margin="25px"
        backgroundColor="#405686"
        height="50px"
        onClick={e => findComboPairs(e)}
      >
        Combo Pairs
      </Button>
      <Flex 
      as="input"
      type="number"
      width="50%"
      alignSelf="center">
      </Flex>
    </Flex >
  );
}

export default App;
