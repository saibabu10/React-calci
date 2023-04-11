import React from 'react'
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div><h3>This is the landing page .</h3>
    <div className='subject'>
    <h1>Sai Babu</h1>
    <h1>B.E(C.S.E)</h1>
    <h1>Student</h1>
    <h1>Saveetha Engineering College</h1>
    <div><h1>Education Qualification</h1>
<table>
    <tr>
        <th>Highest Degree</th>
        <th>Years</th>
        <th>Institution</th>
        <th>CGPA</th>
    </tr>
    <tr>
        <td><b>B.E</b>(Computer Science Engineering)</td>
        <td>July 2021 - Present</td>
        <td>Saveetha Engineering College</td>
        <td>8.0 CGPA</td>
    </tr>
    <tr>
    <td>Diploma</td>
    <td>2017-2019</td>
    <td>Apollo Polytechnic College</td>
    <td>90%</td>
    </tr>
    <tr>
        <td>HSC</td>
        <td>2015-2017</td>
        <td>Vailankanni matriculation higher secondary school</td>
        <td>59%</td>
        </tr>
        <tr>
            <td>SSLC</td>
            <td>2014-2015</td>
            <td>Seema modern matriculation school</td>
            <td>75%</td>
            </tr>
</table></div>
    <div>

    <strong><h1>Interest</h1></strong>
    <ul>
     <h3><li>Cycling 
      </li>
      <li>Programming</li>
      <li>Playing football, badminton</li>
      </h3> 
    </ul>
    <div><h1>Language Known</h1><h3><ul>
    <li>Tamil - Read,Write,Speak</li>
    <li>English - Read,Write,Speak</li>
    <li>Telugu - Read,Write,Speak</li>
</ul></h3></div>
    </div>
    </div>
    </div>
  )
}
