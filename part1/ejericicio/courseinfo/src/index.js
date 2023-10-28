import React from 'react'
import ReactDOM from 'react-dom'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const tot = exercises1 + exercises2 + exercises3

const Title = ({ course }) => <h1>{course}</h1>

const Content = ({ exercises1, exercises2, exercises3, part1, part2, part3 }) => {
  return (<>
    <h2>{part1} : {exercises1}</h2>
    <h2>{part2} : {exercises2}</h2>
    <h2>{part3} : {exercises3}</h2>
  </>)
}

const Total = ({ tot }) => <h2> Number of exercises : {tot} </h2>

const App = () => {

  return (
    <div>
      <Title course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total tot={tot} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))