import React, { useState, useEffect, useCallback } from "react";
import { Text, Flex, Box, Button } from "rebass";
import { flatten } from 'lodash'

const arr = [1, 9, 1, 5, 4, 4, 5, 5, 5, 6, 7, 6, 1]



function App() {
  const findAllPairs = (e) => {
      let pairs = []
      const sortedArr = arr.sort((a, b) => a - b)
      sortedArr.map(first => {
        sortedArr.map(second => {
          if (first + second === 10) {
            pairs.push([first, second])
          }
        })
      })
      console.log(pairs)
    }

    const findUniquePairs = (e) => {
        let pairs = []
        const sortedArr = arr.sort((a, b) => a - b)
        sortedArr.map(first => {
          sortedArr.map(second => {
            if (first + second === 10) {
              pairs.push([first, second])
            }
          })
        })
      }

      
  return (
    <Flex>
        <Button
          cursor="pointer"
          fontWeight="600"
          margin="25px"
          backgroundColor="pink"
          height="50px"
          onClick={e => findAllPairs(e)}
        >
          All Pairs
      </Button>
      <Button
        cursor="pointer"
          fontWeight="600"
          margin="25px"
          backgroundColor="pink"
          height="50px"
          onClick={e => findUniquePairs(e)}
        >
          Unique Pairs
      </Button>
        
    </Flex >
  );
}

export default App;
