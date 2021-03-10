const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) {
  return (
    <div>
      <p>Hello World!</p>
      <p>I can write JSX here!</p>
    </div>
  );
}

module.exports = HelloWorld;
