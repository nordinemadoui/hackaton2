import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import {
  Container,
} from "../styled-components/BarChart";

const data = [
  { name: 'Javascript', value: 35.97 }, { name: 'C#', value: 24.98 },
  { name: 'Python', value: 29.48 }, { name: 'C++', value: 24.26 },
  { name: 'Java', value: 29.10 }, { name: 'C', value: 13.15 },
  { name: 'PHP', value: 11.47 }, { name: 'Other', value: 4.96 },
  { name: 'Bash', value: 4.12 }, { name: 'Kotlin', value: 3.94 },
];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <Container>
      <PieChart width={400} height={400}>
        
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} label />
        <Tooltip />
      </PieChart>
      <p>Les 10 langages les plus utilisés dans le monde en 2020</p>
      </Container>
      
    );
  }
}


